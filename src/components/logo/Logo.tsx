
import React from 'react';
import { motion } from 'framer-motion';
import './Logo.css';
import AnimatedCharacters from './AnimatedCharacters';

interface LogoProps {
  logoSrc: string;
  onAnimationComplete: () => void;
}

const Logo: React.FC<LogoProps> = ({ logoSrc, onAnimationComplete }) => {
  const logoVariants = {
    initial: { opacity: 1, scale: 2, x: -50, y: -50, rotate: -30 },
    animate: {
      opacity: [0, 1, 1, 1],
      x: [-100, 0, 0, -190],
      y: [-100, 0, 0, 0],
      scale: [2, 1, 1, 1],
      rotate: [-30, 0, 0, 0],
      transition: {
        duration: 4,
        times: [0, 0.4, 0.5, 0.6],
        ease: "easeInOut",
      }
    }
  };

  return (
    <div className="logo-container">
      <motion.div
        className="fade-circle"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.img
        src={logoSrc}
        alt="Logo"
        className="logo-image"
        variants={logoVariants}
        initial="initial"
        animate="animate"
        onAnimationComplete={onAnimationComplete}
      />
      <div className="animated-text">
        <AnimatedCharacters text="SHODAMAD" delay={2.5} />
      </div>
    </div>
  );
};

export default Logo;