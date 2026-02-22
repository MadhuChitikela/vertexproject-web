import { motion } from "motion/react";
import { Logo } from "./logo";
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const footerLinks = {
  Services: ["IEEE Projects", "Custom Software", "AI/ML Solutions", "Web Development", "Mobile Apps"],
  Company: ["About Us", "Our Team", "Careers", "Blog", "Contact"],
  Support: ["Help Center", "Documentation", "FAQ", "Privacy Policy", "Terms of Service"],
  Resources: ["Project Gallery", "Pricing", "Tutorials", "Case Studies", "Newsletter"],
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/vertexproject.in", label: "Instagram" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0B0F19] border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #00E5FF 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="horizontal" size="sm" animated={false} />

            <p className="text-white/60 leading-relaxed max-w-sm">
              Empowering students with cutting-edge tech solutions. From IEEE projects to custom software development, we deliver excellence.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10 hover:border-white/30 transition-colors"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                  }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-white/70" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white mb-4" style={{ fontWeight: 700 }}>
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-[#00E5FF] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <motion.div
          className="mb-12 p-6 rounded-2xl backdrop-blur-sm border border-white/10"
          style={{
            background: "linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(124, 58, 237, 0.05))",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(124, 58, 237, 0.2))",
                }}
              >
                <Mail className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-white/50">Email Us</div>
                <a href="mailto:vertexproject.in@gmail.com" className="text-sm text-white hover:text-[#00E5FF] transition-colors truncate block">vertexproject.in@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(124, 58, 237, 0.2))",
                }}
              >
                <Instagram className="w-5 h-5 text-[#7C3AED]" />
              </div>
              <div>
                <div className="text-xs text-white/50">Instagram</div>
                <a href="https://instagram.com/vertexproject.in" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-[#00E5FF] transition-colors">vertexproject.in</a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(37, 211, 102, 0.2), rgba(37, 211, 102, 0.1))",
                }}
              >
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <div className="text-xs text-white/50">WhatsApp</div>
                <a href="https://wa.me/919391189053" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-[#00E5FF] transition-colors">+91 93911 89053</a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(124, 58, 237, 0.2))",
                }}
              >
                <MapPin className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <div>
                <div className="text-xs text-white/50">Location</div>
                <div className="text-sm text-white">Vizag</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/50">
            © 2026 Vertex Project. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-[#00E5FF] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-[#00E5FF] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-[#00E5FF] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px #4ade80" }} />
            <span className="text-xs text-white/60">Trusted by 100+ Students Worldwide</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
