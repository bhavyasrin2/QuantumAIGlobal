import React, { useState, useEffect } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import Form from '../Components/Form';
import TitleContent from '../Components/TitleContent';
import { generateSvgDataUrl } from '../Components/Dimensions';

export default function Contactus() {
  const backgroundImageBig = generateSvgDataUrl("#060606", 70, 70);
  const backgroundImageSmall = generateSvgDataUrl("#060606", 50, 50);
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


      <Header id={2} />

      <div className='w-full md:h-[30rem] '>

        <HeroSection title1=""
          title2="Connect With Us" content="At Quantum.ai, we value your input, inquiries, and feedback. Our mission is to foster collaboration and innovation, and your communication plays a vital role in achieving that. Whether you have questions about our cutting-edge quantum technologies, want to explore partnership opportunities, or simply want to get in touch, we're here to listen." />
      </div>
      <div className='w-full width px-10 pt-5 flex flex-col items-center justify-center gap-2'>
        <TitleContent title="We are Happy to Assist," content="At Quantum AI Global, we are dedicated to helping organizations harness the full potential of quantum and AI technology. If you have any questions or would like to learn more about our products and services, please don’t hesitate to get in touch with us." />

        <div className="w-full h-auto relative flex sm:flex-row flex-col items-center justify-center px-5 py-5 sm:gap-10 gap-5  ">
          <div className='sm:w-[20%] w-[15rem] px-2  border-[0.06rem] border-[#444D61] flex flex-col items-center justify-center gap-1 h-[7.5rem] bg-black rounded-2xl'>


            <div className='font-opensans font-normal text-[#1B99D4] text-sm xl:text-lg md:text-[1rem]'>
              E mail
            </div>
            <div className='font-opensans font-normal text-white  text-xs md:text-sm '>
              info@thequantum.ai
            </div>
          </div>

          <div className='sm:w-[20%]  w-[15rem] px-2  border-[0.06rem] border-[#444D61] flex flex-col items-center justify-center gap-1 h-[7.5rem] bg-black rounded-2xl'>


            <div className='font-opensans font-normal text-[#1B99D4] text-sm xl:text-lg md:text-[1rem]'>
              Office Phone
            </div>
            <div className='font-opensans font-normal text-white  text-xs md:text-sm '>
              +1 (732) 227 4433
            </div>
            <div className='font-opensans font-normal text-white  text-xs md:text-sm '>+91 (812) 102 7006</div>
          </div>
          <div className='sm:w-[20%] w-[15rem] px-2 border-[0.06rem] border-[#444D61] flex flex-col items-center justify-center  gap-1 h-[7.5rem] bg-black  rounded-2xl'>


<div className='font-opensans font-normal text-[#1B99D4] text-sm xl:text-xl md:text-[1rem]'>
  Office Timings
</div>
<div className='font-opensans font-normal text-white  text-xs md:text-sm '>
  Mon – Fri : 9.00am to 6.00pm
</div>
<div className='font-opensans font-normal text-white  text-xs md:text-sm '>
  Sat : 10.00am to 5.00pm
</div>
<div className='font-opensans font-normal text-white  text-xs md:text-sm '>
  Sunday: Holiday
</div>
</div>


        </div>
       



      </div>
      <div className='w-full width flex flex-col items-center justify-center gap-2'>

        <Form />
      </div>
      <Footer showpage={true} />
    </div>
  )
}
