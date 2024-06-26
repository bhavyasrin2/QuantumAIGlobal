import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HoverBorderButton from "./HoverBorderButton";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { motion, useCycle } from "framer-motion";
import { useDimensions, sidebar, variants, itemVariants } from "./Dimensions";

export default function Header(props) {
  const navigate = useNavigate();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [showMenu, setShowMenu] = useState(false);
  const [Products, setProducts] = useState(false);
  const [Company, setCompany] = useState(false);
  const [Hardware, setHardware] = useState(false);
  const [Software, setSoftware] = useState(false);
  const [showCompanySubmenu, setShowCompanySubmenu] = useState(false);
  const [showProductSubmenu, setShowProductSubmenu] = useState(false);
  console.log(showMenu)

  const toggleCompanySubmenu = () => {
    setShowCompanySubmenu(!showCompanySubmenu);
  };

  const toggleProductSubmenu = () => {
    setShowProductSubmenu(!showProductSubmenu);
  };

  const active = props.id;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex items-center justify-center h-[5rem]">
      <div className="w-full sm:w-full width h-full flex items-center justify-center">
        <div className="w-[90%] h-full flex items-center justify-between pt-1">
          <img
            className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]"
            src={require("../../src/Images/QuantumAILogo.png")}
            alt="Quantum Logo"
          />

          <div className="sm:block hidden w-full h-full">
            <ul className="h-full flex items-center justify-end md:gap-3">
              <li
                onClick={() => {
                  scrollToTop();
                  navigate("/");
                }}
                className={`px-3 py-3 font-RobotoMedium hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 1 ? " text-white " : ""
                  } md:text-sm`}
              >
                Home
              </li>
              <li
                onMouseLeave={() => {
                  setProducts(false);
                }}
                onMouseOver={() => {
                  setCompany(true);
                }}
                className={`relative px-3 py-3 font-RobotoMedium hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 2 ? " text-white " : ""
                  } md:text-sm`}
              >
                Company
                <div
                  onMouseLeave={() => {
                    setCompany(false);
                  }}
                  className={`flex flex-col items-start gap-1 justify-center rounded-[0.8rem] absolute top-[2.5rem] border-[0.03rem] border-[#798397] -left-[25%] w-[8rem] p-3 bg-black shadow-dropdownshadow z-20 ${Company ? "block" : "hidden"
                    }`}
                >
                  <p
                    onClick={() => {
                      scrollToTop();
                      navigate("/Company/AboutUs");
                    }}
                    onMouseOver={() => {
                      setSoftware(true);
                    }}
                    onMouseLeave={() => {
                      setSoftware(false);
                    }}
                    className={`px-3 py-1 font-RobotoMedium text-[#ffffff] cursor-pointer hover:text-[#798397] text:sm`}
                  >
                    About us
                  </p>
                  <p
                    onClick={() => {
                      scrollToTop();
                      navigate("/Company/ContactUs");
                    }}
                    onMouseOver={() => {
                      setSoftware(true);
                    }}
                    onMouseLeave={() => {
                      setSoftware(false);
                    }}
                    className={`px-3 py-1 font-RobotoMedium text-[#ffffff] cursor-pointer hover:text-[#798397] text:sm`}
                  >
                    Contact us
                  </p>
                </div>
              </li>
              <li
                onMouseLeave={() => {
                  setProducts(false);
                }}
                onMouseOver={() => {
                  setProducts(true);
                }}
                className={`relative px-3 py-3 font-RobotoMedium hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 3 ? " text-white " : ""
                  } md:text-sm`}
              >
                Products
                <div
                  onMouseLeave={() => {
                    setProducts(false);
                  }}
                  className={`flex flex-col items-start gap-1 justify-center rounded-[0.8rem] absolute top-[2.5rem] border-[0.03rem] border-[#798397] -left-[30%] w-[8rem] p-3 z-20 bg-black shadow-dropdownshadow ${Products ? "block" : "hidden"
                    }`}
                >
                  <p
                    onClick={() => {
                      scrollToTop();
                      navigate("/Products/Quantum-AI");
                    }}
                    onMouseOver={() => {
                      setHardware(true);
                    }}
                    onMouseLeave={() => {
                      setHardware(false);
                    }}
                    className={`px-3 py-1 font-RobotoMedium text-[#ffffff] cursor-pointer hover:text-[#798397] text:sm`}
                  >
                    Quantum-AI
                  </p>
                  <p
                    onClick={() => {
                      scrollToTop();
                      navigate("/Products/MarketFit");
                    }}
                    onMouseOver={() => {
                      setHardware(true);
                    }}
                    onMouseLeave={() => {
                      setHardware(false);
                    }}
                    className={`px-3 py-1 font-RobotoMedium text-[#ffffff] cursor-pointer hover:text-[#798397] text:sm`}
                  >
                    Market Fit
                  </p>
                </div>
              </li>
              <li
                onClick={() => {
                  scrollToTop();
                  navigate("/Services");
                }}
                className={`px-3 py-3 font-RobotoMedium hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 4 ? " text-white " : ""
                  } md:text-sm`}
              >
                Services
              </li>
              <li
                onClick={() => {
                  scrollToTop();
                  navigate("/Partners");
                }}
                className={`px-3 py-3 font-RobotoMedium hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 5 ? " text-white " : ""
                  } md:text-sm`}
              >
                Partners
              </li>
              <li
                onClick={() => {
                  scrollToTop();
                  navigate("/Ourip");
                }}
                className={`px-3 py-3 font-RobotoMedium hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 6 ? " text-white " : ""
                  } md:text-sm`}
              >
                Our IP's
              </li>
              <li
                onClick={() => {
                  scrollToTop();
                  navigate("/Resources");
                }}
                className={`px-3 py-3 font-RobotoMedium hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 7 ? " text-white " : ""
                  } md:text-sm`}
              >
                Resources
              </li>
              <li
                onClick={() => {
                  window.open("https://qulabs.ai/", "_blank");
                }}
              >
                <div className="flex justify-center text-center">
                  <HoverBorderButton
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black font-RobotoMedium text-sm text-white flex items-center px-3 py-1"
                  >
                    <span> Qulabs</span>
                  </HoverBorderButton>
                </div>
              </li>
              <li
                onClick={() => {
                  window.open("https://www.quacademy.com/", "_blank");
                }}
              >
                <div className="flex justify-center text-center">
                  <HoverBorderButton
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black font-RobotoMedium text-sm text-white flex items-center px-3 py-1"
                  >
                    <span> QuAcademy</span>
                  </HoverBorderButton>
                </div>
              </li>
            </ul>
          </div>
          <div className="sm:hidden">


            <FaBars color="#ffffff" size={24}
              className=" cursor-pointer"
              onClick={() => toggleOpen()
                
               }
            />

          </div>
        </div>

      </div>
    </div>
  );
}
