import { motion } from "motion/react";
import { Zap, Shield, Clock, Award, Users, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Quick turnaround without compromising quality",
  },
  {
    icon: Shield,
    title: "100% Original",
    description: "Plagiarism-free code and documentation",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Never miss a deadline with our commitment",
  },
  {
    icon: Award,
    title: "Top Quality",
    description: "Industry-standard code and best practices",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced developers and researchers",
  },
  {
    icon: Rocket,
    title: "Latest Tech",
    description: "Cutting-edge tools and frameworks",
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0f1421] to-[#0B0F19]" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

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
              background: "linear-gradient(135deg, #ffffff 0%, #7C3AED 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 800,
            }}
          >
            Why Choose Us
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We deliver excellence through innovation, quality, and dedicated support
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="group relative p-8 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                }}
                whileHover={{ y: -5 }}
              >
                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at top left, rgba(0, 229, 255, 0.1), transparent 60%)",
                  }}
                />

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon Container */}
                  <motion.div
                    className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(124, 58, 237, 0.2))",
                      border: "1px solid rgba(0, 229, 255, 0.3)",
                    }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-6 h-6 text-[#00E5FF]" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl text-white" style={{ fontWeight: 700 }}>
                      {feature.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent, #00E5FF, #7C3AED, transparent)",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 p-8 rounded-2xl backdrop-blur-xl border border-white/10"
          style={{
            background: "linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(124, 58, 237, 0.05))",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div
                className="text-4xl md:text-5xl mb-2"
                style={{
                  background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 800,
                }}
              >
                10+
              </div>
              <div className="text-white/60">Projects Completed</div>
            </div>
            <div>
              <div
                className="text-4xl md:text-5xl mb-2"
                style={{
                  background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 800,
                }}
              >
                98%
              </div>
              <div className="text-white/60">Success Rate</div>
            </div>
            <div>
              <div
                className="text-4xl md:text-5xl mb-2"
                style={{
                  background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 800,
                }}
              >
                8+
              </div>
              <div className="text-white/60">Happy Clients</div>
            </div>
            <div>
              <div
                className="text-4xl md:text-5xl mb-2"
                style={{
                  background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 800,
                }}
              >
                24/7
              </div>
              <div className="text-white/60">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
