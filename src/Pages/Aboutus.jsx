import React, { useState, useEffect } from 'react'
import Header from '../Components/Header';
import Footer from "../Components/Footer"
import HeroSection from '../Components/HeroSection';
import { generateSvgDataUrl } from "../Components/Dimensions";
import QSleeveImage from "../Images/videothumbnail.jpg";
import QSleeveVideo from "../Videos/QSleeveVideo.mp4";
import TitleContent from '../Components/TitleContent';
import Simplebigboxcomponent from '../Components/Simplebigboxcomponent';
import BigboxComponent from '../Components/BigboxComponent';
import { aboutdata, portfoliodata } from '../Data/Aboutus';
import {coreteamprofile ,advisoryprofile} from '../Data/Profiles';
import global from '../../src/Images/globe.png';
import arrow1 from '../../src/Images/arrow1.png';
import arrow2 from '../../src/Images/arrow2.png';
import Profilecomponent from '../Components/Profilecomponent';
import VideoComponent from '../Components/VideoComponent';
import BackgroundGradient from '../Images/BackgroundGradient.png'
import BackgroundGradientSmall from '../Images/BackgroundGradientSmall.png'






export default function Aboutus() {
  // const backgroundImageBig = generateSvgDataUrl("#060606", 70, 70);
  // const backgroundImageSmall = generateSvgDataUrl("#060606", 50, 50);
  // const [backgroundImage, setBackgroundImage] = useState(backgroundImageSmall);
  const [backgroundImage, setBackgroundImage] = useState(``);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const updateBackgroundImage = () => {
      const screenWidth = window.innerWidth;

      if (window.innerWidth < 640) {
        setBackgroundImage(`url(${BackgroundGradientSmall})`);
      } else {
        setBackgroundImage(`url(${BackgroundGradient})`);
      }
    };

    updateBackgroundImage();

  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };




  return (
    <div className='w-full  flex flex-col gap-0 items-center justify-center bg-black'>
      <div className='w-full width flex flex-col gap-0 items-center justify-center bg-contain bg-repeat'  style={{  backgroundImage: backgroundImage }}>


      <Header id={2} />
      <div className='w-full h-[30rem] '>

        <HeroSection title1="Crafting Tomorrow's"
          title2="Innovations Today" content="At Quantum AI Global, we lead the quantum computing revolution, fusing quantum technology with AI innovation. Our mission is to redefine industries by solving complex challenges, and our experts are at the forefront of this transformation. Join us as we shape the future of computing and artificial intelligence." />
      </div>
      <div className='w-full width flex flex-col items-center justify-center  md:px-10 2xl:px-20 gap-6 mb-10 relative'>
        <div className='w-full h-auto md:h-[33rem] p-3 width grid md:grid-cols-2 justify-items-center   items-center  '>
          <div className='w-[90%] h-full flex flex-col justify-center items-center   p-3'>
            <div className='w-full  flex flex-col items-center justify-center gap-1'>
              <div className='w-full  text-left text-xs md:text-sm  font-RobotoBold text-white  px-3'>Discover Our Quantum Journey </div>
              <div className='w-full  text-left text-[1.5rem] md:text-[2rem] 2xl:text-[2.3rem] font-RobotoBold text-white leading-tight px-3'>Pioneering Innovation at the Intersection of <span className='wordGradient'>Quantum Computing and AI.</span></div>
            </div>
            <div className='w-full text-white text-left font-RobotoRegular text-xs md:text-sm px-3'>Whether you're new to quantum and AI tech or want to elevate your current operations, we're here to assist. Our experts offer tailored solutions, training, and support to maximize the benefits of these cutting-edge technologies. We lead in quantum and AI R&D, dedicated to delivering innovative and practical products and services. Our mission is to empower businesses to leverage these technologies for growth, efficiency, and staying ahead of the curve.
            </div>




          </div>
          <img src={global} className='w-[32.75rem] h-[31.31rem] object-contain'>
          </img>
        </div>
        <div className='w-full width  z-10  md:px-20'>
          <div className="flex flex-wrap max-w-full md:gap-5 gap-4 items-center justify-center  cursor-pointer px-3">
            {aboutdata.map((item) => (
              <div key={item.id} className="flex-item">
                <Simplebigboxcomponent
                  name={item.name}
                  content={item.content}

                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -z-2 left-1/2 top-[60%] transform -translate-x-1/2 -translate-y-1/2 inset-0 md:w-[80%] md:h-[12rem]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(70,196,255,0.2), transparent )",
            filter: "blur(70px)",
          }}
        ></div>
      </div>
      <div className='w-full width  flex flex-col items-center justify-center my-10 gap-6'>
        <TitleContent title="Our Journey" content="Founded by a team of experts in Quantum computing, Al and related fields, Quantum Al Global is committed to delivering innovative solutions that meet the unique needs of our clients. Our team combines deep expertise in quantum and AI technologies with a passion for solving complex problems and delivering results. Our team of experts combines deep expertise in quantum computing and artificial intelligence to deliver customized solutions for our clients." />
       <VideoComponent image={QSleeveImage} video={QSleeveVideo}/>
      </div>
      <div className='w-full width  flex flex-col items-center justify-center my-10 gap-6 relative '>
        <TitleContent title="Our portfolio of products includes" content="" />




        <div className=" flex flex-col items-center justify-center  md:py-10 z-10 py-7 ">
          <div className='relative md:w-[80rem] md:h-[20rem] width  py-5 '>
            <div className="flex flex-wrap max-w-full md:gap-5 gap-4 items-center justify-center  cursor-pointer px-3">
              {portfoliodata.map((item) => (
                <div key={item.id} className="flex-item">
                  <BigboxComponent
                    name={item.name}
                    content={item.content}

                  />
                </div>
              ))}
            </div>
            <img src={arrow1} className='absolute -z-2 left-[32%] -top-[10%]  inset-0 w-[5.31rem] h-[3.25rem] hidden sm:block'></img>
            <img src={arrow2} className='absolute -z-2 left-[62%]  top-[88%]  inset-0 w-[5.31rem] h-[3.25rem] hidden sm:block'></img>
          </div>
        </div>
        <div className="absolute -z-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 md:w-[80%] md:h-[12rem]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(70,196,255,0.3), transparent )",
            filter: "blur(70px)",
          }}
        ></div>
      </div>

      <div className='w-full width  flex flex-col items-center justify-center my-10 gap-6 relative '>
      <TitleContent title="Meet Our Team" content="At Quantum AI Global, our vision is to usher in a new era of quantum-powered intelligence, where the potential of quantum computing meets the limitless possibilities of artificial intelligence. We aspire to reshape industries, solve complex challenges, and drive innovation, creating a future where quantum and AI technologies empower individuals and organizations to achieve extraordinary feats." />

      <div className='w-full width flex flex-col items-center justify-center gap-2'>
      <TitleContent title="Core Team" content="" />

      <div className="flex flex-wrap md:w-[80rem] items-center justify-center md:px-10  cursor-pointer px-3">
              {coreteamprofile.map((item) => (
                <div key={item.id} className="flex-item">
                  <Profilecomponent
                    name={item.name}
                    img={item.img}
                    linkedin={item. linkedin}
                    title = {item.title}

                  />
                </div>
              ))}
            </div>
      </div>
      <div className='w-full width flex flex-col items-center justify-center gap-2'>
      <TitleContent title="Advisory" content="" />

      <div className="flex flex-wrap md:w-[80rem] items-center justify-center md:px-10  cursor-pointer px-3">
              {advisoryprofile.map((item) => (
                <div key={item.id} className="flex-item">
                  <Profilecomponent
                    name={item.name}
                    img={item.img}
                    linkedin={item.linkedin}
                    title = {item.title}

                  />
                </div>
              ))}
            </div>
      </div>
     
      </div>

      <Footer showpage={true} />
    </div>
    </div>




  );
}
