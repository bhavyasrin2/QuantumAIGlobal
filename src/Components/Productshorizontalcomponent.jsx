import React from 'react'

export default function Productshorizontalcomponent(props) {
    return (
        <div
            className=" flex flex-row items-center justify-center border-[0.06rem] border-[#444D61] md:px-6 px-2  py-4 md:rounded-2xl 2xl:rounded-3xl rounded-lg bg-black md:w-[50rem]  2xl:w-[60rem]  w-[22rem] h-auto md:pb-4"
        >
            <div className="flex sm:flex-row flex-col  items-center justify-center md:gap-8 gap-1">

              
                <img src={props.img} className='w-[8rem] h-[10rem] 2xl:w-[11rem] 2xl:h-[13rem]  object-fill'></img>
               
               

                <div className='flex flex-col items-center justify-center gap-8'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                    <div className='w-[95%]   pt-2 flex items-center justify-center'><div className='w-full text-center sm:text-left wordGradient  font-RobotoBold text-lg md:text-[1.25rem] 2xl:text-2xl'>{props.name}</div></div>


                    <div className='w-full px-[0.9rem] flex flex-wrap font-RobotoRegular text-white text-justify text-sm 2xl:text-base'>
                        {props.content}
                    </div>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}
