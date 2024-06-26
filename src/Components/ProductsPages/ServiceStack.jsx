"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

const CardStack = ({ items, offset = 10, scaleFactor = 0.06 }) => {
    const CARD_OFFSET = offset;
    const SCALE_FACTOR = scaleFactor;
    const [cards, setCards] = useState(items);

    useEffect(() => {
        startFlipping();
        return () => clearInterval(interval);
    }, []);

    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards) => {
                const newArray = [...prevCards];
                const lastThree = newArray.splice(-3, 3); // Extract the last three elements
                newArray.unshift(...lastThree);
                // Insert them at the beginning
                return newArray;
            });
        }, 5000);
    };

    return (
        <div className="relative h-60 w-60 md:h-[15rem] md:w-[40rem]">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="absolute bg-black  h-60 w-60 md:h-[15rem] md:w-[25rem] 2xl:w-[32rem] rounded-3xl px-4 py-8 shadow-xl border-[0.03rem]   border-[#444D61] shadow-white/[0.05] flex flex-col justify-center items-center"
                        style={{
                            transformOrigin: "top center",
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR,
                            zIndex: cards.length - index,
                        }}
                    >
                        <div className="text-[#1B99D4] text-[1rem] md:text-xl 2xl:text-2xl font-RobotoBold tracking-wide px-2 md:px-10">
                            {card.name}
                        </div>
                        <div>
                            <p className="mt-4  text-white  font-RobotoRegular text-xs md:text-sm px-2 md:px-10 ">
                                {card.content}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default CardStack;
