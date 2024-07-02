import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import { Serviceslist, Benefitslist } from '../Components/ServicesContainer';
import TitleContent from '../Components/TitleContent';
import { generateSvgDataUrl } from '../Components/Dimensions';
import BackgroundGradient from '../Images/BackgroundGradient.png'
import BackgroundGradientSmall from '../Images/BackgroundGradientSmall.png'

export default function Services() {
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


      <Header id={4} />
      <div className='w-full h-[30rem] '>

        <HeroSection title1="Unmatched Services"
          title2="Unmatched Excellence" content="At Quantum.ai, we value your input, inquiries, and feedback. Our mission is to foster collaboration and innovation, and your communication plays a vital role in achieving that. Whether you have questions about our cutting-edge quantum technologies, want to explore partnership opportunities, or simply want to get in touch, we're here to listen." />
      </div>
      <div className='w-full width md:px-10 pt-5 flex flex-col items-center justify-center gap-2'>
        <TitleContent title="Services" content="Quantum Al Global offers a range of services designed to help businesses and organizations harness the full potential of quantum and artificial intelligence technology." />
        <div className="w-full  mx-auto">
          <Serviceslist />
        </div>
      </div>
      <div className='w-full width md:px-10 pt-5 flex flex-col items-center justify-center gap-2'>
        <TitleContent title="Benefits of Our Services" content="At Quantum Al Global, we believe in the transformative power of quantum and Al technology, and we are dedicated to delivering innovative solutions that help businesses transform and thrive. Contact us today to learn more about our services and how we can help you harness the full potential of these exciting technologies." />
        <div className="w-full  mx-auto">
          <Benefitslist />
        </div>
      </div>
      <Footer showpage={false} />
    </div>
    </div>
  )
}
