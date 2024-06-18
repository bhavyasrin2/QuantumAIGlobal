import React from 'react'

export default function Productshorizontalnocomponent(props) {
  return (
    <div
    className=" flex flex-row items-center justify-center border-[0.06rem] border-[#444D61] md:px-6 py-3  md:rounded-2xl 2xl:rounded-3xl rounded-lg bg-black   md:w-[50rem] 2xl:w-[60rem]  w-[22rem] h-auto"
>
    <div className="flex sm:flex-row flex-col  items-center justify-center md:gap-8 gap-1">


        <img src={props.img} className='w-[7rem] h-[7rem] 2xl:w-[9rem] 2xl:h-[9rem]  object-fill'></img>

        <div className='flex flex-col items-center justify-center gap-8'>
            <div className='flex flex-col items-center justify-center gap-4'>
            <div className='w-[95%] pt-2 flex items-center justify-center'><div className='w-full text-center sm:text-left wordGradient  font-RobotoBold text-lg md:text-[1.25rem] 2xl:text-2xl'>{props.name}</div></div>


            <div className='w-full px-[0.9rem] flex flex-wrap font-RobotoRegular text-white text-justify text-sm 2xl:text-base'>
                {props.content}
            </div>
            </div>
           
        </div>
    </div>
</div>
  )
}

