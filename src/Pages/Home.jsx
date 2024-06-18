import React, { useState, useEffect } from 'react'
import Header from '../Components/Header';
import Footer from "../Components/Footer"
import { generateSvgDataUrl } from "../Components/Dimensions";
import { Corousel } from '../Components/HorizontalCorousel';







export default function Home() {
  const backgroundImageBig = generateSvgDataUrl("#060606",70,70);
  const backgroundImageSmall = generateSvgDataUrl("#060606",50,50);
  const [backgroundImage, setBackgroundImage] = useState(backgroundImageSmall);

  useEffect(() => {
    const updateBackgroundImage = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1536) {
        setBackgroundImage(backgroundImageBig);
      } else {
        setBackgroundImage(backgroundImageSmall);
      }
    };

    updateBackgroundImage();
    
  }, []);
  
 
 
  return (
    <div className='w-full  flex flex-col gap-0 items-center justify-center  bg-black'
    style={{ backgroundImage: `url(${backgroundImage})` }}>


      <Header id={1} />

     <div className='w-full width flex items-center justify-center'>
      <Corousel/>
      </div>
        <Footer showpage={true} /> 
      </div>
    



  );
}
