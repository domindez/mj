import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface FancyAnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animationType?: 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'zoomIn' | 'flipInX' | 'bounceIn';
}

const FancyAnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  animationType = 'fadeInUp'
}: FancyAnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px",
    amount: 0.2
  });

  const getInitialState = () => {
    switch (animationType) {
      case 'fadeInUp':
        return { opacity: 0, y: 80, scale: 0.9 };
      case 'slideInLeft':
        return { opacity: 0, x: -100, rotateY: -30 };
      case 'slideInRight':
        return { opacity: 0, x: 100, rotateY: 30 };
      case 'zoomIn':
        return { opacity: 0, scale: 0.3, rotateZ: -10 };
      case 'flipInX':
        return { opacity: 0, rotateX: -90, scale: 0.8 };
      case 'bounceIn':
        return { opacity: 0, scale: 0.3 };
      default:
        return { opacity: 0, y: 80, scale: 0.9 };
    }
  };

  const getAnimateState = () => {
    switch (animationType) {
      case 'bounceIn':
        return { 
          opacity: 1, 
          scale: 1,
          transition: {
            duration: 0.8,
            delay,
            type: "spring" as const,
            stiffness: 400,
            damping: 10
          }
        };
      default:
        return { 
          opacity: 1, 
          y: 0, 
          x: 0, 
          scale: 1, 
          rotateY: 0, 
          rotateX: 0, 
          rotateZ: 0,
          transition: {
            duration: 0.8,
            delay,
            ease: "easeOut" as const,
            type: "spring" as const,
            stiffness: 100,
            damping: 20
          }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialState()}
      animate={isInView ? getAnimateState() : getInitialState()}
      className={className}
      style={{ transformOrigin: 'center' }}
    >
      {children}
    </motion.div>
  );
};

export default FancyAnimatedSection;
