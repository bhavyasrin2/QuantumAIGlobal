import React from 'react'

export default function TitleContent(props) {
  return (
    <div className='w-full width flex flex-col gap-1 items-center justify-center'>
        <div className='w-[90%] md:w-[70%] 2xl:w-[50%] text-center font-RobotoBold wordGradient leading-tight text-[1.5rem] md:text-[2rem] 2xl:text-[2.3rem]'>
            {props.title}
        </div>
        <div className='w-[95%]  md:w-[70%] 2xl:w-[50%] text-center font-RobotoRegular  text-white text-xs md:text-sm'>
            {props.content}
        </div>
      
    </div>
  )
}
