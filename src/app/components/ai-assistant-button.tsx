import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X, Send, Bot } from "lucide-react";

export function AiExplanationButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                id="ai-float-btn"
                className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl overflow-hidden"
                style={{
                    background: "#1A1814",
                    border: "1.5px solid #C9A84C",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    boxShadow: [
                        "0 0 15px rgba(201, 168, 76, 0.2), 0 4px 10px rgba(0,0,0,0.3)",
                        "0 0 30px rgba(201, 168, 76, 0.5), 0 4px 10px rgba(0,0,0,0.3)",
                        "0 0 15px rgba(201, 168, 76, 0.2), 0 4px 10px rgba(0,0,0,0.3)",
                    ],
                }}
                transition={{
                    scale: { delay: 1.8, duration: 0.4, type: "spring" },
                    opacity: { delay: 1.8, duration: 0.4 },
                    boxShadow: { duration: 3, repeat: Infinity, delay: 2.2 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="AI Project Consultant"
            >
                {isOpen ? <X className="w-6 h-6 text-[#C9A84C]" /> : <Sparkles className="w-6 h-6 text-[#C9A84C]" />}
                
                {/* Glowing border ring */}
                <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ border: "1px solid rgba(201, 168, 76, 0.4)" }}
                    animate={{ scale: [1, 1.3, 1.5], opacity: [0.6, 0.2, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-32 right-6 z-50 w-72 md:w-80 bg-[#1A1814] border border-[#C9A84C]/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#1A1814] p-4 border-b border-[#C9A84C]/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-[#C9A84C]" />
                                </div>
                                <span className="font-semibold text-white/90 text-sm">Project Consultant AI</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-[10px] text-white/40 uppercase tracking-widest font-medium">Ready</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-3">
                            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                <p className="text-xs text-white/70 leading-relaxed italic">
                                    "I can explain how Vertex delivers end-to-end projects with production-grade quality."
                                </p>
                            </div>
                            
                            <div className="space-y-2">
                                <div className="text-[10px] text-[#C9A84C]/60 uppercase tracking-wider font-bold">Ask me a question</div>
                                <div className="relative group">
                                    <input 
                                        type="text" 
                                        placeholder="Type your project query..." 
                                        className="w-full bg-[#FAF8F4]/5 border border-[#C9A84C]/10 rounded-lg px-3 py-2 text-xs text-white/90 placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/50 transition-all"
                                    />
                                    <button className="absolute right-2 top-1/2 -translate-y-1/2">
                                        <Send className="w-3.5 h-3.5 text-[#C9A84C]/50 group-focus-within:text-[#C9A84C] transition-colors" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Footer Info */}
                        <div className="bg-white/5 p-3 border-t border-[#C9A84C]/10">
                            <div className="flex items-start gap-2">
                                <Sparkles className="w-3.5 h-3.5 text-[#C9A84C] mt-0.5" />
                                <div className="text-[10px] text-white/50 leading-normal">
                                    Vertex AI uses refined models to assist in architecture design and high-standard documentation.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
