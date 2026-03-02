import { motion } from "motion/react";
import { Star, Quote, Users, Trophy, Calendar } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    role: "CSE Final Year, VIT",
    initials: "P",
    rating: 5,
    text: "The AI Viva Mentor was a game-changer. I practiced 20+ questions before my viva and answered every question confidently. Got an A+ grade!",
    highlight: "AI Viva Mentor",
  },
  {
    name: "Rahul Verma",
    role: "ECE Graduate, JNTU",
    initials: "RV",
    rating: 5,
    text: "Not only did they deliver a clean ML project, but the AI explained every line to me in simple words. My faculty was genuinely impressed by how well I understood it.",
    highlight: "Code Explanation",
  },
  {
    name: "Raghuram K.",
    role: "IT Final Year, GITAM",
    initials: "R",
    rating: 5,
    text: "The auto-generated report and PPT were ready on day one of delivery. Saved me 2 weeks of documentation stress. Worth every rupee!",
    highlight: "Auto Documentation",
  },
];

const stats = [
  { icon: Trophy, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "98%", label: "Student Satisfaction" },
  { icon: Calendar, value: "3+", label: "Years of Support" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-6 overflow-hidden bg-transparent">
      <div
        className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #0b7bff 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0b7bff]/20 mb-6"
            style={{ background: "rgba(11, 123, 255, 0.05)" }}
          >
            <Users className="w-4 h-4 text-[#0b7bff]" />
            <span className="text-sm text-[#0b7bff] font-semibold">Student Reviews</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl mb-4"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #0b7bff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 800,
            }}
          >
            Trusted By Engineering Students
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Real students. Real results. Real confidence.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(4px)" }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-2xl backdrop-blur-sm border border-white/8"
              style={{
                background: "linear-gradient(135deg, rgba(146,219,224,0.05), rgba(11,123,255,0.05))",
              }}
              whileHover={{ scale: 1.05, borderColor: "rgba(11,123,255,0.3)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <stat.icon className="w-5 h-5 mx-auto mb-2 text-[#92dbe0]" />
              <div
                className="text-2xl md:text-3xl font-black mb-1"
                style={{
                  background: "linear-gradient(135deg, #92dbe0, #0b7bff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid — glassmorphism */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(4px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <motion.div
                className="group relative h-full p-7 rounded-2xl border border-white/10 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
                whileHover={{ y: -8, borderColor: "rgba(146,219,224,0.25)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Glassmorphism inner glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: "radial-gradient(circle at top right, rgba(146, 219, 224, 0.08), transparent 60%)",
                  }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"
                  style={{
                    background: "linear-gradient(90deg, transparent, #92dbe0, #0b7bff, transparent)",
                  }}
                />

                <div className="relative z-10 space-y-5">
                  {/* Quote + Highlight badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, rgba(146,219,224,0.2), rgba(11,123,255,0.2))",
                      }}
                    >
                      <Quote className="w-5 h-5 text-[#92dbe0]" />
                    </div>
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(146,219,224,0.1)",
                        color: "#92dbe0",
                        border: "1px solid rgba(146,219,224,0.2)",
                      }}
                    >
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFB347] text-[#FFB347]" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-white/75 leading-relaxed text-sm">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: "linear-gradient(135deg, #92dbe0, #0b7bff)" }}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{testimonial.name}</div>
                      <div className="text-xs text-white/50">{testimonial.role}</div>
                    </div>
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
