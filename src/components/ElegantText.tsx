import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface ElegantTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const ElegantText = ({ 
  children, 
  className = '', 
  delay = 0,
  staggerDelay = 0.03
}: ElegantTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "200px",
    amount: 0.05
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0, 
      y: 15,
      filter: "blur(2px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  // Función para dividir texto en palabras de forma más sutil
  const splitTextIntoWords = (text: string) => {
    return text.split(' ').map((word, index) => (
      <motion.span 
        key={index} 
        variants={item}
        className="inline-block"
        style={{ marginRight: '0.25rem' }}
      >
        {word}
      </motion.span>
    ));
  };

  const renderContent = (content: ReactNode): ReactNode => {
    if (typeof content === 'string') {
      return splitTextIntoWords(content);
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
      {renderContent(children)}
    </motion.div>
  );
};

export default ElegantText;
