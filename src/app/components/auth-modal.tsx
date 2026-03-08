import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Lock, User, Loader2, CheckCircle } from "lucide-react";
import { supabase } from "../../lib/supabase";

interface AuthModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export function AuthModal({ isOpen, onOpenChange }: AuthModalProps) {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isVerificationSuccess, setIsVerificationSuccess] = useState(false);
    const [isResettingPassword, setIsResettingPassword] = useState(false);
    const [resetSent, setResetSent] = useState(false);

    useEffect(() => {
        // Check for verification success in URL
        const checkVerification = async () => {
            const hash = window.location.hash;
            const search = window.location.search;

            // Supabase often appends access_token or type=signup to the URL on success
            if (hash.includes("access_token") || search.includes("type=signup") || search.includes("verified=true")) {
                setIsVerificationSuccess(true);
                // Clean up the URL
                window.history.replaceState(null, "", window.location.pathname);
                // Open modal if not open
                onOpenChange(true);
            }
        };
        checkVerification();
    }, []);

    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setIsSuccess(false);
                setIsVerificationSuccess(false);
                setIsResettingPassword(false);
                setResetSent(false);
                setError(null);
                setPassword("");
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/reset-password`,
            });
            if (error) throw error;
            setResetSent(true);
        } catch (err: any) {
            setError(err.message || "Failed to send reset email");
        } finally {
            setIsLoading(false);
        }
    };

    const resendVerification = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const { error } = await supabase.auth.resend({
                type: 'signup',
                email,
                options: {
                    emailRedirectTo: window.location.origin,
                }
            });
            if (error) throw error;
            alert("Verification email resent!");
        } catch (err: any) {
            setError(err.message || "Failed to resend verification");
        } finally {
            setIsLoading(false);
        }
    };

    const validatePassword = (pass: string) => {
        const minLength = 8;
        const hasUpper = /[A-Z]/.test(pass);
        const hasLower = /[a-z]/.test(pass);
        const hasNumber = /[0-9]/.test(pass);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pass);

        if (pass.length < minLength) return "Password must be at least 8 characters long";
        if (!hasUpper) return "Password must contain at least one uppercase letter";
        if (!hasLower) return "Password must contain at least one lowercase letter";
        if (!hasNumber) return "Password must contain at least one number";
        if (!hasSpecial) return "Password must contain at least one special character (@, #, $ etc.)";
        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Validate password for sign-up
        if (!isLogin && !isResettingPassword) {
            const passError = validatePassword(password);
            if (passError) {
                setError(passError);
                setIsLoading(false);
                return;
            }
        }

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
                onOpenChange(false);
            } else {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name: fullName,
                        },
                        emailRedirectTo: window.location.origin,
                    },
                });
                if (error) throw error;
                setIsSuccess(true);
            }
        } catch (err: any) {
            let msg = err.message || "An error occurred";
            if (msg.includes("rate limit")) {
                msg = "Too many attempts! Please wait about 60 minutes or try a different email address.";
            }
            setError(msg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
            <AnimatePresence>
                {isOpen && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild>
                            <motion.div
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />
                        </Dialog.Overlay>
                        <Dialog.Content asChild>
                            <div className="fixed inset-0 flex items-center justify-center z-[151] p-4 pointer-events-none">
                                <motion.div
                                    className="w-full max-w-md bg-[#0B0F19] rounded-3xl border border-white/20 overflow-hidden relative pointer-events-auto"
                                    style={{
                                        boxShadow: "0 0 40px rgba(11, 123, 255, 0.15), 0 0 80px rgba(56, 101, 207, 0.1)",
                                    }}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                >
                                    {/* Glowing Border Animation */}
                                    <motion.div
                                        className="absolute inset-0 rounded-3xl pointer-events-none"
                                        style={{
                                            background: "linear-gradient(135deg, #92dbe0, #0b7bff, #92dbe0)",
                                            backgroundSize: "200% 200%",
                                            padding: "2px",
                                            opacity: 0.3,
                                        }}
                                        animate={{
                                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    >
                                        <div className="w-full h-full bg-[#0B0F19] rounded-[22px]" />
                                    </motion.div>

                                    <div className="relative z-10 p-8">
                                        <div className="flex justify-between items-center mb-6">
                                            <Dialog.Title className="text-2xl font-bold bg-gradient-to-r from-white to-[#92dbe0] bg-clip-text text-transparent">
                                                {resetSent ? "Check Email" : isResettingPassword ? "Reset Password" : isVerificationSuccess ? "Verified!" : isSuccess ? "Verify Email" : isLogin ? "Welcome Back" : "Create Account"}
                                            </Dialog.Title>
                                            <Dialog.Close asChild>
                                                <button className="p-2 rounded-full hover:bg-white/5 transition-colors text-white/50 hover:text-white">
                                                    <X className="w-6 h-6" />
                                                </button>
                                            </Dialog.Close>
                                        </div>

                                        {resetSent ? (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-center space-y-6 py-4"
                                            >
                                                <div className="w-20 h-20 bg-[#0b7bff]/10 rounded-full flex items-center justify-center mx-auto border border-[#0b7bff]/20">
                                                    <Mail className="w-10 h-10 text-[#0b7bff]" />
                                                </div>
                                                <div className="space-y-2">
                                                    <h3 className="text-xl font-bold text-white">Reset Link Sent!</h3>
                                                    <p className="text-white/60 text-sm leading-relaxed">
                                                        We've sent a password reset link to <span className="text-white font-semibold">{email}</span>.
                                                    </p>
                                                </div>
                                                <motion.button
                                                    onClick={() => {
                                                        setIsResettingPassword(false);
                                                        setResetSent(false);
                                                    }}
                                                    className="w-full px-8 py-4 rounded-xl text-lg font-semibold text-white mt-4"
                                                    style={{ background: "linear-gradient(135deg, #0b7bff, #3865cf)" }}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    Back to Login
                                                </motion.button>
                                            </motion.div>
                                        ) : isVerificationSuccess ? (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-center space-y-6 py-4"
                                            >
                                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
                                                    <CheckCircle className="w-10 h-10 text-green-500" />
                                                </div>
                                                <div className="space-y-2">
                                                    <h3 className="text-xl font-bold text-white">Verification Successful!</h3>
                                                    <p className="text-white/60 text-sm leading-relaxed">
                                                        Your account has been successfully verified. You can now sign in with your email and password.
                                                    </p>
                                                </div>
                                                <motion.button
                                                    onClick={() => {
                                                        setIsVerificationSuccess(false);
                                                        setIsLogin(true);
                                                    }}
                                                    className="w-full px-8 py-4 rounded-xl text-lg font-semibold text-white mt-4"
                                                    style={{ background: "linear-gradient(135deg, #0b7bff, #3865cf)" }}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    Continue to Sign In
                                                </motion.button>
                                            </motion.div>
                                        ) : isSuccess ? (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-center space-y-6 py-4"
                                            >
                                                <div className="w-20 h-20 bg-[#0b7bff]/10 rounded-full flex items-center justify-center mx-auto border border-[#0b7bff]/20">
                                                    <CheckCircle className="w-10 h-10 text-[#0b7bff]" />
                                                </div>
                                                <div className="space-y-2">
                                                    <h3 className="text-xl font-bold text-white">Verification Sent!</h3>
                                                    <p className="text-white/60 text-sm leading-relaxed">
                                                        We've sent a verification link to <span className="text-white font-semibold">{email}</span>.
                                                    </p>
                                                    <p className="text-[11px] text-[#0b7bff]/80 italic">
                                                        Tip: Check your **Spam** or **Promotions** folder if you don't see it.
                                                    </p>
                                                </div>
                                                <div className="space-y-3">
                                                    <motion.button
                                                        onClick={() => onOpenChange(false)}
                                                        className="w-full px-8 py-4 rounded-xl text-lg font-semibold text-white mt-4"
                                                        style={{
                                                            background: "linear-gradient(135deg, #0b7bff, #3865cf)",
                                                        }}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                    >
                                                        Got it, thanks!
                                                    </motion.button>
                                                    <button
                                                        onClick={(e) => { e.preventDefault(); resendVerification(); }}
                                                        disabled={isLoading}
                                                        className="w-full text-xs text-white/30 hover:text-white/50 transition-colors disabled:opacity-50"
                                                    >
                                                        {isLoading ? "Sending..." : "Didn't receive it? Click to resend"}
                                                    </button>
                                                    <button
                                                        onClick={() => { setIsSuccess(false); setError(null); }}
                                                        className="w-full text-[10px] text-white/20 hover:text-white/40 transition-colors"
                                                    >
                                                        Entered wrong email? Click to edit
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <>
                                                <div className="space-y-4 mb-6">
                                                    <motion.button
                                                        onClick={async () => {
                                                            setIsLoading(true);
                                                            try {
                                                                const { error } = await supabase.auth.signInWithOAuth({
                                                                    provider: 'google',
                                                                    options: {
                                                                        redirectTo: window.location.origin
                                                                    }
                                                                });
                                                                if (error) throw error;
                                                            } catch (err: any) {
                                                                setError(err.message);
                                                                setIsLoading(false);
                                                            }
                                                        }}
                                                        className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                    >
                                                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path
                                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                                fill="#4285F4"
                                                            />
                                                            <path
                                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                                fill="#34A853"
                                                            />
                                                            <path
                                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                                                                fill="#FBBC05"
                                                            />
                                                            <path
                                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                                fill="#EA4335"
                                                            />
                                                        </svg>
                                                        Continue with Google
                                                    </motion.button>

                                                    <div className="relative">
                                                        <div className="absolute inset-0 flex items-center">
                                                            <div className="w-full border-t border-white/10"></div>
                                                        </div>
                                                        <div className="relative flex justify-center text-xs uppercase">
                                                            <span className="bg-[#0B0F19] px-4 text-white/30 font-medium tracking-widest">Or continue with email</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <form onSubmit={isResettingPassword ? handleResetPassword : handleSubmit} className="space-y-4">
                                                    {!isLogin && !isResettingPassword && (
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium text-white/70 ml-1">Full Name</label>
                                                            <div className="relative">
                                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                                                <input
                                                                    type="text"
                                                                    required
                                                                    value={fullName}
                                                                    onChange={(e) => setFullName(e.target.value)}
                                                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#0b7bff]/50 focus:outline-none transition-colors text-white placeholder:text-white/20"
                                                                    placeholder="John Doe"
                                                                />
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium text-white/70 ml-1">Email Address</label>
                                                        <div className="relative">
                                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                                            <input
                                                                type="email"
                                                                required
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#0b7bff]/50 focus:outline-none transition-colors text-white placeholder:text-white/20"
                                                                placeholder="john@example.com"
                                                            />
                                                        </div>
                                                    </div>

                                                    {!isResettingPassword && (
                                                        <div className="space-y-2">
                                                            <div className="flex justify-between items-center">
                                                                <label className="text-sm font-medium text-white/70 ml-1">Password</label>
                                                                {isLogin && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => setIsResettingPassword(true)}
                                                                        className="text-xs text-[#0b7bff] hover:text-[#92dbe0] transition-colors"
                                                                    >
                                                                        Forgot Password?
                                                                    </button>
                                                                )}
                                                            </div>
                                                            <div className="relative">
                                                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                                                <input
                                                                    type="password"
                                                                    required
                                                                    value={password}
                                                                    onChange={(e) => setPassword(e.target.value)}
                                                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#0b7bff]/50 focus:outline-none transition-colors text-white placeholder:text-white/20"
                                                                    placeholder="••••••••"
                                                                />
                                                            </div>
                                                            {!isLogin && (
                                                                <p className="text-[10px] text-white/40 ml-1 mt-1">
                                                                    Security: 8+ chars, uppercase, lowercase, number & symbol.
                                                                </p>
                                                            )}
                                                        </div>
                                                    )}

                                                    {error && (
                                                        <p className="text-sm text-red-400 ml-1">{error}</p>
                                                    )}

                                                    <motion.button
                                                        type="submit"
                                                        disabled={isLoading}
                                                        className="w-full group px-8 py-4 rounded-xl text-lg font-semibold text-white relative overflow-hidden mt-4 disabled:opacity-50"
                                                        style={{
                                                            background: "linear-gradient(135deg, #0b7bff, #3865cf)",
                                                            boxShadow: "0 0 20px rgba(11, 123, 255, 0.3)",
                                                        }}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                    >
                                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                                            {isLoading ? (
                                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                            ) : (
                                                                isResettingPassword ? "Send Reset Link" : isLogin ? "Sign In" : "Sign Up"
                                                            )}
                                                        </span>
                                                    </motion.button>

                                                    {isResettingPassword && (
                                                        <button
                                                            type="button"
                                                            onClick={() => setIsResettingPassword(false)}
                                                            className="w-full text-center text-sm text-white/50 hover:text-white transition-colors"
                                                        >
                                                            Back to Login
                                                        </button>
                                                    )}
                                                </form>

                                                {!isResettingPassword && (
                                                    <div className="mt-6 text-center">
                                                        <button
                                                            onClick={() => setIsLogin(!isLogin)}
                                                            className="text-sm text-white/50 hover:text-white transition-colors"
                                                        >
                                                            {isLogin ? (
                                                                <>Don't have an account? <span className="text-[#0b7bff]">Sign Up</span></>
                                                            ) : (
                                                                <>Already have an account? <span className="text-[#0b7bff]">Sign In</span></>
                                                            )}
                                                        </button>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    );
}
