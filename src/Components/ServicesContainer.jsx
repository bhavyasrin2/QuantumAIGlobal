import React,{useState} from 'react'
import Boxcomponent from './Boxcomponent';
import { servicesdata, benefitservicesdata} from '../Data/Services';


export  function Serviceslist() {
 
    return (
        <div className="relative w-full">
      <div
        className="flex flex-wrap xl:max-w-[100%]  mx-auto items-center justify-center gap-4 my-10 md:px-16 md:py-10 2xl:px-20 px-3 cursor-pointer"
        
      >
        {servicesdata.map((item) => (
          <div key={item.id} >   
            <Boxcomponent
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


export  function Benefitslist() {
 
  return (
      <div className="relative w-full">
    <div
      className="flex flex-wrap xl:max-w-[100%]  mx-auto items-center justify-center gap-4 md:px-16 my-10 md:py-10 2xl:px-20 px-3 cursor-pointer"
      
    >
      {benefitservicesdata.map((item) => (
        <div key={item.id} >   
          <Boxcomponent
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

