import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HoverBorderButton from "./HoverBorderButton";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { motion, useCycle } from "framer-motion";
import { useDimensions, sidebar, variants, itemVariants } from "./Dimensions";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

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


  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  // Add event listener on component mount to handle clicks outside the menu
  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

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
        <div className="w-[90%] h-full flex items-center justify-between pt-1 relative">
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
              {/* <li
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
              </li> */}
              {/* <li
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
              </li> */}
            </ul>
          </div>
          <div className="sm:hidden">
            <FaBars className="text-[#2DD9F1] text-xl cursor-pointer" onClick={() => setShowMenu(!showMenu)} />
          </div>

        </div>
        {showMenu && (
          <motion.div className={`absolute top-[5rem] pl-10  rounded-lg  w-[98%] ${showMenu ? 'menu-slide' : ''} z-50 h-auto bg-[#000000] border-[0.03rem] border-[#798397]  text-white py-6 `}
            ref={containerRef}
            animate={showMenu ? "open" : "closed"}>
            <motion.ul className="flex flex-col items-start  justify-center w-[95%] h-full text-white gap-3 " variants={variants}>

              <motion.li
                onClick={() => {

                  scrollToTop();
                  navigate("/")
                }}
                className={`px-3 py-1 font-RobotoMedium hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 1 ? " text-white " : ""
                  } text-xs `} variants={itemVariants}
              >
                Home
              </motion.li>
              <motion.li
                onClick={toggleCompanySubmenu}
                className={`relative flex items-center justify-center gap-2 px-3 py-1 font-RobotoMedium hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 2 ? " text-white " : ""
                  } text-xs `} variants={itemVariants}
              >
                Company
                {showCompanySubmenu ? <FaChevronUp className="mt-[0.10rem]" /> : <FaChevronDown className="mt-[0.10rem]" />}
              </motion.li>
              {showCompanySubmenu && (
                <li className={`  flex flex-col items-start justify-center shadow-md w-[10rem] bg-[#000000] shadow-dropdownshadow rounded-lg text-xs py-1`}>
                  <p
                    onClick={() => {
                      // handleNavigation('/Company/Aboutus');
                      scrollToTop();
                      navigate('/Company/Aboutus');
                    }}
                    className="flex items-start justify-center gap-2 px-3 py-2 font-RobotoMedium text-[#ffffff] cursor-pointer hover:text-[#798397]  text-xs"
                  >
                    About us
                  </p>
                  <p
                    onClick={() => {
                      // handleNavigation('/Company/Contactus');
                      scrollToTop();
                      navigate('/Company/Contactus');
                    }}
                    className=" flex items-start justify-center gap-2 px-3 pb-2 font-RobotoMedium text-[#ffffff] cursor-pointer hover:text-[#798397]  text-xs"
                  >
                    Contact us
                  </p>
                </li>
              )}
              <motion.li
                onClick={toggleProductSubmenu}
                className={`relative flex items-center justify-center gap-2 px-3 py-1 font-RobotoMedium hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 3 ? " text-white " : ""
                  } text-xs `} variants={itemVariants}
              >
                Products
                {showProductSubmenu ? <FaChevronUp className="mt-[0.10rem]" /> : <FaChevronDown className="mt-[0.10rem]" />}
              </motion.li>
              {showProductSubmenu && (
                <li className={`flex flex-col items-start justify-center shadow-md w-[10rem] bg-[#000000] shadow-dropdownshadow rounded-lg text-xs py-1`}>
                  <p
                    onClick={() => {
                      // handleNavigation('/Products/Quantum-AI');
                      scrollToTop();
                      navigate('/Products/Quantum-AI');
                    }}
                    className=" flex items-start justify-center gap-2 px-3 py-2 font-RobotoMedium text-[#ffffff] cursor-pointer hover:text-[#798397]  text-xs"
                  >
                    Quantum-AI
                  </p>
                  <p
                    onClick={() => {
                      // handleNavigation('/Products/Marketfit');
                      scrollToTop();
                      navigate('/Products/Marketfit');
                    }}
                    className=" flex items-start justify-center gap-2 px-3 pb-2 font-RobotoMedium text-[#ffffff] cursor-pointer hover:text-[#798397]  text-xs"
                  >
                    Market Fit
                  </p>
                </li>
              )}

              <motion.li
                onClick={() => {
                  // handleNavigation("/Services")
                  scrollToTop();
                  navigate("/Services")
                }}
                className={`px-3 py-1 font-RobotoMedium hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 4 ? " text-white " : ""
                  } text-xs `} variants={itemVariants}
              >
                Services
              </motion.li>
              <motion.li
                onClick={() => {
                  // handleNavigation("/Partners")
                  scrollToTop();
                  navigate("/Partners")
                }}
                className={`px-3 py-1 font-RobotoMedium hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 5 ? " text-white " : ""
                  } text-xs `} variants={itemVariants}
              >
                Partners
              </motion.li>
              <motion.li
                onClick={() => {
                  // handleNavigation("/Ourip")
                  scrollToTop();
                  navigate("/Ourip")
                }}
                className={`px-3 py-1 font-RobotoMedium hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 6 ? " text-white " : ""
                  } text-xs `} variants={itemVariants}
              >
                Our IP's
              </motion.li>
              <motion.li
                onClick={() => {
                  // handleNavigation("/Resources")
                  scrollToTop();
                  navigate("/Resources")
                }}
                className={`px-3 py-1 font-RobotoMedium hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 7 ? " text-white " : ""
                  } text-xs `} variants={itemVariants}
              >
                {" "}
                Resources
              </motion.li>


              {/* <motion.li
                onClick={() => {
                  window.open("https://qulabs.ai/", "_blank");
                }} variants={itemVariants}
              >
                <div className="flex justify-center text-center">
                  <HoverBorderButton
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black font-RobotoMedium text-xs text-white flex items-center px-3 py-1"
                  >
                    <span> Qulabs</span>
                  </HoverBorderButton>
                </div>
              </motion.li>
              <motion.li
                onClick={() => {
                  window.open("https://www.quacademy.com/", "_blank");
                }} variants={itemVariants}
              >
                <div className="flex justify-center text-center">
                  <HoverBorderButton
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black font-RobotoMedium text-xs text-white flex items-center px-3 py-1"
                  >
                    <span> QuAcademy</span>
                  </HoverBorderButton>
                </div>
              </motion.li> */}
            </motion.ul>

          </motion.div>
        )}
      </div>
    </div>
  );
}
