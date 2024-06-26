import React from "react";

export default function ProductHeader() {
  return (
    <div className="w-full flex items-center justify-center   h-[5rem]  ">
      <div className="w-full sm:w-full width h-full  flex items-center justify-center  ">
        <div className="w-[90%] h-full flex items-center justify-between pt-1">
          <img
            className="w-[5rem] h-[5rem]  md:w-[10rem] md:h-[10rem] "
            src={require("../../Images/QuantumAILogo.png")}
            alt="Quantum Logo"
          />

          <div className="productbuttonclass  ">
            <div className="px-4 py-2 bg-[#191D26] text-[#4E95FF] md:text-sm text-xs rounded-xl relative">
              <button>Request Demo</button>
              <div
                className="absolute -z-2 left-[40%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 md:w-[6rem] md:h-[1rem]"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(217,217,217,0.8), transparent )",
                  filter: "blur(10px)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

