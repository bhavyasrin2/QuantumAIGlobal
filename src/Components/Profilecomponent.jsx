import React, { useState } from "react";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Profilecomponent(props) {
    const [isHovered, setIsHovered] = useState(false);
    const openLink = (url, event) => {
      event.stopPropagation();
      window.open(url, "_blank");
    };
    return (
      <div className=" flex flex-col items-center justify-center 2xl:gap-6 xl:gap-4 gap-3  xl:px-4 xl:py-6 px-2 py-4  md:rounded-2xl   rounded-md  md:w-[16rem] md:h-[24rem] w-[13rem] h-[18rem]"
      >
        {/* <div className="profileclass "> */}
        <div className="flex items-center justify-center w-[10rem] h-[10rem] rounded-[5rem] p-2 videoBackground border-[0.06rem] border-[#444D61] ">
        <img
          className=" object-fill w-[8rem] h-[8rem]   rounded-full"
          src={props.img}
        ></img>
        </div>
        {/* </div> */}
        <div className="flex flex-col items-center justify-center md:gap-6 gap-1">
        
            <div className=" flex flex-col items-start justify-center md:gap-1 gap-[0.15rem]">
              <p className="w-full font-RobotoRegular md:text-[1rem] text-sm text-white text-center">
                {props.name}
              </p>
              <p
                className={`w-full font-RobotoRegular text-xs md:text-sm   text-white text-center`}
              >
                {props.title}
              </p>
            </div>
            <div
              onClick={(event) => openLink(props.linkedin, event)}
              className="2xl:w-[4rem] 2xl:h-[4rem]  rounded-full  w-[2.5rem] h-[2.5rem]  videoBackground flex items-center justify-center shadow-lg shadow-gray-400 "
            >
              <SlSocialLinkedin size={20} color="#1B99D4" className="hidden md:block" />
              <SlSocialLinkedin size={12} color="#1B99D4" className="block md:hidden" />
            </div>
          </div>
        </div>
    );
}
