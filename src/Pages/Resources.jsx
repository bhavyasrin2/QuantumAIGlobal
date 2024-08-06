import React, { useState, useEffect } from 'react'
import Header from '../Components/Header';
import Footer from "../Components/Footer"
import { generateSvgDataUrl } from "../Components/Dimensions";
import HeroSection from '../Components/HeroSection';
import TitleContent from '../Components/TitleContent';
import Whitepapersverticalcontainer from '../Components/Whitepapersverticalcontainer';
import Profilecomponent from '../Components/Profilecomponent';
import BackgroundGradient from '../Images/BackgroundGradient.png'
import BackgroundGradientSmall from '../Images/BackgroundGradientSmall.png';
import Publicationsverticalcontainer from '../Components/Publicationsverticalcontainer';







export default function Resources() {
  const [backgroundImage, setBackgroundImage] = useState(``);

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth < 640) {
        setBackgroundImage(`url(${BackgroundGradientSmall})`);
      } else {
        setBackgroundImage(`url(${BackgroundGradient})`);
      }
    };

    updateBackgroundImage();
    window.addEventListener('resize', updateBackgroundImage);
    return () => window.removeEventListener('resize', updateBackgroundImage);
  }, []);



  return (
    <div className='w-full  flex flex-col gap-0 items-center justify-center bg-black'>
      <div className='w-full width flex flex-col gap-0 items-center justify-center bg-contain bg-repeat'  style={{  backgroundImage: backgroundImage }}>


      <Header id={7} />
      <div className='w-full h-[30rem]  '>

        <HeroSection title1="Exploring Insights"
          title2="and Idea" content="At Quantum.ai, we value your input, inquiries, and feedback. Our mission is to foster collaboration and innovation, and your communication plays a vital role in achieving that. Whether you have questions about our cutting-edge quantum technologies, want to explore partnership opportunities, or simply want to get in touch, we're here to listen." />
      </div>
      <div className='w-full width  md:px-10 pt-5 flex flex-col items-center justify-center gap-2'>
        <TitleContent title="Discover Quantum AI's White Papers" content="At Quantum AI, we're dedicated to harnessing the potential of quantum computing and artificial intelligence across a range of categories. From finance and healthcare to manufacturing and logistics, we're pioneering solutions that transform industries and tackle complex challenges. Explore these diverse categories to see how quantum technology can drive efficiency and innovation. Join us in exploring the possibilities and unlocking the potential of quantum technology in various fields." />
        <div className="mx-auto  md:px-5 2xl:px-8">
          <Whitepapersverticalcontainer/>
        </div>
      </div>
      <div className='w-full width  md:px-10 pt-5 flex flex-col items-center justify-center gap-2'>
        <TitleContent title="Publications" content="" />
        <div className="mx-auto  md:px-5 2xl:px-8">
          <Publicationsverticalcontainer/>
        </div>
      </div>
     

      <Footer showpage={false} />
    </div>
    </div>




  );
}
