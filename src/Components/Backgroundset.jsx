import React from "react";
import { generateSvgDataUrl } from "./Dimensions";
import { WordAnimate } from './Dimensions';

export default function Backgroundset() {
  const backgroundImage = generateSvgDataUrl("#0E0E0E");

  return (
      <div
        className="h-full w-full bg-black relative flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Radial gradient for the container to give a faded look */}
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Backgrounds
        </p>
        <WordAnimate word={"hello"} />
      </div>

    
  );
}
