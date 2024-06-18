import React from 'react'

export default function Simplebigboxcomponent(props) {
    return (
        <div
            className="flex flex-col items-center justify-center md:px-3 md:py-4 px-1 py-3 border-[0.06rem] border-[#444D61] rounded-lg md:rounded-2xl bg-black   md:w-[24rem] md:h-[16rem] 2xl:w-[36rem] 2xl:h-[20rem] w-[19rem] h-[18rem]"
        >
            <div className="w-full h-full flex flex-col items-center justify-center md:gap-2 gap-1">


            <div className='h-[10%] p-2 flex items-center justify-center w-full font-opensans font-bold text-[#1B99D4] text-center text-base xl:text-xl 2xl:text-2xl my-2'>{props.name}</div>
            <div className='h-[75%]  w-full px-3 pb-2 flex flex-wrap justify-center font-opensans font-normal text-white text-justify text-sm 2xl:text-lg'>
           {props.content}
            </div>

            </div>
        </div>
    );
}


