import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn"; // Adjust this path according to your project structure
import { TbBackground } from "react-icons/tb";

const variants = {left: {
  x: "8rem",
  opacity: 0.4,
  scale: 1,
  zIndex: 0,
  transition: {
   
    duration: 0.5,
    ease: "easeInOut",
  },
},
center: {
  x: "0rem",
  opacity: 1,
  scale: 1.1,
  zIndex: 5,
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
},
right: {
  x: "-8rem",
  opacity: 0.4,
  zIndex: 0,
  scale: 1,
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
},
lefthidden: {
  x: "-7rem",
  opacity: 0,
  zIndex: -2,
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
},
righthidden: {
  x: "7rem",
  opacity: 0,
  zIndex: 2,
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
},
};

const Corousel = ({ className }) => {
  const [leftid, setLeft] = useState(-1);
  const [rightid, setRight] = useState(1);
  const [centerid, setCenter] = useState(0);
  const [move, setMove] = useState(true);
  const handlescroll = (scroll) => {
    if (scroll == "left") {
      setLeft(0);
      setCenter(1);
      setRight(-1);
      setMove(false);
    } else {
      setMove(true);
      setLeft(1);
      setCenter(-1);
      setRight(0);
    }
  };
  return (
    <div
      className={cn(
        " flex justify-center flex-col items-center gap-10    py-5",
        className
      )}
    >
      <motion.div className="relative   p-2 h-full w-full flex items-center justify-center">
        <AnimatePresence>
          <motion.div
            className="w-[15rem] h-[20rem] "
            key={leftid}
            initial={move ? "center" : "lefthidden"}
            variants={variants}
            animate="left"
            exit="lefthidden"
          >
            <Card color={true}>
              <CardTitle></CardTitle>
              <CardDescription kid={leftid}></CardDescription>
            </Card>
          </motion.div>
          <motion.div
            className="w-[15rem] h-[20rem] "
            key={centerid}
            initial={move ? "right" : "left"}
            variants={variants}
            animate="center"
          >
            <Card color={false}>
              <CardTitle></CardTitle>
              <CardDescription kid={centerid}></CardDescription>
            </Card>
          </motion.div>
          <motion.div
            className="w-[15rem] h-[20rem] "
            key={rightid}
            initial={move ? "righthidden" : "left"}
            variants={variants}
            animate="right"
            exit="righthidden"
          >
            <Card color={true}>
              <CardTitle></CardTitle>
              <CardDescription kid={rightid}></CardDescription>
            </Card>
          </motion.div>
        </AnimatePresence>
       
      </motion.div>
      <motion.div>
            <motion.button id="left-button"    onClick={() => handlescroll("left")} className="text-white px-4 py-2 bg-black border-[0.03rem]  border-[#444D61]  rounded-2xl">Left</motion.button>
            <motion.button id="right-button"    onClick={() => handlescroll("right")} className="text-white px-4 py-2 bg-black border-[0.03rem]  border-[#444D61] rounded-2xl">Right</motion.button>
        </motion.div>
    </div>
  );
};

const Card = ({ className, children, color }) => {
  return (
    <div
      className={cn(
        `rounded-2xl h-full w-full px-4 py-3 overflow-hidden ${color? 'bg-gray-900': 'bg-black'}  border-[0.03rem]  border-[#444D61] group-hover:border-slate-700 relative z-20`,
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({ className }) => {
  return (
    <h4
      className={cn(
        "text-[#1B99D4] text-xl md:text-2xl font-RobotoBold tracking-wide mt-4",
        className
      )}
    >
      hello
    </h4>
  );
};

const CardDescription = ({ className, kid }) => {
  return (
    <p
      className={cn(
        "mt-2 h-[7rem] overflow-y-auto scrollbar-hide text-white font-RobotoRegular text-xs md:text-sm ",

        className
      )}
    >
      lorem ipsum dolor sit amet consectetur adipisicing elit. {kid}
    </p>
  );
};

export { Corousel, Card, CardTitle, CardDescription };
