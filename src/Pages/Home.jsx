import React, { useState, useEffect } from 'react'
import Header from '../Components/Header';
import Footer from "../Components/Footer"
import { generateSvgDataUrl } from "../Components/Dimensions";
import { MainHerosection } from '../Components/HeroSection';
import QSleeveImage from "../Images/videothumbnail.jpg";
import QSleeveVideo from "../Videos/QSleeveVideo.mp4";
import TitleContent from '../Components/TitleContent';
import Partnerslogocontainer from '../Components/Partnerslogocontainer';
import Form from '../Components/Form';
import { homepagebox } from '../Data/Aboutus';
import { HomeBoxHover } from '../Components/BoxHover';
import global from '../../src/Images/globe.png';
import BackgroundGradient from '../Images/BackgroundGradient.png'
import BackgroundGradientSmall from '../Images/BackgroundGradientSmall.png'







export default function Home() {
  // const backgroundImageBig = generateSvgDataUrl("#060606", 70, 70);
  // const backgroundImageSmall = generateSvgDataUrl("#060606", 50, 50);
  // const [backgroundImage, setBackgroundImage] = useState(backgroundImageSmall);
  const [toggle, setToggle] = useState(false);

  
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

  // useEffect(() => {
  //   const updateBackgroundImage = () => {
  //     const screenWidth = window.innerWidth;

  //     if (screenWidth >= 1536) {
  //       setBackgroundImage(backgroundImageBig);
  //     } else {
  //       setBackgroundImage(backgroundImageSmall);
  //     }
  //   };

  //   updateBackgroundImage();

  // }, []);
  const handleToggle = () => {
    setToggle(!toggle);
  };




  return (
    <div className='w-full  flex flex-col gap-0 items-center justify-center bg-black'>
      <div className='w-full width flex flex-col gap-0 items-center justify-center bg-contain bg-repeat'  style={{  backgroundImage: backgroundImage }}>


      <Header id={1} />

      <div className='w-full h-[25rem] '>
        <MainHerosection title1="Welcome To"
          title2="Quantum AI" content="Leading the way in Quantum & AI Innovations." />
      </div>
      <div className='w-full width flex flex-col items-center justify-center md:px-10 gap-6 mb-10 relative'>
        <div className='w-full h-auto md:h-[40rem] p-3 width grid md:grid-cols-2 justify-items-center   items-center  '>
          <div className='w-[90%] h-full flex flex-col justify-center items-center   p-3'>
            <div className='w-full  flex flex-col items-center justify-center gap-1'>

              <div className='w-full  text-left text-[1.5rem] md:text-[2rem] 2xl:text-[2.3rem] font-RobotoBold text-white leading-tight px-3'>The Easiest Way To</div> <div className='w-full  text-left text-[1.5rem] md:text-[2rem] 2xl:text-[2.3rem] font-RobotoBold wordGradient leading-tight px-3'>Secure Your Data</div>
            </div>
            <div className='w-full text-white text-left font-RobotoRegular text-xs md:text-sm px-3'>Lorem ipsum dolor sit amet consectetur. Aliquam mi sapien ut vel. Lacus tellus velit sed senectus. Tellus vitae mi sapien ante. Ultricies gravida pretium adipiscing amet.
            </div>
            <div className='w-full  z-10  px-3'>
              <HomeBoxHover items={homepagebox} />
            </div>




          </div>
          <img src={global} className='w-[32.75rem] h-[31.31rem] object-contain'>
          </img>
        </div>

        <div className="absolute -z-2 left-1/2 top-[60%] transform -translate-x-1/2 -translate-y-1/2 inset-0 md:w-[80%] md:h-[12rem]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(70,196,255,0.2), transparent )",
            filter: "blur(70px)",
          }}
        ></div>
      </div>

      <div className="w-full width h-[25rem] md:h-[35rem] flex items-center  videoBackground justify-center py-3 my-6 ">
        <video controls autoPlay={toggle} muted className="w-full h-[20rem] md:w-[60rem] md:h-[30rem] object-contain" poster={QSleeveImage} onClick={handleToggle}>
          <source src={QSleeveVideo} type="video/mp4" />

        </video>
      </div>
      <div className='w-full width md:px-10 pt-5 flex flex-col items-center justify-center my-10 gap-2'>
        <TitleContent title="Partners" content="We have established valuable partnerships with a wide range of industry experts, enabling us to deliver exceptional solutions to our clients by leveraging their expertise and innovative approaches." />
        <div className="mx-auto  md:px-5 2xl:px-8">
          <Partnerslogocontainer />
        </div>
      </div>
      <div className='w-full width flex flex-col items-center justify-center mb-10 gap-2'>

        <Form />
      </div>

      <Footer showpage={true} />
    </div>
    </div>




  );
}
