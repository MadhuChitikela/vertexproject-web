import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya",
    role: "Computer Science Student",
    image: "P",
    rating: 5,
    text: "Exceptional work! They delivered my IEEE project ahead of schedule with complete documentation. The code quality was outstanding and helped me score an A+ grade.",
  },
  {
    name: "Rahul Verma",
    role: "Engineering Graduate",
    image: "RV",
    rating: 5,
    text: "Best decision ever! The team understood my requirements perfectly and delivered a custom ML project that impressed my faculty. 24/7 support was incredibly helpful.",
  },
  {
    name: "Raghuram",
    role: "Final Year Student",
    image: "R",
    rating: 5,
    text: "Professional and reliable service. Got my complete project with PPT and report in IEEE format. The quality exceeded my expectations. Highly recommended!",
  },
];

export function Testimonials() {
  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0f1421] to-[#0B0F19]" />
      <div
        className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #00E5FF 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl mb-4"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #7C3AED 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 800,
            }}
          >
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Real feedback from students who achieved success with our projects
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className="group relative h-full p-6 md:p-8 rounded-2xl backdrop-blur-xl border border-white/10"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                }}
                whileHover={{ y: -8 }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at top right, rgba(0, 229, 255, 0.1), transparent 60%)",
                  }}
                />

                <div className="relative z-10 space-y-6">
                  {/* Quote Icon */}
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(124, 58, 237, 0.2))",
                    }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Quote className="w-5 h-5 md:w-6 md:h-6 text-[#00E5FF]" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + i * 0.1 }}
                      >
                        <Star className="w-4 h-4 md:w-5 md:h-5 fill-[#00E5FF] text-[#00E5FF]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white/80 leading-relaxed text-base md:text-lg">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    {/* Avatar */}
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-base text-white"
                      style={{
                        background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                        fontWeight: 700,
                      }}
                    >
                      {testimonial.image}
                    </div>

                    {/* Info */}
                    <div>
                      <div className="text-sm md:text-base text-white" style={{ fontWeight: 700 }}>
                        {testimonial.name}
                      </div>
                      <div className="text-xs md:text-sm text-white/60">{testimonial.role}</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
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

        {/* Trust Badges */}
        <motion.div
          className="mt-12 md:mt-16 flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-8 items-stretch sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { label: "100% Satisfaction", value: "Guaranteed" },
            { label: "Free Revisions", value: "Unlimited" },
            { label: "Response Time", value: "< 2 Hours" },
          ].map((badge, index) => (
            <motion.div
              key={badge.label}
              className="px-6 py-4 rounded-xl backdrop-blur-sm border border-white/10 flex-1 sm:flex-none"
              style={{
                background: "linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(124, 58, 237, 0.05))",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div
                  className="text-xl md:text-2xl mb-1"
                  style={{
                    background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 700,
                  }}
                >
                  {badge.value}
                </div>
                <div className="text-xs md:text-sm text-white/60">{badge.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
