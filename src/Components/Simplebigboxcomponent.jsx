import React, {useState} from 'react'

export default function Simplebigboxcomponent(props) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className={`flex flex-col items-center justify-center md:px-3 md:py-4 px-1 py-3 border-[0.06rem]  rounded-lg md:rounded-2xl bg-black   md:w-[24rem] md:h-[16rem] 2xl:w-[22rem] 2xl:h-[19rem]  w-[19rem] h-[18rem] ${isHovered? 'border-[#1B99D4]' : 'border-[#444D61]'}`}  onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-full h-full flex flex-col items-center justify-center md:gap-2 gap-1">


            <div className='h-[10%] p-2 flex items-center justify-center w-full font-opensans font-bold text-[#1B99D4] text-center text-base xl:text-xl 2xl:text-2xl my-2'>{props.name}</div>
            <div className='h-[75%]  w-full px-3 pb-2 flex flex-wrap justify-center font-opensans font-normal text-white text-justify md:text-sm text-xs leading-tight'>
           {props.content}
            </div>

            </div>
        </div>
    );
}


