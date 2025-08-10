import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface ElegantAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
  duration?: number;
}

const ElegantAnimation = ({ 
  children, 
  className = '', 
  delay = 0,
  type = 'fadeIn',
  duration = 0.4
}: ElegantAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "200px",
    amount: 0.05
  });

  const getAnimation = () => {
    const baseTransition = {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    };

    switch (type) {
      case 'fadeIn':
        return {
          initial: { opacity: 0 },
          animate: isInView ? { 
            opacity: 1,
            transition: baseTransition
          } : { opacity: 0 }
        };
      
      case 'slideUp':
        return {
          initial: { opacity: 0, y: 30 },
          animate: isInView ? { 
            opacity: 1, 
            y: 0,
            transition: baseTransition
          } : { opacity: 0, y: 30 }
        };
      
      case 'slideInLeft':
        return {
          initial: { opacity: 0, x: -30 },
          animate: isInView ? { 
            opacity: 1, 
            x: 0,
            transition: baseTransition
          } : { opacity: 0, x: -30 }
        };
      
      case 'slideInRight':
        return {
          initial: { opacity: 0, x: 30 },
          animate: isInView ? { 
            opacity: 1, 
            x: 0,
            transition: baseTransition
          } : { opacity: 0, x: 30 }
        };
      
      case 'scaleIn':
        return {
          initial: { opacity: 0, scale: 0.95 },
          animate: isInView ? { 
            opacity: 1, 
            scale: 1,
            transition: baseTransition
          } : { opacity: 0, scale: 0.95 }
        };
      
      default:
        return {
          initial: { opacity: 0 },
          animate: isInView ? { 
            opacity: 1,
            transition: baseTransition
          } : { opacity: 0 }
        };
    }
  };

  const animation = getAnimation();

  return (
    <motion.div
      ref={ref}
      initial={animation.initial}
      animate={animation.animate}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ElegantAnimation;
