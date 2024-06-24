import React,{useState, useEffect} from 'react'
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Footer';
import Productshorizontalcontainer from '../Components/Productshorizontalcontainer';
import TitleContent from '../Components/TitleContent';
import Ipcontainer from '../Components/Ipcontainer';
import { generateSvgDataUrl } from '../Components/Dimensions';


export default function Ourips() {
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


      <Header id={6} />
      <div className='w-full h-[30rem] '>

        <HeroSection title1="Innovative. Exclusive."
          title2="Discover our patented products" content="At Quantum.ai, we value your input, inquiries, and feedback. Our mission is to foster collaboration and innovation, and your communication plays a vital role in achieving that. Whether you have questions about our cutting-edge quantum technologies, want to explore partnership opportunities, or simply want to get in touch, we're here to listen." />
      </div>
      <div className="w-full width px-10 pt-5 flex flex-col items-center justify-center gap-2">
          <Productshorizontalcontainer />
        </div>
        <div className='w-full width md:px-10 pt-5 flex flex-col items-center justify-center gap-4 md:gap-2'>
          <TitleContent title="" content="At Quantum Al Global, we believe in the transformative power of quantum and Al technology, and we are dedicated to delivering innovative solutions that help businesses transform and thrive. Contact us today to learn more about our services and how we can help you harness the full potential of these exciting technologies." />
          <div className="mx-auto  md:px-5 2xl:px-8">
          <Ipcontainer />
          </div>
        </div>
        <Footer showpage={false} />

    </div>
  )
}
