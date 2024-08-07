
import React from "react";
import { motion } from "framer-motion";

interface AnimatedCharactersProps {
  text: string;
  delay: number;
}

const AnimatedCharacters: React.FC<AnimatedCharactersProps> = ({ text, delay }) => {
  const characters = text.split(""); 
  return (
    <div style={{ direction: 'ltr', display: 'inline-block' }}>
      {characters.map((char, index) => (
        <motion.span
          key={`char-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * 0.1,
            duration: 0.2
          }}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedCharacters;