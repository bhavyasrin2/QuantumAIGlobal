import React,{useState} from 'react'
import { whitepapers } from '../Data/Whitepapers';
import { AnimatePresence, motion } from "framer-motion";

export default function Whitepapersverticalcontainer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="relative w-full">
      <div
        className="flex  justify-center items-center flex-wrap  py-5"

      >
        {whitepapers.map((item, idx) => (
          <a
            href={item.link}
            key={item.link}
            className="relative group block p-2 "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0  h-full w-full bg-[#343434]  block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}</AnimatePresence>
            <div
              className="flex flex-col items-center justify-center border-[0.06rem] hover:border-slate-700 border-[#444D61] md:px-10 px-2 md:py-3 py-1 md:rounded-2xl rounded-md bg-black md:w-[25rem] md:h-[30rem]  xl:w-[30rem] xl:h-[15rem] 2xl:w-[40rem] 2xl:h-[18rem] w-[22rem] h-[24rem] relative z-20"
            >
              <div className="h-full flex sm:flex-row flex-col items-center md:gap-8 py-2 ">


                <img src={item.img} className='z-50 w-[9rem] h-[11rem]  object-fill sm:hidden block'></img>
                <div className='h-full flex flex-col items-center justify-center sm:py-4 py-1 gap-4 '>

                  <div className='w-full px-[0.9rem] flex flex-wrap font-RobotoRegular text-white text-justify text-sm 2xl:text-base z-50'>
                    {item.content}
                  </div>
                  <div className='w-full flex  items-center justify-center sm:justify-start pl-2 '>
                    <div onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')} className={`w-1/3 xl:w-1/3 md:w-1/2 flex items-center justify-center cursor-pointer border-[#444D61] border-[0.06rem]  px-2 py-2 rounded-lg hover:bg-[#13151A] text-white font-RobotoMedium text-sm 2xl:text-base z-50  ${hoveredIndex ===idx ?  "bg-[#13151A]" : "bg-black" }`}>
                      Read more

                    </div>
                  </div>

                </div>

                <img src={item.img} className='z-50 w-[9rem] h-[9rem]  object-fill sm:block hidden'></img>


              </div>
            </div>

          </a>
        ))}
      </div>
    </div>
  );
}


