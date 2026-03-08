import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Lock, User, Loader2 } from "lucide-react";
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
            } else {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name: fullName,
                        },
                    },
                });
                if (error) throw error;
                alert("Please check your email for confirmation link!");
            }
            onOpenChange(false);
        } catch (err: any) {
            setError(err.message || "An error occurred");
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
                                                {isLogin ? "Welcome Back" : "Create Account"}
                                            </Dialog.Title>
                                            <Dialog.Close asChild>
                                                <button className="p-2 rounded-full hover:bg-white/5 transition-colors text-white/50 hover:text-white">
                                                    <X className="w-6 h-6" />
                                                </button>
                                            </Dialog.Close>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            {!isLogin && (
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

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-white/70 ml-1">Password</label>
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
                                            </div>

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
                                                        isLogin ? "Sign In" : "Sign Up"
                                                    )}
                                                </span>
                                            </motion.button>
                                        </form>

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
