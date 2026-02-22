import { motion } from "motion/react";
import { ArrowRight, MessageSquare, Mail } from "lucide-react";

interface CTAProps {
  onOpenInquiry: () => void;
}

export function CTA({ onOpenInquiry }: CTAProps) {
  return (
    <section id="cta" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B0F19]" />

      {/* Gradient Orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #00E5FF 0%, #7C3AED 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="relative p-12 md:p-16 rounded-3xl backdrop-blur-xl border border-white/20 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(124, 58, 237, 0.1))",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Border */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, #00E5FF, #7C3AED, #00E5FF)",
              backgroundSize: "200% 200%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className="absolute inset-[2px] rounded-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(11, 15, 25, 0.95), rgba(11, 15, 25, 0.9))",
              }}
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 text-center space-y-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-[#00E5FF]" style={{ boxShadow: "0 0 10px #00E5FF" }} />
              <span className="text-sm text-white/80">Limited Time Offer</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #00E5FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 800,
                  lineHeight: 1.2,
                }}
              >
                Ready to Ace Your Project?
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Join 500+ students who transformed their academic projects into success stories
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="group px-8 py-4 rounded-xl text-lg font-semibold text-white relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                  boxShadow: "0 0 30px rgba(0, 229, 255, 0.4), 0 0 60px rgba(124, 58, 237, 0.2)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(0, 229, 255, 0.6), 0 0 80px rgba(124, 58, 237, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenInquiry}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Project Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>

                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #00E5FF)",
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                className="px-8 py-4 rounded-xl text-lg font-semibold text-white border border-white/20 backdrop-blur-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, borderColor: "rgba(0, 229, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://instagram.com/vertexproject.in', '_blank')}
              >
                <MessageSquare className="w-5 h-5" />
                Chat with Us
              </motion.button>
            </motion.div>

            {/* Contact Options */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://wa.me/919391189053"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-[#00E5FF] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#00E5FF]" />
                <span className="text-sm">WhatsApp: +91 93911 89053</span>
              </a>
              <div className="flex items-center gap-2 text-white/60">
                <Mail className="w-4 h-4 text-[#7C3AED]" />
                <span className="text-sm">vertexproject.in@gmail.com</span>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              {["✓ 100% Original Code", "✓ On-Time Delivery", "✓ 24/7 Support"].map((item, i) => (
                <div key={i} className="text-sm text-white/70">
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
