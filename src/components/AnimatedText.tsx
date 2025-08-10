import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import React from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
}

const AnimatedText = ({ 
  children, 
  className = '', 
  delay = 0,
  staggerChildren = 0.1
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px",
    amount: 0.3
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
        delayChildren: delay + 0.2
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    }
  };

  // Función para dividir texto en palabras
  const splitText = (text: string) => {
    return text.split(' ').map((word, index) => (
      <motion.span 
        key={index} 
        variants={item}
        className="inline-block mr-2"
        style={{ display: 'inline-block' }}
      >
        {word}
      </motion.span>
    ));
  };

  const renderAnimatedContent = (content: ReactNode): ReactNode => {
    if (typeof content === 'string') {
      return splitText(content);
    }
    
    if (React.isValidElement(content)) {
      if (typeof content.props.children === 'string') {
        return React.cloneElement(content, {
          ...content.props,
          children: splitText(content.props.children)
        });
      }
    }
    
    return content;
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {renderAnimatedContent(children)}
    </motion.div>
  );
};

export default AnimatedText;
