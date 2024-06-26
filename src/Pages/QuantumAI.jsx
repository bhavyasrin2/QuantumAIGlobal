import React, { useState, useEffect } from 'react'
import Header from '../Components/Header';
import { BoxHover } from '../Components/BoxHover';
import Productspicture from '../Components/Productspicture';
import { products } from '../Data/Products';
import HeroSection from '../Components/HeroSection';
import TitleContent from '../Components/TitleContent';
import Footer from "../Components/Footer"
import Form from '../Components/Form';
import { generateSvgDataUrl } from "../Components/Dimensions";
import BackgroundGradient from '../Images/BackgroundGradient.png'
import BackgroundGradientSmall from '../Images/BackgroundGradientSmall.png'





export default function QuantumAI() {
 
  
  const [backgroundImage, setBackgroundImage] = useState(``);

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth < 640) {
        setBackgroundImage(`url(${BackgroundGradientSmall})`);
      } else {
        setBackgroundImage(`url(${BackgroundGradient})`);
      }
    };

    // Set initial background image
    updateBackgroundImage();

    // Update background image on window resize
    window.addEventListener('resize', updateBackgroundImage);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateBackgroundImage);
  }, []);

 
 
 
  return (
   
    
    <div className='w-full  flex flex-col gap-0 items-center justify-center bg-black'>
      <div className='w-full width flex flex-col gap-0 items-center justify-center bg-contain bg-repeat'  style={{  backgroundImage: backgroundImage }}>
      


      <Header id={3} />

      <div className='w-full h-[30rem] '>

        <HeroSection title1="Explore Quantum AI's"
          title2="Cutting-Edge Products" content="Quantum AI Global, we value your input, inquiries, and feedback. Our mission is to foster collaboration and innovation, and your communication plays a vital role in achieving that. Whether you have questions about our cutting-edge quantum technologies, want to explore partnership opportunities, or simply want to get in touch, we're here to listen." />
      </div>
      <div className="w-full  flex flex-col items-center justify-center gap-6 ">
        <div className="w-full hidden md:block pb-5">

          <Productspicture />
        </div>
        <div className='w-full width md:px-10 pt-5 flex flex-col items-center justify-center gap-2'>
          <TitleContent title="We build for future" content="All our algorithms are designed with a vision of future in quantum space and are scalable, able to solve problems that are too big or too difficult for current technologies." />
          <div className="max-w-5xl  mx-auto px-8">
            <BoxHover items={products} />
          </div>
        </div>
        <div className='w-full width flex flex-col items-center justify-center gap-2'>
          
          <Form/>
        </div>
       
        <Footer showpage={false} /> 
      </div>
      </div>
    </div>



  );
}
