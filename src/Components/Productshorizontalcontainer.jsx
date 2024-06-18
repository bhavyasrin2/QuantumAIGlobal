import React from 'react'
import { patentproductsdata } from '../Data/Products';
import Productshorizontalcomponent from './Productshorizontalcomponent';


export default function Productshorizontalcontainer() {
    return (
        <div className="relative w-full">
      <div
        className="flex flex-wrap max-w-[90%] mx-auto items-center justify-center gap-10 md:px-20 md:py-10 py-7 px-3 "
        
      >
        {patentproductsdata.map((item) => (
          <div key={item.id} >   
            <Productshorizontalcomponent
            id={item.id}
          
              img={item.img}
              name={item.name}
              content={item.content}
              patent={item.patent}
            />
          </div>
        ))}
      </div>
    </div>
      );
}
