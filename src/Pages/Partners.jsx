import React, { useState, useEffect } from 'react'
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import TitleContent from '../Components/TitleContent';
import Footer from "../Components/Footer"
import { generateSvgDataUrl } from "../Components/Dimensions";
import SimpleBoxContainer from '../Components/SimpleBoxContainer';
import Partnerslogocontainer from '../Components/Partnerslogocontainer';
import BackgroundGradient from '../Images/BackgroundGradient.png'
import BackgroundGradientSmall from '../Images/BackgroundGradientSmall.png'







export default function Partners() {
 
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


      <Header id={5} />
      <div className='w-full h-[30rem] '>

        <HeroSection title1="Elevating Possibilities Together "
          title2="Our Trusted Partnerships" content="At Quantum.ai, we value your input, inquiries, and feedback. Our mission is to foster collaboration and innovation, and your communication plays a vital role in achieving that. Whether you have questions about our cutting-edge quantum technologies, want to explore partnership opportunities, or simply want to get in touch, we're here to listen." />
      </div>
      <div className='w-full width md:px-10 pt-5 flex flex-col items-center justify-center gap-2'>
        <TitleContent title="Partners" content="We have established valuable partnerships with a wide range of industry experts, enabling us to deliver exceptional solutions to our clients by leveraging their expertise and innovative approaches." />
        <div className="mx-auto  md:px-5 2xl:px-8">
          <Partnerslogocontainer />
        </div>
      </div>
      <div className='w-full width md:px-10 py-10 flex flex-col items-center justify-center gap-2'>
      <div className="w-[90%] md:w-full flex flex-col items-center justify-center">
            <div className="w-full  text-center  font-RobotoBold  text-white text-[1.25rem] md:text-[2.3rem]">
            Check what our
            </div>
            <div className="w-full  font-RobotoBold  wordGradient text-[1.25rem] md:text-[2.3rem] text-center">
            Clients say about us
            </div>
            <p className="w-full max-w-xl text-center text-white font-RobotoRegular text-xs md:text-sm mt-5">
          Our clients' testimonials showcase the real-world impact of our products and services.
          </p>
          </div>
         
      
      
        <div className="w-full  mx-auto">
          <SimpleBoxContainer />
        </div>
      </div>
      <Footer showpage={false} />
    </div>
    </div>




  );
}
