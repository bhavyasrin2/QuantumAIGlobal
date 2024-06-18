import React, { useRef, useEffect } from 'react'
import Logocomponent from './Logocomponent'
import { logodata } from '../Data/Partners';


export default function Partnerslogocontainer() {

  return (
   



      <div className="relative w-full flex">
        <div
          className="flex flex-wrap max-w-full mx-auto items-center justify-center gap-5  md:py-8 py-5 cursor-pointer"

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
      </div>
  )
}
