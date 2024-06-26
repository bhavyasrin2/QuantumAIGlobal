import React,{useState, useRef} from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { motion,useCycle } from "framer-motion";
import { useDimensions,sidebar, variants, itemVariants } from './Dimensions';
import { useNavigate } from "react-router-dom";

export default function NewHeader() {
 const navigate = useNavigate();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
  
    <motion.nav
      className="NavIcon  flex items-center justify-center w-[18.75rem] h-screen left-0 bottom-0 top-0"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="relative  top-0 left-0 w-[18.75rem] h-full "
        variants={sidebar}
        custom={height}
      >
      {
        isOpen === false && (
            <FaBars
        className="text-[#1B99D4] text-2xl top-[2rem] left-[2rem]  absolute cursor-pointer"
        onClick={() => toggleOpen()}
      />
        )
            
      }
      {
        isOpen === true && (
            <RxCross2 
        className="text-[#1B99D4] text-2xl top-[2rem] left-[2rem]  absolute cursor-pointer"
        onClick={() => toggleOpen()}
      />
        )
            
      }
      
    
      </motion.div>
      <motion.ul className='py-6  absolute top-40 w-[15rem]' variants={variants}>
      <motion.li 
              onClick={() => {
               navigate("/")
               
              }}
              className={`px-3 py-1  font-opensans font-normal mb-1  hover:text-[#6FC7E3] cursor-pointer text-[#ffffff] text-xs `}
              variants={itemVariants}>
              Home
            </motion.li>
            <motion.li
              onClick={() => {
                navigate("/")
               
              }}
              className={`px-3 py-1 font-opensans font-normal mb-1 hover:text-[#6FC7E3] cursor-pointer text-[#ffffff] 
                text-xs `}
                variants={itemVariants}>
              Home
            </motion.li>
  </motion.ul>
    </motion.nav>

  )
}
