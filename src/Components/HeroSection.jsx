import React,{useEffect, useState} from 'react'
import '../App.css';



export default function HeroSection(props) {
 
  
 



  return (
    <div  className="h-full w-full  relative flex items-center justify-center"
   >
     <div
        className="w-full h-full relative"
        
      >
      <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] flex flex-col items-center gap-1 justify-center'>
        <div className='w-full flex flex-col items-center justify-center'>
          <div className='w-full  text-center font-RobotoBold z-0 wordGradient text-5xl'>
            {props.title1}
          </div>
          <div className='w-full h-[3.5rem] text-center z-0 font-RobotoBold wordGradient text-5xl'>
            {props.title2}
          </div>
        </div>
        <p className='w-full max-w-xl text-center text-white font-RobotoRegular text-sm'>{props.content}</p>
      </div>
      </div>

      <div className='absolute -z-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 w-[28rem] h-[12rem]'
        style={{
          background: "radial-gradient(circle at center, rgba(77,118,244,0.4), transparent )",
          filter: "blur(70px)"
        }}>

      </div>
    </div>
  );
}
