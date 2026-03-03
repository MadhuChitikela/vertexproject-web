import { motion } from "motion/react";
import { Brain, FileText, Mic, CheckCircle2 } from "lucide-react";

const aiFeatures = [
    {
        icon: Brain,
        number: "01",
        badge: "AI Powered",
        title: "AI-Powered Code Explanation",
        description:
            "Our AI explains every line of your project code in simple language for easy understanding and confident presentation.",
        bullets: [
            "Line-by-line code breakdown",
            "Plain English explanations",
            "Concept summaries",
            "Anticipated viva Q&A",
        ],
        gradient: "from-[#92dbe0] to-[#3865cf]",
        glow: "rgba(146, 219, 224, 0.35)",
        border: "rgba(146, 219, 224, 0.25)",
        accentColor: "#92dbe0",
    },
    {
        icon: FileText,
        number: "02",
        badge: "Auto Generated",
        title: "Automatic Documentation & PPT Generation",
        description:
            "Complete formatted reports, diagrams, flowcharts, and ready-to-use PowerPoint slides generated automatically.",
        bullets: [
            "IEEE-formatted reports",
            "System architecture diagrams",
            "Automatic flowcharts",
            "Ready-to-present PPT slides",
        ],
        gradient: "from-[#0b7bff] to-[#3865cf]",
        glow: "rgba(11, 123, 255, 0.35)",
        border: "rgba(11, 123, 255, 0.25)",
        accentColor: "#0b7bff",
    },
    {
        icon: Mic,
        number: "03",
        badge: "24/7 Available",
        title: "AI Viva Mentor",
        description:
            "Practice unlimited viva sessions. Ask questions and get instant, accurate answers like a real project mentor.",
        bullets: [
            "Unlimited practice sessions",
            "Real-time question answering",
            "Domain-specific accuracy",
            "Confidence-building feedback",
        ],
        gradient: "from-[#92dbe0] to-[#0b7bff]",
        glow: "rgba(146, 219, 224, 0.35)",
        border: "rgba(146, 219, 224, 0.25)",
        accentColor: "#92dbe0",
    },
];

interface AiFeaturesProps {
    onOpenInquiry: () => void;
}

export function AiFeatures({ onOpenInquiry }: AiFeaturesProps) {
    return (
        <section id="ai-features" className="relative py-24 px-6 overflow-hidden bg-transparent">

            {/* Animated grid */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(146, 219, 224, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(11, 123, 255, 0.15) 1px, transparent 1px)
            `,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#92dbe0]/20 mb-6"
                        style={{ background: "rgba(146, 219, 224, 0.05)" }}
                    >
                        <motion.div
                            className="w-2 h-2 rounded-full bg-[#92dbe0]"
                            animate={{ boxShadow: ["0 0 6px #92dbe0", "0 0 16px #92dbe0", "0 0 6px #92dbe0"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-sm text-[#92dbe0] font-semibold tracking-wide">Vertex AI Project Assist™</span>
                    </div>

                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl mb-4 tracking-normal leading-tight"
                        style={{
                            background: "linear-gradient(135deg, #ffffff 0%, #92dbe0 60%, #0b7bff 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            fontWeight: 800,
                        }}
                    >
                        Not Just a Project.
                    </h2>
                    <h3
                        className="text-3xl sm:text-4xl md:text-5xl mb-6"
                        style={{
                            background: "linear-gradient(135deg, #0b7bff 0%, #92dbe0 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            fontWeight: 700,
                        }}
                    >
                        A Complete Learning Ecosystem.
                    </h3>
                    <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
                        Three AI-powered pillars that ensure you don't just submit — you understand, present, and excel.
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {aiFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="group relative"
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }
                            }}
                            animate={{
                                y: [0, -8, 0],
                            }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            }}
                        >
                            <motion.div
                                className="relative h-full p-8 rounded-3xl backdrop-blur-xl border overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                                    borderColor: feature.border,
                                    perspective: "1000px",
                                }}
                                whileHover={{
                                    y: -15,
                                    rotateX: 5,
                                    rotateY: -5,
                                    scale: 1.02,
                                    boxShadow: `0 25px 60px ${feature.glow}`,
                                    borderColor: feature.accentColor + "99",
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                {/* Y-Travel Scanning Beam */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        background: `linear-gradient(to bottom, transparent, ${feature.accentColor}, transparent)`,
                                        height: '40%',
                                        filter: 'blur(30px)',
                                        zIndex: 1,
                                    }}
                                    animate={{
                                        y: ["-100%", "250%"]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />

                                {/* Top gradient bar */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl"
                                    style={{
                                        background: `linear-gradient(90deg, transparent, ${feature.accentColor}, transparent)`,
                                        boxShadow: `0 0 20px ${feature.accentColor}`,
                                    }}
                                />

                                <div className="relative z-10 space-y-6">
                                    {/* Number + Badge */}
                                    <div className="flex items-center justify-between">
                                        <span
                                            className="text-5xl font-black opacity-15"
                                            style={{ color: feature.accentColor }}
                                        >
                                            {feature.number}
                                        </span>
                                        <span
                                            className="text-xs font-bold px-3 py-1 rounded-full"
                                            style={{
                                                background: `${feature.accentColor}20`,
                                                color: feature.accentColor,
                                                border: `1px solid ${feature.accentColor}40`,
                                            }}
                                        >
                                            {feature.badge}
                                        </span>
                                    </div>

                                    {/* Icon */}
                                    <motion.div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                                        style={{
                                            background: `linear-gradient(135deg, ${feature.accentColor}20, ${feature.accentColor}10)`,
                                            border: `1px solid ${feature.accentColor}40`,
                                        }}
                                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <feature.icon className="w-8 h-8" style={{ color: feature.accentColor }} />
                                    </motion.div>

                                    {/* Content */}
                                    <div className="space-y-3">
                                        <h3 className="text-xl text-white font-bold leading-tight">{feature.title}</h3>
                                        <p className="text-white/55 leading-relaxed text-sm">{feature.description}</p>
                                    </div>

                                    {/* Bullet Points */}
                                    <ul className="space-y-2 pt-2">
                                        {feature.bullets.map((bullet) => (
                                            <li key={bullet} className="flex items-center gap-3 text-sm text-white/70">
                                                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: feature.accentColor }} />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
