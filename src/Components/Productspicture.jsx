import React, { useState, useEffect } from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import { quantumProducts, aiProducts } from '../Data/Products';
import { useNavigate } from 'react-router-dom';
import HoverBorderButton from "../Components/HoverBorderButton";

export default function Productspicture() {
  const [hoveredIndex1, setHoveredIndex1] = useState(null);
  const [hoveredIndex2, setHoveredIndex2] = useState(null);

  const totalImages1 = quantumProducts.length;
  const totalImages2 = aiProducts.length;
  const angleIncrement1 = 200 / (totalImages1 - 1);
  const angleIncrement2 = 90 / (totalImages2 - 1);

  const [radius1, setRadius1] = useState(215);
  const [radius2, setRadius2] = useState(155);
  const hoverRadius1 = 170;
  const hoverRadius2 = 150 // Increase radius for hover box

  const [centerImageSize1, setCenterImageSize1] = useState(270);
  const [centerImageSize2, setCenterImageSize2] = useState(160);
  const [surroundingQuantumWidth, setSurroundingQuantumWidth] = useState(120);
  const [surroundingQuantumHeight, setSurroundingQuantumHeight] = useState(120.5);
  const [enlargedImageSizeWidth, setEnlargedImageSizeWidth] = useState(95);
  const [enlargedImageSizeHeight, setEnlargedImageSizeHeight] = useState(95.6);

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    if (id !== "") {
      const url = `/Products/${id}`;
      window.open(url, '_blank');
    } else {
      console.log('Invalid ID: Cannot open new window');
    }
  };

  useEffect(() => {
    const updateBackgroundImage = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1536) {
        setRadius1(360);
        setRadius2(260);
        setCenterImageSize1(450);
        setCenterImageSize2(270);
        setSurroundingQuantumWidth(120.334);
        setSurroundingQuantumHeight(151.2);
        setEnlargedImageSizeWidth(140);
        setEnlargedImageSizeHeight(176.5);
      } else {
        setRadius1(340);
        setRadius2(250);
        setCenterImageSize1(400);
        setCenterImageSize2(250);
        setSurroundingQuantumWidth(105.334);
        setSurroundingQuantumHeight(106);
        setEnlargedImageSizeWidth(125.334);
        setEnlargedImageSizeHeight(126);
      }
    };

    updateBackgroundImage();
  }, []);

  return (
    <div className="w-full flex items-center justify-center h-[60rem]">
      <div className='w-full relative flex items-center justify-center h-full'>
        <div className='absolute h-full top-[20%] transform -translate-x-1/2 left-1/2'>
          <img className='block object-cover' src={require("../../src/Images/QuantumCircleblack.png")} style={{
            width: `${centerImageSize1}px`,
            height: `${centerImageSize1}px`,
          }} alt="Quantum Circle" />
          <p className='absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-RobotoBold text-white font-extrabold text-5xl'>Quantum</p>
          {quantumProducts.map((product, index) => {
            const angle = 170 + index * angleIncrement1;
            const x = radius1 * Math.cos((angle * Math.PI) / 180);
            const y = radius1 * Math.sin((angle * Math.PI) / 180);

            const hoverX = hoverRadius1 * Math.cos((angle * Math.PI) / 180);
            const hoverY = hoverRadius1 * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={index}
                className="absolute  flex flex-col items-center justify-center gap-2 "
                style={{
                  width: `${hoveredIndex1 === index ? enlargedImageSizeWidth : surroundingQuantumWidth}px`,
                  height: `${hoveredIndex1 === index ? enlargedImageSizeHeight : surroundingQuantumHeight}px`,
                  zIndex: hoveredIndex1 === index ? 10 : 1,
                  top: `calc(25% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: `translate(-50%, -50%)`,
                  transition: 'transform 3s ease-in-out',
                }}
                onMouseEnter={() => setHoveredIndex1(index)}
                onMouseLeave={() => setHoveredIndex1(null)}
                onClick={() => handleCardClick(product.name)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className={`object-fill  ${product.name !== "" ? 'cursor-pointer' : 'cursor-default'} `}
                />
                <p className={`text-white font-Quantify text-center w-full ${hoveredIndex1 === index ? '2xl:text-lg text-sm' : '2xl:text-sm text-xs'}`}>{product.title}</p>
                {
                  hoveredIndex1 === index && product.name && product.headline && (
                    <div className="text-[#1B99D4] text-xs font-RobotoBold tracking-wide hover-box absolute  py-3 px-4 bg-black h-auto rounded-2xl border-[0.03rem]  border-[#444D61] "
                      style={{
                        top: `calc(25% + ${hoverY}px)`,
                        left: `calc(50% + ${hoverX}px)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <h4 className="text-[#1B99D4] text-xs font-RobotoBold tracking-wide mb-1">{product.headline}</h4>
                      <div className=" flex justify-start text-center mt-2">
                        <HoverBorderButton
                          containerClassName="rounded-full"
                          as="button"
                          className="bg-black font-RobotoMedium text-xs text-white flex items-center px-3 py-1"
                          onClick={() => handleCardClick(product.name)}
                        >

                          <span> {product.content}</span>
                        </HoverBorderButton>
                      </div>
                    </div>
                  )
                }
                {hoveredIndex1 === index && product.name === "" && product.headline && (
                  <div
                    className="hover-box absolute w-[15rem] py-3 px-4  bg-black h-auto rounded-2xl border-[0.03rem]   border-[#444D61] "
                    style={{
                      top: `calc(25% + ${hoverY}px)`,
                      left: `calc(50% + ${hoverX}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <h4 className="text-[#1B99D4] text-xs font-RobotoBold tracking-wide mb-1">{product.headline}</h4>
                    <p className='text-white font-RobotoRegular  text-[0.675rem]'>{product.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* AI Circle */}
        <div className='absolute top-[48%] transform -translate-x-1/2 left-1/2'>
          <img className='block object-cover' src={require("../../src/Images/AICircleblack.png")} style={{
            width: `${centerImageSize2}px`,
            height: `${centerImageSize2}px`,
          }} alt="AI Circle" />
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-RobotoBold text-white font-extrabold text-5xl'>AI</p>
          {aiProducts.map((product, index) => {
            const angle = 45 + index * angleIncrement2;
            const x = radius2 * Math.cos((angle * Math.PI) / 180);
            const y = radius2 * Math.sin((angle * Math.PI) / 180);

            const hoverX = hoverRadius2 * Math.cos((angle * Math.PI) / 180);
            const hoverY = hoverRadius2 * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={index}
                className="absolute flex flex-col items-center justify-center gap-2"
                style={{
                  width: `${hoveredIndex2 === index ? enlargedImageSizeWidth : surroundingQuantumWidth}px`,
                  height: `${hoveredIndex2 === index ? enlargedImageSizeHeight : surroundingQuantumHeight}px`,
                  zIndex: hoveredIndex2 === index ? 10 : 1,
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: `translate(-50%, -50%)`,
                  transition: 'transform 3s ease-in-out',
                }}
                onMouseEnter={() => setHoveredIndex2(index)}
                onMouseLeave={() => setHoveredIndex2(null)}
                onClick={() => handleCardClick(product.name)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className={`object-fill  ${product.name !== "" ? 'cursor-pointer' : 'cursor-default'} `}
                />
                <p className={`text-white font-Quantify text-center w-full ${hoveredIndex2 === index ? '2xl:text-lg text-sm' : '2xl:text-sm text-xs'}`}>{product.title}</p>
                {
                  hoveredIndex2 === index && product.name && product.headline && (
                    <div className="text-[#1B99D4] text-xs font-RobotoBold tracking-wide hover-box absolute  py-3 px-4 bg-black h-auto rounded-2xl border-[0.03rem]  border-[#444D61] "
                      style={{
                        top: `calc(25% + ${hoverY}px)`,
                        left: `calc(50% + ${hoverX}px)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <h4 className="text-[#1B99D4] text-xs font-RobotoBold tracking-wide mb-1">{product.headline}</h4>

                    </div>
                  )
                }
                {hoveredIndex2 === index && product.name === "" && product.headline && (
                  <div
                    className="hover-box absolute  py-3 px-4 w-[15rem] bg-black h-auto rounded-2xl border-[0.03rem]   border-[#444D61] "
                    style={{
                      top: `calc(25% + ${hoverY}px)`,
                      left: `calc(50% + ${hoverX}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <h4 className="text-[#1B99D4] text-xs font-RobotoBold tracking-wide mb-1">{product.headline}</h4>
                    <p className='text-white font-RobotoRegular text-[0.675rem]'>{product.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
