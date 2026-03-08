import { motion } from "motion/react";
import { Code, Cpu, Wifi, Bot, Headphones, CheckCircle2 } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

const deliverables = [
  {
    icon: Code,
    title: "Mini Projects",
    description: "Perfect for beginners. Small-scale projects with full code, documentation, and demo support.",
    tags: ["Web Dev", "Python", "Java", "Android"],
    color: "#92dbe0",
  },
  {
    icon: Cpu,
    title: "Major Projects",
    description: "In-depth final year projects with advanced architecture, AI integration, and complete IEEE reports.",
    tags: ["ML/AI", "Full Stack", "Cloud", "IEEE Format"],
    color: "#0b7bff",
  },
  {
    icon: Wifi,
    title: "IoT & Embedded Systems",
    description: "Hardware-connected solutions using Raspberry Pi, Arduino, and sensor-based data pipelines.",
    tags: ["Arduino", "Raspberry Pi", "ESP32", "Sensors"],
    color: "#92dbe0",
  },
  {
    icon: Bot,
    title: "AI & Machine Learning",
    description: "Deep learning, computer vision, NLP, and predictive analytics projects with full explanation.",
    tags: ["TensorFlow", "PyTorch", "NLP", "CV"],
    color: "#0b7bff",
  },
  {
    icon: Headphones,
    title: "Full Post-Delivery Support",
    description: "We stay with you until your viva is done. AI mentoring, query support, and revision assistance.",
    tags: ["Viva Prep", "Code Help", "Revisions", "24/7"],
    color: "#3865cf",
  },
];

interface ServicesProps {
  onOpenInquiry: () => void;
}

export function Services({ onOpenInquiry }: ServicesProps) {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden bg-transparent">
      <div
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #0b7bff 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0b7bff]/30 mb-6"
            style={{ background: "rgba(11, 123, 255, 0.08)" }}
          >
            <CheckCircle2 className="w-4 h-4 text-[#0b7bff]" />
            <span className="text-sm text-[#0b7bff] font-semibold">Everything You Need</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #0b7bff 50%, #92dbe0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 800,
            }}
          >
            Complete Project Ecosystem
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            From concept to confident submission — every type of project, fully supported.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              className={`group relative ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
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
              animate={!isMobile ? {
                y: [0, -6, 0],
              } : {}}
              viewport={{ once: true, amount: 0.1 }}
              transition={!isMobile ? {
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              } : {}}
            >
              <motion.div
                className="relative h-full p-7 rounded-2xl backdrop-blur-xl border border-white/8 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                  perspective: "1000px",
                }}
                whileHover={!isMobile ? {
                  y: -12,
                  rotateX: 4,
                  rotateY: -4,
                  scale: 1.025,
                  borderColor: `${item.color}50`,
                  boxShadow: `0 20px 50px ${item.color}25`,
                } : {}}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              >
                {/* Y-Travel Scanning Beam - Disabled on Mobile */}
                {!isMobile && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(to bottom, transparent, ${item.color}, transparent)`,
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
                )}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                  }}
                />

                <div className="relative z-10 space-y-5">
                  <motion.div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}35`,
                    }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-7 h-7" style={{ color: item.color }} />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-xl text-white font-bold">{item.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md font-medium"
                        style={{
                          background: `${item.color}10`,
                          color: item.color,
                          border: `1px solid ${item.color}25`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
