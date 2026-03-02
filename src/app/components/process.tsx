import { motion } from "motion/react";
import { FolderOpen, Code2, Brain, Mic2, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: FolderOpen,
    title: "Choose Your Project",
    description: "Browse our curated list or request a custom project tailored to your domain and requirements.",
    step: "01",
    color: "#00E5FF",
  },
  {
    icon: Code2,
    title: "We Develop & Deliver",
    description: "Our expert team builds your project with clean, well-structured code and on-time delivery.",
    step: "02",
    color: "#7C3AED",
  },
  {
    icon: Brain,
    title: "AI Explains & Generates Docs",
    description: "Our AI breaks down every line of code and auto-generates your full report, diagrams, and PPT.",
    step: "03",
    color: "#a78bfa",
  },
  {
    icon: Mic2,
    title: "Practice Viva",
    description: "Use our AI Viva Mentor to simulate real sessions. Ask anything and get confident, accurate answers.",
    step: "04",
    color: "#34D399",
  },
  {
    icon: GraduationCap,
    title: "Submit With Confidence",
    description: "Walk into your viva fully prepared, documentation ready, and understanding your project inside-out.",
    step: "05",
    color: "#00E5FF",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B0F19]" />
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a78bfa]/25 mb-6"
            style={{ background: "rgba(167, 139, 250, 0.06)" }}
          >
            <GraduationCap className="w-4 h-4 text-[#a78bfa]" />
            <span className="text-sm text-[#a78bfa] font-semibold">Your Journey to Success</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl mb-4"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #00E5FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 800,
            }}
          >
            How It Works
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Five simple steps from project selection to confident submission.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden sm:block">
            <motion.div
              className="w-full h-full"
              style={{
                background: "linear-gradient(180deg, #00E5FF, #7C3AED, #a78bfa, #34D399, #00E5FF)",
              }}
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`relative flex items-center gap-8 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                {/* Step Icon — center on desktop */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}25, ${step.color}10)`,
                      border: `2px solid ${step.color}60`,
                      boxShadow: `0 0 25px ${step.color}35`,
                    }}
                    whileHover={{ scale: 1.15, boxShadow: `0 0 45px ${step.color}60` }}
                  >
                    <step.icon className="w-7 h-7" style={{ color: step.color }} />
                  </motion.div>
                </div>

                {/* Card — alternates sides on desktop */}
                <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? "sm:text-right sm:pr-4" : "sm:ml-auto sm:text-left sm:pl-4"}`}>
                  <motion.div
                    className="group p-6 rounded-2xl backdrop-blur-xl border border-white/8 relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    }}
                    whileHover={{
                      borderColor: `${step.color}40`,
                      boxShadow: `0 10px 40px ${step.color}20`,
                      y: -4,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Mobile icon */}
                    <div className="sm:hidden flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${step.color}20`,
                          border: `1px solid ${step.color}40`,
                        }}
                      >
                        <step.icon className="w-6 h-6" style={{ color: step.color }} />
                      </div>
                      <span className="text-3xl font-black opacity-20" style={{ color: step.color }}>
                        {step.step}
                      </span>
                    </div>

                    <div className="hidden sm:block">
                      <span
                        className="text-5xl font-black opacity-15 block mb-2"
                        style={{ color: step.color }}
                      >
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-lg text-white font-bold mb-2">{step.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>

                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
                      }}
                    />
                  </motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden sm:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
