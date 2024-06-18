import React, { useState, useEffect } from 'react'
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import TitleContent from '../Components/TitleContent';
import Footer from "../Components/Footer"
import { generateSvgDataUrl } from "../Components/Dimensions";
import SimpleBoxContainer from '../Components/SimpleBoxContainer';
import Partnerslogocontainer from '../Components/Partnerslogocontainer';







export default function Partners() {
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


      <Header id={5} />
      <div className='w-full md:h-[30rem] '>

        <HeroSection title1="Elevating Possibilities Together "
          title2="Our Trusted Partnerships" content="At Quantum.ai, we value your input, inquiries, and feedback. Our mission is to foster collaboration and innovation, and your communication plays a vital role in achieving that. Whether you have questions about our cutting-edge quantum technologies, want to explore partnership opportunities, or simply want to get in touch, we're here to listen." />
      </div>
      <div className='w-full width px-10 pt-5 flex flex-col items-center justify-center gap-2'>
        <TitleContent title="Partners" content="We have established valuable partnerships with a wide range of industry experts, enabling us to deliver exceptional solutions to our clients by leveraging their expertise and innovative approaches." />
        <div className="w-full  mx-auto">
          <Partnerslogocontainer />
        </div>
      </div>
      <div className='w-full width px-10 pt-5 flex flex-col items-center justify-center gap-2'>
        <TitleContent title="Partners" content="We have established valuable partnerships with a wide range of industry experts, enabling us to deliver exceptional solutions to our clients by leveraging their expertise and innovative approaches." />
        <div className="w-full  mx-auto">
          <SimpleBoxContainer />
        </div>
      </div>
      <Footer showpage={false} />
    </div>




  );
}
