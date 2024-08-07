
import React from "react";
import AnimatedCharacters from "./AnimatedCharacters";

interface AnimatedTextProps {
  text: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay = 0 }) => {
  return <AnimatedCharacters text={text} delay={delay} />;
};

export default AnimatedText;