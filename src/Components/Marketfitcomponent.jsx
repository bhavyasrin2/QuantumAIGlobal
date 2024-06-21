import React from 'react'

export default function Marketfitcomponent(props) {
    return (
        <div

            className={`w-[9rem] h-[10rem]  bg-black border-[0.03rem]  border-slate-700 rounded-[2rem] flex flex-col  items-center justify-center  gap-2 2xl:gap-4 px-2 py-3   hover:border-[#1B99D4]`}

        >
            <img src={props.img} alt={props.name} className={` w-[7.432rem] h-[8.97rem]  object-fill `} />



        </div>
    )
}

