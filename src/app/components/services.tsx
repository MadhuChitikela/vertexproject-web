import { motion } from "motion/react";
import { Code, Cpu, Wifi, Bot, Headphones, CheckCircle2 } from "lucide-react";

const deliverables = [
  {
    icon: Code,
    title: "Mini Projects",
    description: "Perfect for beginners. Small-scale projects with full code, documentation, and demo support.",
    tags: ["Web Dev", "Python", "Java", "Android"],
    color: "#00E5FF",
  },
  {
    icon: Cpu,
    title: "Major Projects",
    description: "In-depth final year projects with advanced architecture, AI integration, and complete IEEE reports.",
    tags: ["ML/AI", "Full Stack", "Cloud", "IEEE Format"],
    color: "#7C3AED",
  },
  {
    icon: Wifi,
    title: "IoT & Embedded Systems",
    description: "Hardware-connected solutions using Raspberry Pi, Arduino, and sensor-based data pipelines.",
    tags: ["Arduino", "Raspberry Pi", "ESP32", "Sensors"],
    color: "#00E5FF",
  },
  {
    icon: Bot,
    title: "AI & Machine Learning",
    description: "Deep learning, computer vision, NLP, and predictive analytics projects with full explanation.",
    tags: ["TensorFlow", "PyTorch", "NLP", "CV"],
    color: "#a78bfa",
  },
  {
    icon: Headphones,
    title: "Full Post-Delivery Support",
    description: "We stay with you until your viva is done. AI mentoring, query support, and revision assistance.",
    tags: ["Viva Prep", "Code Help", "Revisions", "24/7"],
    color: "#34D399",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B0F19]" />
      <div
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #00E5FF 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7C3AED]/30 mb-6"
            style={{ background: "rgba(124, 58, 237, 0.08)" }}
          >
            <CheckCircle2 className="w-4 h-4 text-[#a78bfa]" />
            <span className="text-sm text-[#a78bfa] font-semibold">Everything You Need</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl mb-4"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #00E5FF 100%)",
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="relative h-full p-7 rounded-2xl backdrop-blur-xl border border-white/8 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                }}
                whileHover={{
                  y: -6,
                  borderColor: `${item.color}40`,
                  boxShadow: `0 15px 50px ${item.color}20`,
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at top left, ${item.color}12, transparent 60%)`,
                  }}
                />
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
