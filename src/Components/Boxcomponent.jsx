import React, { useState } from 'react'
import "./../App.css"

export default function Boxcomponent(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div

      className={`w-[15rem] h-[18rem] md:w-[16rem] md:h-[20rem]   border-[0.06rem] border-[#444D61] rounded-[2rem] flex flex-col  items-center justify-center  gap-2 px-1 2xl:px-2 py-3 2xl:py-6 bg-black`}   onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={props.img} alt={props.name} className={` w-[3.5rem] h-[3.5rem]  object-contain ${isHovered ? 'w-[3.2rem] h-[3.2rem]' : ''}`} />
    

      <div className={`text-[#1B99D4] text-sm md:text-[1.2rem] font-RobotoBold tracking-wide mt-4 w-[80%] text-center ${isHovered ? 'text-[1rem]' : ''} `}>{props.name}</div>
      
     
       <p className={`text-white  font-RobotoRegular text-xs md:text-sm  text-justify  w-[80%] h-[40%]${isHovered ? 'xl:text-[0.9rem]' : ''}`}>
         {props.content}
       </p>

    </div>
  );
}
