import React, { useState, useEffect } from 'react'
import Header from '../Components/Header';
import Footer from "../Components/Footer"
import HeroSection from '../Components/HeroSection';
import { generateSvgDataUrl } from "../Components/Dimensions";
import QSleeveImage from "../Images/videothumbnail.jpg";
import QSleeveVideo from "../Videos/QSleeveVideo.mp4";
import TitleContent from '../Components/TitleContent';
import Simplebigboxcomponent from '../Components/Simplebigboxcomponent';
import { portfoliodata } from '../Data/Aboutus';







export default function Aboutus() {
  const backgroundImageBig = generateSvgDataUrl("#060606", 70, 70);
  const backgroundImageSmall = generateSvgDataUrl("#060606", 50, 50);
  const [backgroundImage, setBackgroundImage] = useState(backgroundImageSmall);
  const [toggle, setToggle] = useState(false);

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

  const handleToggle = () => {
    setToggle(!toggle);
  };




  return (
    <div className='w-full  flex flex-col gap-0 items-center justify-center  bg-black'
      style={{ backgroundImage: `url(${backgroundImage})` }}>


      <Header id={2} />
      <div className='w-full h-[30rem] '>

        <HeroSection title1="Crafting Tomorrow's"
          title2="
Innovations Today" content="At Quantum AI Global, we lead the quantum computing revolution, fusing quantum technology with AI innovation. Our mission is to redefine industries by solving complex challenges, and our experts are at the forefront of this transformation. Join us as we shape the future of computing and artificial intelligence." />
      </div>
      <div className='w-full width  flex flex-col items-center justify-center my-10 gap-6'>
        <TitleContent title="Our Journey" content="Founded by a team of experts in Quantum computing, Al and related fields, Quantum Al Global is committed to delivering innovative solutions that meet the unique needs of our clients. Our team combines deep expertise in quantum and AI technologies with a passion for solving complex problems and delivering results. Our team of experts combines deep expertise in quantum computing and artificial intelligence to deliver customized solutions for our clients." />
        <div className="w-full h-[25rem] md:h-[35rem] flex items-center  videoBackground justify-center py-3 my-6 ">
          <video controls autoPlay={toggle} muted className="w-full h-[20rem] md:w-[60rem] md:h-[30rem] object-contain" poster={QSleeveImage} onClick={handleToggle}>
            <source src={QSleeveVideo} type="video/mp4" />

          </video>
        </div>
      </div>
      <div className='w-full width  flex flex-col items-center justify-center my-10 gap-6'>
        <TitleContent title="Our Journey" content="Founded by a team of experts in Quantum computing, Al and related fields, Quantum Al Global is committed to delivering innovative solutions that meet the unique needs of our clients. Our team combines deep expertise in quantum and AI technologies with a passion for solving complex problems and delivering results. Our team of experts combines deep expertise in quantum computing and artificial intelligence to deliver customized solutions for our clients." />
        <div  className="flex flex-col items-center justify-center md:py-10  py-7 ">
    <div className='relative sm:w-full width  '>
      <div className="flex flex-wrap max-w-full md:gap-5 gap-4 items-center justify-center  cursor-pointer px-3">
        {portfoliodata.map((item) => (
          <div  key={item.id} className="flex-item">
            <Simplebigboxcomponent
              name={item.name}
              content={item.content}

            />
          </div>
        ))}
      </div>
    </div>
  </div>
      </div>

      <Footer showpage={true} />
    </div>




  );
}
