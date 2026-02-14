import { motion } from "motion/react";
import { Code, Cpu, FileText, Headphones } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "IEEE Projects",
    description: "Latest IEEE papers implemented with complete documentation and working models.",
    features: ["2024 Papers", "Source Code", "Documentation", "Demo"],
    gradient: "from-[#00E5FF] to-[#0099CC]",
  },
  {
    icon: Cpu,
    title: "Custom Software",
    description: "Tailored software solutions built with cutting-edge technologies and best practices.",
    features: ["AI/ML Systems", "Web Apps", "Mobile Apps", "APIs"],
    gradient: "from-[#7C3AED] to-[#5B21B6]",
  },
  {
    icon: FileText,
    title: "Full Report + PPT",
    description: "Professional documentation with detailed reports and presentation materials.",
    features: ["IEEE Format", "PPT Slides", "Diagrams", "References"],
    gradient: "from-[#00E5FF] to-[#7C3AED]",
  },
  {
    icon: Headphones,
    title: "Complete Support",
    description: "End-to-end assistance from project selection to final delivery and beyond.",
    features: ["24/7 Chat", "Code Review", "Debugging", "Deployment"],
    gradient: "from-[#7C3AED] to-[#00E5FF]",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0B0F19]" />
      <div
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #00E5FF 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #00E5FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 800,
            }}
          >
            Our Services
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Comprehensive tech solutions tailored for academic excellence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Glass Card */}
              <motion.div
                className="relative h-full p-6 rounded-2xl backdrop-blur-xl border border-white/10 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${index % 2 === 0 ? 'rgba(0, 229, 255, 0.1)' : 'rgba(124, 58, 237, 0.1)'}, transparent)`,
                  }}
                />

                {/* Top Border Glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${index % 2 === 0 ? '#00E5FF' : '#7C3AED'}, transparent)`,
                    boxShadow: `0 0 20px ${index % 2 === 0 ? '#00E5FF' : '#7C3AED'}`,
                  }}
                />

                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${index % 2 === 0 ? 'rgba(0, 229, 255, 0.2)' : 'rgba(124, 58, 237, 0.2)'}, ${index % 2 === 0 ? 'rgba(0, 229, 255, 0.1)' : 'rgba(124, 58, 237, 0.1)'})`,
                      border: `1px solid ${index % 2 === 0 ? 'rgba(0, 229, 255, 0.3)' : 'rgba(124, 58, 237, 0.3)'}`,
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon
                      className="w-7 h-7"
                      style={{ color: index % 2 === 0 ? '#00E5FF' : '#7C3AED' }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl text-white" style={{ fontWeight: 700 }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 pt-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            background: index % 2 === 0 ? '#00E5FF' : '#7C3AED',
                            boxShadow: `0 0 6px ${index % 2 === 0 ? '#00E5FF' : '#7C3AED'}`,
                          }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More */}
                  <motion.div
                    className="pt-4 text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: index % 2 === 0 ? '#00E5FF' : '#7C3AED' }}
                  >
                    Learn More
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
