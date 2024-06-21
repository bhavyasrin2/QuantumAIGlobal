import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn"; // Adjust this path according to your project structure

const ServicesBox = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);


  return (
    <div className={cn("justify-items-center items-center grid md:grid-cols-4 grid-cols-1  py-5", className)}>
      {items.map((item, idx) => (
        <div
         
          key={item.link}
          className="relative group block p-2 h-full w-full "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
         
          <Card >
            <CardTitle>{item.title}</CardTitle>
            <CardDescription >{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-[18rem] w-full px-4 py-3 overflow-hidden bg-black border-[0.03rem]  border-slate-700 group-hover:border-[#1B99D4] relative z-20",
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
      'mt-3 h-[10rem] text-white  font-RobotoRegular text-xs md:text-sm ',
      
      className
    )}
  >
    {children}
  </p>
  );
};



export { ServicesBox, Card, CardTitle, CardDescription };
