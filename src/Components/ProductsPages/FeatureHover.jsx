import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn"; // Adjust this path according to your project structure

const FeatureHover = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);


  return (
    <div className={cn("justify-center items-center flex flex-wrap  py-5", className)}>
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.link}
          className="relative group block p-2 h-full w-full md:w-[50%] 2xl:w-[33%]"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#343434]  block rounded-3xl"
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
            )}
          </AnimatePresence>
          <Card >
            <CardTitle>{item.title}</CardTitle>
            <CardDescription >{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full px-4 py-3 overflow-hidden bg-black border-[0.03rem]  border-[#444D61] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({ className, children }) => {
  
  return (
    <h4 className={cn("text-[#1B99D4] text-xl md:text-2xl font-RobotoBold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children}) => {

  return (
    <p
   
    className={cn(
      'mt-2 h-[10rem] text-white font-RobotoRegular text-xs md:text-sm ',
      
      className
    )}
  >
    {children}
  </p>
  );
};



export { FeatureHover, Card, CardTitle, CardDescription };
