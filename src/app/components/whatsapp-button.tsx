import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/919391189053"
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-float-btn"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl"
            style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: 1,
                opacity: 1,
                boxShadow: [
                    "0 0 20px rgba(37, 211, 102, 0.4), 0 4px 20px rgba(0,0,0,0.4)",
                    "0 0 40px rgba(37, 211, 102, 0.7), 0 4px 20px rgba(0,0,0,0.4)",
                    "0 0 20px rgba(37, 211, 102, 0.4), 0 4px 20px rgba(0,0,0,0.4)",
                ],
            }}
            transition={{
                scale: { delay: 1.5, duration: 0.4, type: "spring" },
                opacity: { delay: 1.5, duration: 0.4 },
                boxShadow: { duration: 2.5, repeat: Infinity, delay: 2 },
            }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            title="Chat on WhatsApp"
        >
            <MessageCircle className="w-7 h-7 fill-white stroke-none" />

            {/* Pulse ring */}
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: "2px solid rgba(37, 211, 102, 0.6)" }}
                animate={{ scale: [1, 1.5, 1.8], opacity: [0.8, 0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
            />
        </motion.a>
    );
}
