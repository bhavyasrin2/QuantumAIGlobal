import React, { useState, useEffect } from "react";
import { generateSvgDataUrl } from "../../Components/Dimensions";
import ProductHeader from "../../Components/ProductsPages/ProductHeader";
import ProductsHeroSection from "../../Components/ProductsPages/ProductsHeroSection";
import { Scroll } from "../../Components/ProductsPages/ScrollSection";
import { products } from "../../Data/Products";
import ProductFooter from "../../Components/ProductsPages/ProductFooter";
import { FeatureHover } from "../../Components/ProductsPages/FeatureHover";
import { Corousel } from "../../Components/ProductsPages/HorizontalCorousel";

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
      <div className="w-full width flex flex-col items-center justify-center">
        <Scroll />
      </div>
      <div className="w-full width px-10 pt-28 flex flex-col items-center justify-center  gap-1">
        <div className="font-RobotoBold  wordGradient text-[2rem] 2xl:text-[3rem]">
          ARCHITECTURE
        </div>
        <div className="max-w-5xl  mx-auto px-3 md:px-8">
          <FeatureHover items={products} />
        </div>
      </div>
      <div className="w-full width px-10 pt-16 flex flex-col items-center justify-center  gap-1">
        <div className="font-RobotoBold  wordGradient text-[2rem] 2xl:text-[3rem]">
          Services
        </div>

        <div className="w-full width px-10 flex items-center justify-end ">
          <div className="w-[25rem] flex flex-col items-center justify-start ">
            <div className="w-full flex flex-col items-center justify-center ">
              <div className="w-full flex flex-wrap items-center justify-center leading-tight text-white  md:text-5xl 2xl:text-6xl text-3xl   font-RobotoBold">
                {" "}
                Quantum Revolution at
              </div>
              <div className="w-full flex flex-wrap items-center justify-start leading-tight wordGradient  md:text-5xl 2xl:text-6xl text-3xl  font-RobotoBold">
                {" "}
                Quantum.AI
              </div>
            </div>
            <p className="text-white w-full text-justify text-xs md:text-sm font-RobotoRegular">
              Quantum AI Global is a technology first start-up working in
              creating systems that convert data into intelligence by building
              products that generate usable information. We see that only a
              fraction of enterprise data is converted into Intelligence today.
            </p>
          </div>
          <Corousel />
        </div>
      </div>
      <ProductFooter />
    </div>
  );
}
