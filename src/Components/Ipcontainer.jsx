import React from 'react'
import { ipdata } from '../Data/Products';
import Productshorizontalnocomponent from './Productshorizontalnocomponent';

export default function Ipcontainer() {
    return (
        <div className="relative w-full">
      <div
        className="flex flex-wrap max-w-[90%] mx-auto items-center justify-center gap-10 md:px-20 md:py-10 px-3 cursor-pointer"
        
      >
        {ipdata.map((item) => (
          <div key={item.id} >   
            <Productshorizontalnocomponent
            id={item.id}
              img={item.img}
              name={item.name}
              content={item.content}
            />
          </div>
        ))}
      </div>
    </div>
      );
}
