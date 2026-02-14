import { motion } from "motion/react";

export function FloatingGeometry() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main 3D Vertex Object */}
      <motion.div
        className="relative"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {/* Geometric Triangle Structure */}
        <div className="relative w-64 h-64">
          {/* Outer glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 229, 255, 0.3) 0%, rgba(124, 58, 237, 0.2) 50%, transparent 70%)",
              filter: "blur(40px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Triangle Frame 1 */}
          <motion.svg
            className="absolute inset-0"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <defs>
              <linearGradient id="geo-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.8" />
              </linearGradient>
              <filter id="geo-glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <polygon
              points="100,30 170,150 30,150"
              fill="none"
              stroke="url(#geo-gradient-1)"
              strokeWidth="2"
              filter="url(#geo-glow)"
            />
            <circle cx="100" cy="30" r="4" fill="#00E5FF" filter="url(#geo-glow)" />
            <circle cx="170" cy="150" r="4" fill="#7C3AED" filter="url(#geo-glow)" />
            <circle cx="30" cy="150" r="4" fill="#7C3AED" filter="url(#geo-glow)" />
          </motion.svg>

          {/* Triangle Frame 2 - Offset */}
          <motion.svg
            className="absolute inset-0"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateZ: [360, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <polygon
              points="100,50 150,140 50,140"
              fill="none"
              stroke="url(#geo-gradient-1)"
              strokeWidth="1.5"
              filter="url(#geo-glow)"
              opacity="0.6"
            />
          </motion.svg>

          {/* Center Vertex Point */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
            style={{
              background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
              boxShadow: "0 0 20px #00E5FF, 0 0 40px #7C3AED",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              boxShadow: [
                "0 0 20px #00E5FF, 0 0 40px #7C3AED",
                "0 0 30px #00E5FF, 0 0 60px #7C3AED",
                "0 0 20px #00E5FF, 0 0 40px #7C3AED",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Wireframe Lines */}
          <motion.svg
            className="absolute inset-0"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <line x1="100" y1="100" x2="100" y2="30" stroke="#00E5FF" strokeWidth="1" opacity="0.5" />
            <line x1="100" y1="100" x2="170" y2="150" stroke="#7C3AED" strokeWidth="1" opacity="0.5" />
            <line x1="100" y1="100" x2="30" y2="150" stroke="#7C3AED" strokeWidth="1" opacity="0.5" />
          </motion.svg>
        </div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i % 2 === 0 ? "#00E5FF" : "#7C3AED",
            boxShadow: `0 0 10px ${i % 2 === 0 ? "#00E5FF" : "#7C3AED"}`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
