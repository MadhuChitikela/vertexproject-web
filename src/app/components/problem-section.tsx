import { motion } from "motion/react";
import { AlertTriangle, BookX, FileWarning, UserX } from "lucide-react";

const problems = [
    {
        icon: AlertTriangle,
        title: "Fear of Viva Questions",
        description: "Students freeze during presentations because they don't truly understand the code they submitted.",
        color: "#3865cf",
        glow: "rgba(56, 101, 207, 0.3)",
    },
    {
        icon: BookX,
        title: "Not Understanding the Code",
        description: "Copy-paste projects lead to embarrassing moments in front of faculty and evaluation panels.",
        color: "#0b7bff",
        glow: "rgba(11, 123, 255, 0.3)",
    },
    {
        icon: FileWarning,
        title: "Last-Minute Documentation Stress",
        description: "Reports, diagrams, and PPTs pile up at the last moment, causing panic and poor-quality submissions.",
        color: "#92dbe0",
        glow: "rgba(146, 219, 224, 0.3)",
    },
    {
        icon: UserX,
        title: "No Real Mentor Support",
        description: "Generic agencies deliver and disappear. Students are left alone to answer complex project questions.",
        color: "#0b7bff",
        glow: "rgba(11, 123, 255, 0.3)",
    },
];

export function ProblemSection() {
    return (
        <section id="problems" className="relative py-24 px-6 overflow-hidden bg-transparent -mt-32">
            <div className="absolute inset-0 bg-transparent" />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
                style={{
                    background: "radial-gradient(circle, #0b7bff 0%, transparent 70%)",
                    filter: "blur(120px)",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 mb-6"
                        style={{ background: "rgba(11, 123, 255, 0.05)" }}
                    >
                        <AlertTriangle className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-400 font-medium">The Real Problem</span>
                    </div>
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl mb-4 tracking-normal leading-tight"
                        style={{
                            background: "linear-gradient(135deg, #ffffff 0%, #0b7bff 60%, #92dbe0 100%)",
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
                            initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(4px)" }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                filter: "blur(0px)",
                                transition: {
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }
                            }}
                            animate={{
                                y: [0, -6, 0],
                            }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            }}
                        >
                            <motion.div
                                className="relative h-full p-6 rounded-2xl backdrop-blur-xl border border-white/5 overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))",
                                    borderColor: `${problem.color}22`,
                                    perspective: "1000px",
                                }}
                                whileHover={{
                                    y: -12,
                                    rotateX: 4,
                                    rotateY: -4,
                                    scale: 1.03,
                                    borderColor: `${problem.color}55`,
                                    boxShadow: `0 20px 50px ${problem.glow}`,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                {/* Y-Travel Scanning Beam */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        background: `linear-gradient(to bottom, transparent, ${problem.color}, transparent)`,
                                        height: '40%',
                                        filter: 'blur(30px)',
                                        zIndex: 1,
                                    }}
                                    animate={{
                                        y: ["-100%", "250%"]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />

                                {/* Top border accent */}
                                <motion.div
                                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                                    style={{ background: `linear-gradient(90deg, transparent, ${problem.color}, transparent)` }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false }}
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
