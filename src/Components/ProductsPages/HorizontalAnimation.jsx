import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../utils/cn";

const HorizontalMenu = ({ className, itemName }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["-68   %", "32%"]);
  

    return (
        <div className={cn("w-full h-full flex flex-col items-center justify-center", className)}>
          <div className="font-RobotoBold wordGradient text-[2rem] 2xl:text-[3rem] mt-28">KEY FEATURES</div>
          <section ref={targetRef} className="w-full h-[30rem]  flex items-center justify-center py-2 relative">
            <div className="sticky top-0 h-[150vh] flex items-center overflow-x-hidden">
              <motion.div style={{ x }} className="flex gap-4 px-10">
                {itemName.map((item, idx) => (
                  <motion.div key={item.id}  className="relative group block p-2 h-full w-[20rem]">
                    <AnimatePresence>
                      <motion.span  className="absolute inset-0 h-full w-full bg-[#343434] block rounded-3xl" />
                      <Card>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </Card>
                    </AnimatePresence>
                  
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
    );

};

const Card = ({ className, children }) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-[20rem] w-full px-4 py-3 overflow-hidden bg-black border-[0.03rem]  border-[#444D61] group-hover:border-slate-700 relative z-20",
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

const CardDescription = ({ className, children }) => {

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













export { HorizontalMenu, CardDescription, CardTitle, Card };
