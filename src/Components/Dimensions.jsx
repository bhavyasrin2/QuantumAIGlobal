import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// A more robust implementation with window resize listener
// and using state to trigger re-render on dimensions change.
export const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [ref]);

  return dimensions;
};


export const sidebar = {
  open: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    y: 0, // Set y to 0 to start from the top
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
      damping: 25,
      duration: 0.4,
    },
  },
  closed: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    y: '-100%', // Move the sidebar out of view to the top
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
      damping: 25,
      duration: 0.4,
    },
  },
};
  // open: (height = 1000) => ({
  //   clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
  //   backgroundColor: "rgba(0,0,0,1)",
  //   transition: {
  //     type: "spring",
  //     stiffness: 20,
  //     restDelta: 2,
  //   },
  // }),
  // closed: {
  //   clipPath: "polygon(20px 20px, 70px 20px, 70px 70px, 20px 70px)",
  //   transition: {
  //     type: "keyframes",
  //     duration: 0.1, 
  //     ease: "easeInOut", 
     
  //   },
  // },


export const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };


  export const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };


  export const generateSvgDataUrl = (strokeColor,w,h) => {
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${w}" height="${h}" fill="none" stroke="${strokeColor}"><path d="M0 .5H31.5V32"/></svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
  
  };


  export const WordAnimate = ({ word }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 2,
          position: 'absolute',
        }}
        className="z-10 inline-block relative text-left text-white px-2"
      >
        {word.split('').map((letter, index) => (
          <motion.span
            key={word + index}
            initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
            }}
            className="inline-block text-7xl font-bold"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    );
  }