import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn"; // Adjust this path according to your project structure
import { useNavigate } from "react-router-dom";


const HomeBoxHover = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
 


  return (
    <div className={cn(" justify-center items-center flex flex-wrap  py-5", className)}>
      {items.map((item, idx) => (
        <a
          href={item.link}


          
          key={item.id}
          className="relative group block p-2 h-full md:w-[50%] "
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
          <Card hovered={hoveredIndex === idx}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription >{item.description}</CardDescription>
            <CardButton1 hovered={hoveredIndex === idx} link={item.link}></CardButton1>
          </Card>
        </a>
      ))}
    </div>
  );
};

const BoxHover = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);


  return (
    <div className={cn(" justify-center items-center flex flex-wrap  py-5", className)}>
      {items.map((item, idx) => (
        <a
          href={item.link}


          
          key={item.id}
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
          <Card hovered={hoveredIndex === idx}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription >{item.description}</CardDescription>
            <CardButton2 hovered={hoveredIndex === idx} name={item.name}></CardButton2>
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
        "rounded-2xl h-full w-full px-4 py-3 overflow-hidden bg-black border-[0.03rem]   border-[#444D61] group-hover:border-slate-700 relative z-20",
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
    <h4 className={cn("text-[#1B99D4] text-[1rem] md:text-xl 2xl:text-2xl font-RobotoBold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children}) => {

  return (
    <p
   
    className={cn(
      'mt-2 2xl:h-[7rem] overflow-y-auto scrollbar-hide text-white font-RobotoRegular text-xs md:text-sm ',
      
      className
    )}
  >
    {children}
  </p>
  );
};

const CardButton1=({className,children,hovered,link})=>{
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
    return(
        <div
        className={cn(
            "mt-4 rounded-2xl w-[8rem] px-4 py-3 border-[0.03rem] border-[#444D61] group-hover:border-slate-700",
            className,
            hovered ? "bg-[#13151A]" : "bg-black" 
          ) }  onClick={() => {
            scrollToTop();
            navigate(link)
          }}
      >
      
          <div className=" text-white text-xs md:text-sm font-RobotoMedium">Learn more</div>
       
      </div>
    )
}


const CardButton2=({className,children,hovered,name})=>{
  
  const handleCardClick = (id) => {
    if (id !== "") {
      const url = `/Products/${id}`;
      window.open(url, '_blank'); // Open in a new tab or window
    } else {
      console.log('Invalid ID: Cannot open new window'); // Optional: Log or handle the case where id is empty
    }// Open in a new tab or window
   
    };
    return(
        <div
        className={cn(
            "mt-4 rounded-2xl w-[8rem] px-4 py-3 border-[0.03rem] border-[#444D61] group-hover:border-slate-700",
            className,
            hovered ? "bg-[#13151A]" : "bg-black" 
          ) }  onClick={() => handleCardClick(name)}
      >
      
          <div className={`text-white text-xs md:text-sm font-RobotoMedium ${name !== ""? 'cursor-pointer' : 'cursor-none'} `}>Learn more</div>
       
      </div>
    )
}
export { HomeBoxHover,BoxHover, Card, CardTitle, CardDescription, CardButton1, CardButton2 };
