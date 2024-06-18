import React, { useEffect, useState } from "react";
import "../App.css";

export default function HeroSection(props) {
  return (
    <div className="h-full w-full  relative flex items-center justify-center">
      <div className="w-full h-full relative">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60rem] flex flex-col items-center gap-1 justify-center">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full  text-center md:h-[3.5rem] font-RobotoBold z-0 wordGradient md:text-5xl text-3xl">
              {props.title1}
            </div>
            <div className="w-full md:h-[3.5rem] text-center z-0 font-RobotoBold wordGradient md:text-5xl text-3xl  ">
              {props.title2}
            </div>
          </div>
          <p className="w-full max-w-xl text-center text-white font-RobotoRegular text-xs md:text-sm">
            {props.content}
          </p>
        </div>
      </div>

      <div
        className="absolute -z-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 md:w-[28rem] md:h-[12rem]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(77,118,244,0.4), transparent )",
          filter: "blur(70px)",
        }}
      ></div>
    </div>
  );
}
