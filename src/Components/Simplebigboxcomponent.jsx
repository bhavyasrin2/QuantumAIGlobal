import React, {useState} from 'react'

export default function Simplebigboxcomponent(props) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className={`flex flex-col items-center justify-center md:px-6 px-2 py-8 md:py-4 border-[0.06rem]  rounded-lg md:rounded-2xl bg-black   md:w-[24rem] md:h-[18rem] 2xl:w-[22rem] 2xl:h-[20rem]  w-[19rem] h-[14rem]  ${isHovered? 'border-[#1B99D4]' : 'border-[#444D61]'}`}  onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-full h-full flex flex-col items-center justify-center md:gap-2 gap-1">


            <div className='h-[10%] 2xl:h-[15%] px-3 flex items-center w-full font-RobotoBold font-bold text-[#1B99D4] text-left text-[1rem] md:text-xl 2xl:text-2xl mb-4 md:my-4'>{props.name}</div>
            <div className='  w-full px-3 flex flex-wrap  justify-center font-RobotoRegular font-normal text-white text-left text-xs md:text-sm '>
           {props.content}
            </div>

            </div>
        </div>
    );
}


