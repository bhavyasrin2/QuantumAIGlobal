import React, { useState, useEffect, useRef } from "react";
import { generateSvgDataUrl } from "../../Components/Dimensions";
import ProductHeader from "../../Components/ProductsPages/ProductHeader";
import ProductsHeroSection from "../../Components/ProductsPages/ProductsHeroSection";
import { Scroll } from "../../Components/ProductsPages/ScrollSection";
import { keyfeatures, servicesData, servicestackdata } from "../../Data/ProductPages/Data";
import ProductFooter from "../../Components/ProductsPages/ProductFooter";
import { FeatureHover } from "../../Components/ProductsPages/FeatureHover";
import RequestDemo from "../../Components/ProductsPages/RequestDemo";
import { ServicesBox } from "../../Components/ProductsPages/ServicesBox";
import QSleeveImage from "../../Images/videothumbnail.jpg";
import QSleeveVideo from "../../Videos/QSleeveVideo.mp4";
import IframeWithPoster from "../../Components/ProductsPages/VideoSection";
import CardStack from "../../Components/ProductsPages/ServiceStack";
import { Corousel } from "../../Components/ProductsPages/HorizontalCorousel";
import BackgroundGradient from '../../Images/BackgroundGradient.png'
import BackgroundGradientSmall from '../../Images/BackgroundGradientSmall.png'
import VideoComponent from "../../Components/VideoComponent";


export default function QSleeve() {
  const requestDemoRef = useRef(null);
  const architectureRef = useRef(null);

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

  const scrollToRequestDemo = () => {
    requestDemoRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToArchitecture = () => {
    architectureRef.current.scrollIntoView({ behavior: 'smooth' });
  };




  return (
    <div className='w-full  flex flex-col gap-0 items-center justify-center bg-black'>
      <div className='w-full width flex flex-col gap-0 items-center justify-center bg-contain bg-repeat'  style={{  backgroundImage: backgroundImage }}>
      <ProductHeader  scrollToRequestDemo={scrollToRequestDemo}/>
      <div className="w-full h-[30rem] ">
        <ProductsHeroSection
          title1="Quantum-safe data "
          title2="protection made easy"
          content="Future-proof your online security with our VPN’s quantum-safe technology, keeping your data safe from even the most advanced attacks. "
          scrollToArchitecture={scrollToArchitecture}
         
        />
      </div>
      <div className="w-full h-[60vh]  width  flex-col items-center justify-center  hidden">
        <Scroll />
      </div>
      <div className="w-full  width flex flex-col items-center justify-center  ">
       
      <img className="w-[21.5rem] h-[15.1rem] md:w-[55.5rem] md:h-[42.5rem] object-contain rounded-lg md:rounded-2xl" src={require("../../../src/Images/QSleeve Dashboard.png")}></img>
      
      </div>
      <div className="w-full width px-5 md:px-10 mt-14 md:mt-28 flex flex-col items-center justify-center  gap-1">

        <img className="md:w-[64rem] md:h-[30rem] object-contain " src={require("../../../src/Images/QSleeveDesign.png")}></img>
      </div>
      <div className="w-full width px-5 md:px-10 mt-14 md:mt-24 flex flex-col items-center justify-center  gap-16"  ref={architectureRef}>
        <div className="font-RobotoBold  wordGradient text-[1.5rem] md:text-[2rem] 2xl:text-[2.3rem]">
          ARCHITECTURE
        </div>
        <img className="md:w-[64rem] md:h-[30rem] object-contain" src={require("../../../src/Images/QSleeveArchitecture.png")}></img>
      </div>
      <div className="w-full width md:px-10 pt-28 flex flex-col items-center justify-center  gap-1">
        <div className="font-RobotoBold  wordGradient text-[1.5rem] md:text-[2rem] 2xl:text-[2.3rem]">
          KEY FEATURES
        </div>
        <div className="max-w-5xl  mx-auto px-3 md:px-8">
          <FeatureHover items={keyfeatures.QSleeve} />
        </div>
      </div>
      <div className=" relative w-full width  mt-10 my-10 flex flex-col items-center justify-center  gap-1 ">
        <div className="font-RobotoBold  wordGradient text-[1.5rem] md:text-[2rem] 2xl:text-[2.3rem]">
          SERVICES
        </div>
        <div className='w-full h-auto md:h-[30rem] my-10 width gap-10 md:gap-0  flex md:flex-row flex-col justify-center items-center md:px-10 '>
          <div className='h-full w-[90%] md:w-[30%] flex flex-col justify-center items-center   py-3 md:pl-20 '>
            <div className='w-full  flex flex-col items-center justify-center gap-1'>

              <div className='w-full  text-left text-[1.5rem] md:text-[2rem] 2xl:text-[2.3rem] font-RobotoBold text-white leading-tight px-3'>The Easiest Way To</div> <div className='w-full  text-left text-[1.5rem] md:text-[2rem] 2xl:text-[2.3rem] font-RobotoBold wordGradient leading-tight px-3'>Secure Your Data</div>
            </div>
            <div className='w-full text-white text-left font-RobotoRegular text-xs md:text-sm px-3'>Lorem ipsum dolor sit amet consectetur. Aliquam mi sapien ut vel. Lacus tellus velit sed senectus. Tellus vitae mi sapien ante. Ultricies gravida pretium adipiscing amet.
            </div></div>
          <div className="h-full flex items-center justify-center w-[90%] md:w-[50%]">
          <Corousel Data={servicestackdata}/>
            {/* <CardStack items={servicestackdata} /> */}
          </div>
          <div className="absolute -z-2 left-1/2 top-[60%] transform -translate-x-1/2 -translate-y-1/2 inset-0 md:w-[80%] md:h-[12rem]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(70,196,255,0.2), transparent )",
              filter: "blur(70px)",
            }}
          ></div>
        </div>

      </div>
      <VideoComponent image={QSleeveImage} video={QSleeveVideo}/>
      <div className='w-full width flex flex-col items-center justify-center gap-2 '  ref={requestDemoRef}>

        <RequestDemo />
      </div>
        {/* <div className="w-full h-[33rem]">
            <IframeWithPoster
                src="https://www.youtube.com/embed/ldmpb0k5v7E?si=USYWzTZkxH2JxKxk"
                poster={QSleeveImage}
                allow="accelerometer; autoplay; controls; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div> */}
      <ProductFooter />
    </div>
    </div>
  );
}
