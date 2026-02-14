import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { FloatingGeometry } from "./floating-geometry";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0B0F19]/95 to-[#0B0F19]" />
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #00E5FF 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
            style={{
              background: "linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(124, 58, 237, 0.1))",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#00E5FF]" style={{ boxShadow: "0 0 10px #00E5FF" }} />
            <span className="text-sm text-white/80">Premium Tech Solutions</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #ffffff 50%, #00E5FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 800,
                }}
              >
                Score High.
              </span>
              <span
                className="block mt-2"
                style={{
                  background: "linear-gradient(135deg, #00E5FF 0%, #7C3AED 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 800,
                }}
              >
                Stress Less.
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/70 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              IEEE & Custom Tech Projects Delivered On Time
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="group px-8 py-4 rounded-xl text-lg font-semibold text-white relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                boxShadow: "0 0 30px rgba(0, 229, 255, 0.3), 0 0 60px rgba(124, 58, 237, 0.2)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 229, 255, 0.5), 0 0 80px rgba(124, 58, 237, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Your Project Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              className="px-8 py-4 rounded-xl text-lg font-semibold text-white border border-white/20 backdrop-blur-sm hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.05, borderColor: "rgba(0, 229, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Services
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-8 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div>
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-white/60">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm text-white/60">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/60">Support</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - 3D Geometry */}
        <motion.div
          className="relative h-[500px] md:h-[600px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <FloatingGeometry />
        </motion.div>
      </div>
    </section>
  );
}
