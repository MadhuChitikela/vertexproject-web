import { motion } from "motion/react";
import { ArrowRight, MessageSquare, Mail, Calendar } from "lucide-react";

interface CTAProps {
  onOpenInquiry: () => void;
}

export function CTA({ onOpenInquiry }: CTAProps) {
  return (
    <section id="cta" className="relative py-24 px-6 overflow-hidden bg-transparent">

      {/* Gradient orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #0b7bff 0%, #3865cf 50%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="relative p-12 md:p-16 rounded-3xl backdrop-blur-xl border border-white/15 overflow-hidden text-center"
          style={{
            background: "linear-gradient(135deg, rgba(146, 219, 224, 0.07), rgba(11, 123, 255, 0.07))",
          }}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "linear-gradient(135deg, #92dbe0, #0b7bff, #92dbe0)",
              backgroundSize: "200% 200%",
              padding: "2px",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 space-y-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.04)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-[#0b7bff]"
                animate={{ boxShadow: ["0 0 6px #0b7bff", "0 0 18px #0b7bff", "0 0 6px #0b7bff"] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-white/70">Start Today. Submit With Confidence.</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto tracking-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #0b7bff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 800,
                lineHeight: 1.3,
              }}
            >
              Ready To Submit With Confidence?
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
            >
              Start your AI-supported project journey today. Code explanation, documentation, viva prep — all in one platform.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5 }}
            >
              {/* Primary */}
              <motion.button
                id="cta-book-consultation"
                type="button"
                className="group relative px-8 py-4 rounded-xl text-lg font-bold text-white overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0b7bff, #3865cf)" }}
                animate={{
                  boxShadow: [
                    "0 0 25px rgba(11,123,255,0.4), 0 0 50px rgba(56,101,207,0.2)",
                    "0 0 45px rgba(11,123,255,0.7), 0 0 90px rgba(56,101,207,0.4)",
                    "0 0 25px rgba(11,123,255,0.4), 0 0 50px rgba(56,101,207,0.2)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenInquiry}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, #3865cf, #0b7bff)", opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Secondary */}
              <motion.button
                type="button"
                className="px-8 py-4 rounded-xl text-lg font-bold text-white border border-white/20 backdrop-blur-sm flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, borderColor: "rgba(11,123,255,0.5)", background: "rgba(11,123,255,0.06)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open("https://wa.me/919391189053", "_blank")}
              >
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
                Chat on WhatsApp
              </motion.button>
            </motion.div>

            {/* Contact */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 pt-6 border-t border-white/8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://wa.me/919391189053"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-[#0b7bff] transition-colors text-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                +91 93911 89053
              </a>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-[#0b7bff]" />
                vertexproject.in@gmail.com
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              {["✓ 100% Original Code", "✓ AI Explanation Included", "✓ Viva Support", "✓ On-Time Delivery"].map((item, i) => (
                <div key={i} className="text-sm text-white/55">
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
