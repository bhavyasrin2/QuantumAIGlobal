import React from 'react';
import Simplebigboxcomponent from '../Components/Simplebigboxcomponent';
import { partnerssimpledata } from '../Data/Partners';

export default function SimpleBoxContainer() {
  return (
    <div  className="flex flex-col items-center justify-center md:py-10  py-7 ">
    <div className='relative sm:w-full width  '>
      <div className="flex flex-wrap max-w-full md:gap-5 gap-4 items-center justify-center  cursor-pointer px-3">
        {partnerssimpledata.map((item) => (
          <div  key={item.id} className="flex-item">
            <Simplebigboxcomponent
              name={item.name}
              content={item.content}

            />
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
