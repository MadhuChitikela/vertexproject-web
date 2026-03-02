import { motion } from "motion/react";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "AI Features", sectionId: "ai-features" },
  { label: "Services", sectionId: "services" },
  { label: "Process", sectionId: "process" },
  { label: "Reviews", sectionId: "testimonials" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

interface NavbarProps {
  onOpenInquiry: () => void;
}

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="backdrop-blur-xl rounded-2xl border border-white/10 px-6 py-4"
          style={{
            background: "linear-gradient(135deg, rgba(11, 15, 25, 0.8), rgba(11, 15, 25, 0.6))",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo variant="horizontal" size="sm" animated={false} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.label}
                  type="button"
                  className="text-white/80 hover:text-white transition-colors relative group bg-transparent border-none cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection(link.sectionId)}
                >
                  {link.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(90deg, #00E5FF, #7C3AED)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}

              <motion.button
                type="button"
                className="px-6 py-2 rounded-lg text-white font-semibold"
                style={{
                  background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                  boxShadow: "0 0 20px rgba(0, 229, 255, 0.3)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 229, 255, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenInquiry}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              type="button"
              className="md:hidden p-2 rounded-lg backdrop-blur-sm border border-white/10"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              className="md:hidden mt-6 pt-6 border-t border-white/10 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  type="button"
                  className="block w-full text-left text-white/80 hover:text-white transition-colors py-2 bg-transparent border-none cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setIsOpen(false);
                    scrollToSection(link.sectionId);
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                type="button"
                className="w-full px-6 py-3 rounded-lg text-white font-semibold mt-4"
                style={{
                  background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsOpen(false);
                  onOpenInquiry();
                }}
              >
                Get Started
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
}
