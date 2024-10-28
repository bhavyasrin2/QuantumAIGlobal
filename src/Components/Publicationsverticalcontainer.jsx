import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { publicationsdata} from '../Data/Whitepapers';

export default function Publicationsverticalcontainer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const openPDF = (link) => {
    window.open(link, '_blank', 'noopener noreferrer'); // Ensure 'noopener noreferrer' is separated by a space
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-center items-center flex-wrap py-5">
        {publicationsdata.map((item, idx) => (
          <a
            key={item.id}
            className="relative group block p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-[#343434] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <div className="flex flex-col items-center justify-center border-[0.06rem] hover:border-slate-700 border-[#444D61] md:px-5 px-2 md:py-3 py-2 md:rounded-2xl rounded-md bg-black md:w-[60rem]  w-[22rem] h-auto relative z-20">
             
                <div className="w-full h-full flex flex-col items-center justify-start py-1 gap-4">
               <div  onClick={() => openPDF(item.link)}  className='w-full text-center sm:text-left font-RobotoBold text-[#444D61] cursor-pointer hover:text-[#1B99D4] px-[0.9rem] text-[1rem] md:text-xl 2xl:text-2xl'>{item.name}</div>
                  {/* <div className="w-full px-[0.9rem] h-[15rem] flex flex-wrap font-RobotoRegular text-white text-justify md:text-sm text-xs z-50">
                    {item.content}
                  </div>
                  <div className="w-full flex items-center justify-center sm:justify-start pl-2">
                    <div
                      onClick={() => openPDF(item.link)} // Use item.pdfLink here assuming it points to the PDF file
                      className={`w-1/3 xl:w-1/3 md:w-1/2 flex items-center justify-center cursor-pointer border-[#444D61] border-[0.06rem] px-2 py-2 rounded-lg hover:bg-[#13151A] text-white font-RobotoMedium text-xs md:text-sm z-50 ${
                        hoveredIndex === idx ? 'bg-[#13151A]' : 'bg-black'
                      }`}
                    >
                      Read more
                    </div>
                  </div> */}
                </div>
               
              </div>
          </a>
        ))}
      </div>
    </div>
  );
}
