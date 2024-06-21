import {useRef,useEffect, useState} from 'react'
import { useTransform, motion, useScroll } from "framer-motion";
import { cn } from "../../utils/cn";
import QSleeveDashboardImage from "../../Images/QSleeve Dashboard.png";

const Scroll = ({ className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } =  useScroll({
    target: targetRef,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0,30]);
  const translate= useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <div className='w-full h-[40rem]' ref={targetRef}>
    <motion.div
      style={{ perspective: "1000px", translateY: translate }} 
      className={cn("flex justify-center items-center w-full h-[40rem]", className)}
    >
      <motion.div  ref={targetRef}
        style={{ scale, rotateX: rotate }} 
        className="bg-[#363636] rounded-[2rem] h-[40rem] flex items-center justify-center relative p-2 border-2 border-[#ffffff]/20"
      >
        <img
          src={QSleeveDashboardImage}
          className="w-full h-full rounded-3xl"
          alt="Scaling Image"
        />
      </motion.div>
    </motion.div>
    </div>
  );
};

export { Scroll };

