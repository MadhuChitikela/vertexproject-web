import { motion } from "motion/react";
import { MessageSquare, FileSearch, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Discuss Requirements",
    description: "Share your project details and requirements with our team",
    step: "01",
  },
  {
    icon: FileSearch,
    title: "Select Project",
    description: "Choose from our curated list or request custom development",
    step: "02",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Our experts build your project with regular updates",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Delivery & Support",
    description: "Get complete code, documentation, and ongoing support",
    step: "04",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B0F19]" />
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
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
            Our Process
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Simple, transparent, and efficient workflow from start to finish
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2">
            <motion.div
              className="h-full"
              style={{
                background: "linear-gradient(90deg, #00E5FF, #7C3AED, #00E5FF)",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Step Card */}
                <div className="relative z-10">
                  {/* Step Number */}
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center relative"
                    style={{
                      background: "linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(124, 58, 237, 0.2))",
                      border: "2px solid rgba(0, 229, 255, 0.3)",
                      boxShadow: "0 0 30px rgba(0, 229, 255, 0.2)",
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 40px rgba(0, 229, 255, 0.4)",
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                          opacity: 0.1,
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                    </div>
                    <step.icon className="w-8 h-8 text-[#00E5FF] relative z-10" />
                  </motion.div>

                  {/* Step Content */}
                  <div className="text-center space-y-3">
                    {/* Step Label */}
                    <div
                      className="text-6xl opacity-20"
                      style={{
                        background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontWeight: 800,
                      }}
                    >
                      {step.step}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl text-white" style={{ fontWeight: 700 }}>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-10 left-[60%] w-[80%] z-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  >
                    <svg width="100%" height="40" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id={`arrow-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        d="M 0 20 L 85 20 L 80 15 M 85 20 L 80 25"
                        stroke={`url(#arrow-gradient-${index})`}
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 rounded-xl text-lg font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
              boxShadow: "0 0 30px rgba(0, 229, 255, 0.3)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(0, 229, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = 'mailto:vertexproject.in@gmail.com'}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
