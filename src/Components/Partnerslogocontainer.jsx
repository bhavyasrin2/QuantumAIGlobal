import React, { useRef, useEffect } from 'react'
import Logocomponent from './Logocomponent'
import { logodata } from '../Data/Partners';


export default function Partnerslogocontainer() {

  return (
   



      <div className="relative w-full flex">
        <div
          className="flex flex-wrap max-w-full mx-auto items-center  justify-center md:gap-20 gap-5  md:px-32  md:py-8 py-5 cursor-pointer"

        >
          {logodata.map((item) => (
            <div key={item.id} >
              <Logocomponent
                id={item.id}
                img={item.img}
              />
            </div>
          ))}
        </div>
        <div
        className="absolute -z-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 md:w-[28rem] md:h-[12rem]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(77,118,244,0.4), transparent )",
          filter: "blur(70px)",
        }}
      ></div>
      </div>
  )
}
