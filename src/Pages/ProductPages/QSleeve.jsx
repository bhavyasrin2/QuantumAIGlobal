import React, { useState, useEffect } from "react";
import { generateSvgDataUrl } from "../../Components/Dimensions";
import ProductHeader from "../../Components/ProductsPages/ProductHeader";
import ProductsHeroSection from "../../Components/ProductsPages/ProductsHeroSection";
import { Scroll } from "../../Components/ProductsPages/ScrollSection";
import { keyfeatures, servicesData } from "../../Data/ProductPages/Data";
import ProductFooter from "../../Components/ProductsPages/ProductFooter";
import { FeatureHover } from "../../Components/ProductsPages/FeatureHover";
import RequestDemo from "../../Components/ProductsPages/RequestDemo";
import {ServicesBox} from "../../Components/ProductsPages/ServicesBox";

export default function QSleeve() {
  const backgroundImageBig = generateSvgDataUrl("#0E0C0C", 70, 70);
  const backgroundImageSmall = generateSvgDataUrl("#0E0C0C", 50, 50);
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
    <div
      className="w-full  flex flex-col gap-0 items-center justify-center  bg-black"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <ProductHeader />
      <div className="w-full h-[40rem]">
        <ProductsHeroSection
          title1="Quantum-safe data "
          title2="protection made easy"
          content="Future-proof your online security with our VPN’s quantum-safe technology, keeping your data safe from even the most advanced attacks. "
        />
      </div>
      <div className="w-full h-[60vh]  width flex flex-col items-center justify-center">
        <Scroll />
      </div>
      <div className="w-full width px-10 pt-28 flex flex-col items-center justify-center  gap-1">
      
        <img className="w-[64rem] h-[30rem] object-contain" src={require("../../../src/Images/QSleeveDesign.png")}></img>
      </div>
      <div className="w-full width px-10 pt-24 flex flex-col items-center justify-center  gap-10">
        <div className="font-RobotoBold  wordGradient text-[2rem] 2xl:text-[3rem]">
          ARCHITECTURE
        </div>
        <img className="w-[64rem] h-[30rem] object-contain" src={require("../../../src/Images/QSleeveArchitecture.png")}></img>
      </div>
      <div className="w-full width px-10 pt-28 flex flex-col items-center justify-center  gap-1">
        <div className="font-RobotoBold  wordGradient text-[2rem] 2xl:text-[3rem]">
          KEY FEATURES
        </div>
        <div className="max-w-5xl  mx-auto px-3 md:px-8">
          <FeatureHover items={keyfeatures.QSleeve} />
        </div>
      </div>
      <div className="w-full width px-10 pt-28 flex flex-col items-center justify-center  gap-1">
        <div className="font-RobotoBold  wordGradient text-[2rem] 2xl:text-[3rem]">
         SERVICES
        </div>
        <div className="  mx-auto px-3 md:px-8">
          <ServicesBox items={servicesData} />
        </div>
      </div>
      <div className='w-full width flex flex-col items-center justify-center gap-2'>

        <RequestDemo />
      </div>
     
   
      <ProductFooter />
    </div>
  );
}
