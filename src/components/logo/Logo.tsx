import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Logo.css';
import AnimatedCharacters from './AnimatedCharacters';

interface LogoProps {
  logoSrc: string;
  onAnimationComplete: () => void;
}

const Logo: React.FC<LogoProps> = ({ logoSrc, onAnimationComplete }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logoVariants = {
    initial: { opacity: 1, scale: 2, x: -100, y: -100, rotate: -30 },
    animate: {
      opacity: [0, 1, 1, 1],
      x: [-100, 0, 0, isMobile ? -90 : -190],
      y: [-100, 0, 0, 0],
      scale: [2, 1, 1, 1],
      rotate: [-30, 0, 0, 0],
      transition: {
        duration: 4,
        times: [0, 0.3, 0.4, 0.5],
        ease: "easeInOut",
      }
    }
  };

  return (
    <>
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
        <AnimatedCharacters text="SHODAMAD" delay={2} />
      </div>
    </>
  );
};

export default Logo;