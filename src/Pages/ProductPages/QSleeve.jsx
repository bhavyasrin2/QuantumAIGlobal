import React, { useState, useEffect } from "react";
import { generateSvgDataUrl } from "../../Components/Dimensions";
import ProductHeader from "../../Components/ProductsPages/ProductHeader";
import ProductsHeroSection from "../../Components/ProductsPages/ProductsHeroSection";
import { Scroll } from "../../Components/ProductsPages/ScrollSection";
import { BoxHover } from '../../Components/BoxHover';
import { products } from '../../Data/Products';

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
      <div className="w-full h-[24rem]">
        <ProductsHeroSection
          title1="Quantum-safe data "
          title2="protection made easy"
          content="Future-proof your online security with our VPN’s quantum-safe technology, keeping your data safe from even the most advanced attacks. "
        />
      </div>
     <Scroll/>
     <div className="flex flex-col width  items-center justify-center pt-16 pb-10">
      <div className="font-RobotoBold  wordGradient text-[2rem] 2xl:text-[3rem]">ARCHITECTURE</div>
     <BoxHover items={products}/>
     </div>
    </div>
  );
}
