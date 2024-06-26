import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn"; // Adjust this path according to your project structure
import { TbBackground } from "react-icons/tb";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";


const Corousel = ({ className, Data }) => {
  const [FlowDirection, setFlowDirection] = useState(true)
  const [CenterId, setCenterId] = useState(0)
  const [LeftId, setLeftId] = useState(Data.length - 1)
  const [RightId, setRightId] = useState(1)

  const nextBtn = () => {
    if (LeftId === Data.length - 1) {
      setLeftId(0)
    } else {
      setLeftId(LeftId + 1)
    }
    if (CenterId === Data.length - 1) {
      setCenterId(0)
    } else {
      setCenterId(CenterId + 1)
    }

    if (RightId === Data.length - 1) {
      setRightId(0)
    } else {
      setRightId(RightId + 1)
    }
    setFlowDirection(true)
  }
  const prevBtn = () => {
    setFlowDirection(false)
    if (LeftId === 0) {
      setLeftId(Data.length - 1)
    } else {
      setLeftId(LeftId - 1)
    }
    if (CenterId === 0) {
      setCenterId(Data.length - 1)
    } else {
      setCenterId(CenterId - 1)
    }
    if (RightId === 0) {
      setRightId(Data.length - 1)
    } else {
      setRightId(RightId - 1)
    }
  }

  // useEffect(() => {

  //   const timerId = setInterval(() => nextBtn(), 2000)
  //     return () => clearInterval(timerId)
  // });
  const variants = {
    center: {
      x: '0rem',
      opacity: 1,
      scale: 1.1,
      zIndex: '5',
      filter: "brightness(100%)",
      backgroundImage: 'url(' + Data[CenterId] + ')',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    left: {
      x: '-6rem',
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      backgroundImage: 'url(' + Data[LeftId] + ')',
      zIndex: '4',

      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    right: {
      backgroundImage: 'url(' + Data[RightId] + ')',
      x: '6rem',
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      boxShadow: 'unset',
      zIndex: '3',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    rightHidden: {
      x: '8rem',
      scale: 0,
      opacity: 0,




    },
    leftHidden: {
      x: '-8rem',
      scale: 0,
      opacity: 0,





    },
  }

  return (
    <motion.div
      className={cn(
        " flex rounded-[2rem] items-center justify-center gap-10    py-5",
        className
      )}
    >
      <motion.div className="relative   p-2 w-[20rem] h-[20rem] flex items-center justify-center">
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}

          className=" w-[4rem] h-[4rem] rounded-[50%] flex items-center justify-center bg-black/70 absolute -left-28 z-10"
          onClick={prevBtn}
        >
          <FaArrowLeft size={20} color="#1B99D4"/>
        </motion.button>

        <AnimatePresence initial={false}>
          <motion.div
            className="w-[20rem] h-[20rem] absolute "
            key={LeftId}
            variants={variants}
            initial={FlowDirection ? 'center' : 'leftHidden'}
            animate="left"
            exit={'leftHidden'}
          >
            <Card color={true}>
              <CardTitle name={Data[LeftId].name}></CardTitle>
              <CardDescription content={Data[LeftId].content}></CardDescription>
            </Card>
          </motion.div>
          <motion.div
            className="w-[20rem] h-[20rem] absolute "
            variants={variants}
            key={CenterId}
            initial={FlowDirection ? 'right' : 'left'}
            animate="center"
          >
            <Card color={false}>
              <CardTitle name={Data[CenterId].name}></CardTitle>
              <CardDescription content={Data[CenterId].content}></CardDescription>
            </Card>
          </motion.div>
          <motion.div
            className="w-[20rem] h-[20rem] absolute"
            key={RightId}
            variants={variants}
            initial={FlowDirection ? 'rightHidden' : 'center'}
            animate="right"
            exit={'rightHidden'}
          >
            <Card color={true}>
              <CardTitle name={Data[RightId].name} ></CardTitle>
              <CardDescription content={Data[RightId].content} ></CardDescription>
            </Card>
          </motion.div>
        </AnimatePresence>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.8}}
          className=" w-[4rem] h-[4rem] rounded-[50%] flex items-center justify-center bg-black/70 absolute -right-28 z-10"
          onClick={nextBtn}
        >
         <FaArrowRight size={20} color="#1B99D4"/>
        </motion.button>

      </motion.div>

      {/* <div className="mt-[2rem] flex justify-center gap-4 z-10">
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.8}}

          className=" text-white"
          onClick={prevBtn}
        >
          Back
        </motion.button>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.8}}
          className=" text-white"
          onClick={nextBtn}
        >
          Next
        </motion.button>
      </div> */}
    </motion.div>
  );
};

const Card = ({ className, children, color }) => {
  return (
    <div
      className={cn(
        `rounded-2xl h-full w-full px-4 py-3 overflow-hidden ${color ? "bg-gray-900" : "bg-black"} border-[0.03rem] border-[#444D61] group-hover:border-slate-700 relative z-20`,
        className
      )}
    >
      <div className="relative z-50">
        <div className="px-4 py-2 flex flex-col items-center justify-center gap-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({ className, name }) => {
  return (
    <h4 className={cn("text-[#1B99D4] text-xl md:text-2xl font-RobotoBold tracking-wide mt-4", className)}>
      {name}
    </h4>
  );
};

const CardDescription = ({ className, content }) => {
  return (
    <p className={cn("mt-2  text-white font-RobotoRegular text-xs md:text-sm", className)}>
      {content}
    </p>
  );
};

export { Corousel, Card, CardTitle, CardDescription };
