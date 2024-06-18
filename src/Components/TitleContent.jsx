import React from 'react'

export default function TitleContent(props) {
  return (
    <div className='w-full width flex flex-col gap-1 items-center justify-center'>
        <div className=' w-[50%] text-center font-RobotoBold wordGradient text-[2.3rem]'>
            {props.title}
        </div>
        <div className=' w-[55%] text-center font-RobotoRegular text-white text-sm'>
            {props.content}
        </div>
      
    </div>
  )
}
