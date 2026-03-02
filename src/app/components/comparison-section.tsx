import { motion } from "motion/react";
import { X, Check, Zap } from "lucide-react";

const comparisonData = [
    {
        feature: "Project Delivery",
        others: { value: "✓", type: "check" },
        vertex: { value: "✓ Guaranteed", type: "check" },
    },
    {
        feature: "Code Explanation",
        others: { value: "✗ None", type: "cross" },
        vertex: { value: "✓ AI Powered", type: "highlight" },
    },
    {
        feature: "Documentation",
        others: { value: "Basic / Manual", type: "neutral" },
        vertex: { value: "Fully Automated", type: "highlight" },
    },
    {
        feature: "Viva Support",
        others: { value: "✗ None", type: "cross" },
        vertex: { value: "✓ AI Mentor", type: "highlight" },
    },
    {
        feature: "24/7 Support",
        others: { value: "Limited", type: "neutral" },
        vertex: { value: "Dedicated", type: "highlight" },
    },
    {
        feature: "PPT Generation",
        others: { value: "✗ Not Included", type: "cross" },
        vertex: { value: "✓ Auto-Generated", type: "highlight" },
    },
];

export function ComparisonSection() {
    return (
        <section id="comparison" className="relative py-24 px-6 overflow-hidden bg-transparent">
            <div
                className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full opacity-10"
                style={{
                    background: "radial-gradient(circle, #0b7bff 0%, transparent 70%)",
                    filter: "blur(120px)",
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0b7bff]/20 mb-6"
                        style={{ background: "rgba(11, 123, 255, 0.05)" }}
                    >
                        <Zap className="w-4 h-4 text-[#0b7bff]" />
                        <span className="text-sm text-[#0b7bff] font-semibold">The Vertex Advantage</span>
                    </div>
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight"
                        style={{
                            background: "linear-gradient(135deg, #ffffff 0%, #0b7bff 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            fontWeight: 800,
                        }}
                    >
                        Why Students Choose Vertex
                    </h2>
                    <p className="text-lg text-white/50 max-w-xl mx-auto">
                        Compare us to typical project agencies. The difference is clear.
                    </p>
                </motion.div>

                {/* Table */}
                <motion.div
                    className="relative rounded-3xl overflow-hidden backdrop-blur-xl"
                    style={{
                        border: "1px solid rgba(146, 219, 224, 0.15)",
                        background: "linear-gradient(135deg, rgba(146,219,224,0.03), rgba(11,123,255,0.03))",
                        boxShadow: "0 0 60px rgba(11, 123, 255, 0.08), 0 0 120px rgba(56, 101, 207, 0.05)",
                    }}
                    initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(4px)" }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Animated top border */}
                    <motion.div
                        className="absolute top-0 left-0 right-0 h-[2px]"
                        style={{
                            background: "linear-gradient(90deg, transparent, #92dbe0, #0b7bff, #92dbe0, transparent)",
                            backgroundSize: "200% 100%",
                        }}
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Header Row */}
                    <div className="grid grid-cols-3 p-5 border-b border-white/8">
                        <div className="text-white/40 text-sm font-semibold uppercase tracking-widest px-2">Feature</div>
                        <div className="text-center text-white/40 text-sm font-semibold uppercase tracking-widest px-2">Others</div>
                        <div className="text-center px-2">
                            <span
                                className="text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
                                style={{
                                    background: "linear-gradient(135deg, rgba(146,219,224,0.2), rgba(11,123,255,0.2))",
                                    color: "#92dbe0",
                                    border: "1px solid rgba(146,219,224,0.3)",
                                    boxShadow: "0 0 20px rgba(146,219,224,0.2)",
                                }}
                            >
                                ⚡ Vertex
                            </span>
                        </div>
                    </div>

                    {/* Rows */}
                    {comparisonData.map((row, index) => (
                        <motion.div
                            key={row.feature}
                            className="group grid grid-cols-3 p-5 border-b border-white/5 hover:bg-white/2 transition-colors duration-200"
                            initial={{ opacity: 0, x: -20, filter: "blur(2px)" }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                filter: "blur(0px)",
                            }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            {/* Feature Name */}
                            <div className="text-white/80 font-medium text-sm md:text-base px-2 flex items-center">
                                {row.feature}
                            </div>

                            {/* Others */}
                            <div className="flex justify-center items-center px-2">
                                {row.others.type === "cross" ? (
                                    <span className="flex items-center gap-1.5 text-red-400 text-sm font-medium">
                                        <X className="w-4 h-4" />
                                        <span className="hidden sm:inline">{row.others.value.replace("✗ ", "")}</span>
                                    </span>
                                ) : row.others.type === "check" ? (
                                    <span className="flex items-center gap-1.5 text-white/60 text-sm">
                                        <Check className="w-4 h-4" />
                                    </span>
                                ) : (
                                    <span className="text-white/40 text-sm">{row.others.value}</span>
                                )}
                            </div>

                            {/* Vertex */}
                            <div className="flex justify-center items-center px-2">
                                {row.vertex.type === "highlight" ? (
                                    <motion.span
                                        className="flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-full"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(146,219,224,0.15), rgba(11,123,255,0.15))",
                                            color: "#92dbe0",
                                            border: "1px solid rgba(146,219,224,0.25)",
                                        }}
                                        whileHover={{ boxShadow: "0 0 20px rgba(146,219,224,0.3)" }}
                                    >
                                        <Check className="w-4 h-4 shrink-0" />
                                        <span className="hidden sm:inline">{row.vertex.value.replace("✓ ", "")}</span>
                                    </motion.span>
                                ) : (
                                    <span className="flex items-center gap-1.5 text-[#0b7bff] text-sm font-bold">
                                        <Check className="w-4 h-4" />
                                        <span className="hidden sm:inline">{row.vertex.value.replace("✓ ", "")}</span>
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}

                    {/* Bottom Summary */}
                    <div className="p-6 text-center">
                        <p className="text-white/40 text-sm">
                            Vertex is the only platform that combines project delivery with{" "}
                            <span className="text-[#0b7bff] font-semibold">AI understanding support</span> — built for students who
                            want to truly succeed.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
