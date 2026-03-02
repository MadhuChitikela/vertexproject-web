import { motion } from "motion/react";
import { AlertTriangle, BookX, FileWarning, UserX } from "lucide-react";

const problems = [
    {
        icon: AlertTriangle,
        title: "Fear of Viva Questions",
        description: "Students freeze during presentations because they don't truly understand the code they submitted.",
        color: "#FF6B6B",
        glow: "rgba(255, 107, 107, 0.3)",
    },
    {
        icon: BookX,
        title: "Not Understanding the Code",
        description: "Copy-paste projects lead to embarrassing moments in front of faculty and evaluation panels.",
        color: "#FFB347",
        glow: "rgba(255, 179, 71, 0.3)",
    },
    {
        icon: FileWarning,
        title: "Last-Minute Documentation Stress",
        description: "Reports, diagrams, and PPTs pile up at the last moment, causing panic and poor-quality submissions.",
        color: "#00E5FF",
        glow: "rgba(0, 229, 255, 0.3)",
    },
    {
        icon: UserX,
        title: "No Real Mentor Support",
        description: "Generic agencies deliver and disappear. Students are left alone to answer complex project questions.",
        color: "#a78bfa",
        glow: "rgba(167, 139, 250, 0.3)",
    },
];

export function ProblemSection() {
    return (
        <section id="problems" className="relative py-24 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0d1220] to-[#0B0F19]" />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
                style={{
                    background: "radial-gradient(circle, #FF6B6B 0%, transparent 70%)",
                    filter: "blur(120px)",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 mb-6"
                        style={{ background: "rgba(255, 107, 107, 0.05)" }}
                    >
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-red-400 font-medium">The Real Problem</span>
                    </div>
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl mb-4"
                        style={{
                            background: "linear-gradient(135deg, #ffffff 0%, #FF6B6B 60%, #FFB347 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            fontWeight: 800,
                        }}
                    >
                        Why Students Struggle with
                        <br />
                        Final Year Projects
                    </h2>
                    <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
                        It's not about the project itself — it's everything around it.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.title}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                        >
                            <motion.div
                                className="relative h-full p-6 rounded-2xl backdrop-blur-xl border overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))",
                                    borderColor: `${problem.color}22`,
                                }}
                                whileHover={{
                                    y: -6,
                                    borderColor: `${problem.color}55`,
                                    boxShadow: `0 10px 40px ${problem.glow}`,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Glow overlay on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                                    style={{
                                        background: `radial-gradient(circle at top left, ${problem.glow}, transparent 60%)`,
                                    }}
                                />

                                {/* Top border accent */}
                                <motion.div
                                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                                    style={{ background: `linear-gradient(90deg, transparent, ${problem.color}, transparent)` }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.12 + 0.4 }}
                                />

                                <div className="relative z-10 space-y-4">
                                    <motion.div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: `${problem.color}15`,
                                            border: `1px solid ${problem.color}40`,
                                        }}
                                        whileHover={{ scale: 1.1, rotate: [0, -8, 8, 0] }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <problem.icon className="w-6 h-6" style={{ color: problem.color }} />
                                    </motion.div>
                                    <h3 className="text-lg text-white font-bold leading-snug">{problem.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed">{problem.description}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
