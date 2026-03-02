import { motion } from "motion/react";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { FloatingGeometry } from "./floating-geometry";

interface HeroProps {
  onOpenInquiry: () => void;
}

export function Hero({ onOpenInquiry }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0B0F19]/95 to-[#0B0F19]" />
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #00E5FF 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-8 text-center lg:text-left"
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
            <motion.div
              className="w-2 h-2 rounded-full bg-[#00E5FF]"
              animate={{ boxShadow: ["0 0 6px #00E5FF", "0 0 18px #00E5FF", "0 0 6px #00E5FF"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Sparkles className="w-4 h-4 text-[#00E5FF]" />
            <span className="text-sm text-white/80 font-medium">AI-Powered Final Year Project Platform</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[1.1]"
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
                Master Your Final
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
                Year Project
              </span>
              <span
                className="block mt-1"
                style={{
                  background: "linear-gradient(135deg, #ffffff 60%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 800,
                }}
              >
                With AI Support
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              We don't just build projects. We help you{" "}
              <span className="text-[#00E5FF] font-semibold">understand, present,</span> and{" "}
              <span className="text-[#a78bfa] font-semibold">succeed confidently.</span>
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Primary Glow Button */}
            <motion.button
              id="hero-start-project"
              type="button"
              className="group relative px-8 py-4 rounded-xl text-lg font-bold text-white overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0,229,255,0.4), 0 0 40px rgba(124,58,237,0.2)",
                  "0 0 35px rgba(0,229,255,0.7), 0 0 70px rgba(124,58,237,0.4)",
                  "0 0 20px rgba(0,229,255,0.4), 0 0 40px rgba(124,58,237,0.2)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => alert("Feature disabled in Nexus Scholar mode.")}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, #7C3AED, #00E5FF)", opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Secondary Glow Button */}
            <motion.button
              id="hero-ai-mentor"
              type="button"
              className="group relative px-8 py-4 rounded-xl text-lg font-bold text-white overflow-hidden border border-[#00E5FF]/30 backdrop-blur-sm"
              style={{
                background: "rgba(0, 229, 255, 0.05)",
              }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(0,229,255,0.15)",
                  "0 0 30px rgba(0,229,255,0.35)",
                  "0 0 15px rgba(0,229,255,0.15)",
                ],
                borderColor: ["rgba(0,229,255,0.3)", "rgba(0,229,255,0.7)", "rgba(0,229,255,0.3)"],
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const el = document.getElementById("ai-features");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Bot className="w-5 h-5 text-[#00E5FF]" />
                Talk to AI Mentor
              </span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "98%", label: "Student Satisfaction" },
              { value: "3+", label: "Years of Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div
                  className="text-3xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - 3D Geometry */}
        <motion.div
          className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
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
