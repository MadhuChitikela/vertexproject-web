import { motion } from "motion/react";

interface LogoProps {
  variant?: "icon" | "full" | "horizontal";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export function Logo({ variant = "full", size = "md", animated = true }: LogoProps) {
  const sizeMap = {
    sm: { icon: 32, text: 20 },
    md: { icon: 48, text: 28 },
    lg: { icon: 64, text: 36 },
  };

  const dimensions = sizeMap[size];

  const iconVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  const textVariants = {
    initial: { x: -20, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const LogoIcon = () => (
    <motion.svg
      width={dimensions.icon}
      height={dimensions.icon}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={animated ? iconVariants : undefined}
      initial={animated ? "initial" : undefined}
      animate={animated ? "animate" : undefined}
      whileHover={animated ? "hover" : undefined}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer Triangle - 3D Frame */}
      <motion.path
        d="M 50 10 L 85 75 L 15 75 Z"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Inner Vertex Lines - Creating depth */}
      <motion.line
        x1="50"
        y1="10"
        x2="50"
        y2="50"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.line
        x1="50"
        y1="50"
        x2="32.5"
        y2="62.5"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <motion.line
        x1="50"
        y1="50"
        x2="67.5"
        y2="62.5"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      {/* Central Vertex Point */}
      <motion.circle
        cx="50"
        cy="50"
        r="4"
        fill="url(#logoGradient)"
        filter="url(#glow)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />

      {/* Corner Vertices */}
      <motion.circle
        cx="50"
        cy="10"
        r="3"
        fill="#00E5FF"
        filter="url(#glow)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      />
      <motion.circle
        cx="85"
        cy="75"
        r="3"
        fill="#7C3AED"
        filter="url(#glow)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
      <motion.circle
        cx="15"
        cy="75"
        r="3"
        fill="#7C3AED"
        filter="url(#glow)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      />
    </motion.svg>
  );

  const LogoText = () => (
    <motion.div
      className="flex flex-col"
      variants={animated ? textVariants : undefined}
      initial={animated ? "initial" : undefined}
      animate={animated ? "animate" : undefined}
    >
      <span
        className="tracking-tight"
        style={{
          fontSize: dimensions.text,
          fontWeight: 700,
          background: "linear-gradient(135deg, #00E5FF 0%, #7C3AED 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        VERTEX
      </span>
      <span
        className="tracking-widest -mt-1"
        style={{
          fontSize: dimensions.text * 0.35,
          fontWeight: 500,
          color: "#00E5FF",
          opacity: 0.8,
        }}
      >
        PROJECT
      </span>
    </motion.div>
  );

  if (variant === "icon") {
    return <LogoIcon />;
  }

  if (variant === "horizontal") {
    return (
      <div className="flex items-center gap-3">
        <LogoIcon />
        <LogoText />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <LogoIcon />
      <LogoText />
    </div>
  );
}
