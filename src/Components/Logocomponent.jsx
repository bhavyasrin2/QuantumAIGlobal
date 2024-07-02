import React from 'react'

export default function Logocomponent(props) {
  return (
    <div className='buttonclass'>
    <div className='w-[8rem] h-[3.7rem] xl:w-[13.5rem] xl:h-[5rem] 2xl:w-[15rem] 2xl:h-[6rem]  flex items-center justify-center bg-[#0D0E12] shadow-lg shadow-[#d5e5ef] hover:shadow-gray-300 rounded-xl'>
        <img src={props.img} alt={props.name} className=" md:w-[8rem] md:h-[4.2rem] 2xl:[10rem] 2xl:[5.2rem] w-[6.5rem] h-[3.2rem] object-contain" />
        
      
    </div>
    </div>
  )
}
