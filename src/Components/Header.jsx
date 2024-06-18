import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HoverBorderButton from "./HoverBorderButton";

export default function Header(props) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [Products, setProducts] = useState(false);
  const [Company, setCompany] = useState(false);

  const [Hardware, setHardware] = useState(false);
  const [Software, setSoftware] = useState(false);

  const [showCompanySubmenu, setShowCompanySubmenu] = useState(false);
  const [showProductSubmenu, setShowProductSubmenu] = useState(false);



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
      behavior: 'smooth'
    });
  };
  return (
    <div className="w-full flex items-center justify-center   h-[5rem]  ">
      <div className="w-full sm:w-full width h-full  flex items-center justify-center  ">
        <div className="w-[90%] h-full flex items-center justify-between pt-1">


          <img className="w-[5rem] h-[5rem]  md:w-[10rem] md:h-[10rem] " src={require("../../src/Images/QuantumAILogo.png")} alt="Quantum Logo" />

          <div className="sm:block hidden w-full h-full ">
            <ul className="h-full flex items-center justify-end  md:gap-3">
              <li
                onClick={() => {
                  scrollToTop();
                  navigate("/")
                }}
                className={`px-3 py-3  font-RobotoMedium   hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 1
                  ? " text-white "
                  : ""
                  } md:text-sm `}
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
                className={`relative px-3 py-3  font-RobotoMedium   hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 2
                  ? " text-white "
                  : ""
                  } md:text-sm `}
              >
                Company

                <div
                  onMouseLeave={() => {
                    setCompany(false);
                  }}
                  className={`flex flex-col items-start gap-1 justify-center  rounded-[0.8rem] absolute top-[2.5rem] border-[0.03rem] border-[#798397] -left-[25%]  w-[8rem] p-3 bg-black shadow-dropdownshadow z-20 ${Company ? "block" : "hidden"
                    } `}
                >
                  <p
                    onClick={() => {
                      scrollToTop();
                      navigate("/Company/AboutUs")
                    }}
                    onMouseOver={() => {
                      setSoftware(true);
                    }}
                    onMouseLeave={() => {
                      setSoftware(false);
                    }}
                    className={`px-3 py-1  font-RobotoMedium   text-[#ffffff] cursor-pointer hover:text-[#798397] text:sm `}
                  >
                    About us{" "}

                  </p>
                  <p
                    onClick={() => {
                      scrollToTop();
                      navigate("/Company/ContactUs")
                    }}
                    onMouseOver={() => {
                      setSoftware(true);
                    }}
                    onMouseLeave={() => {
                      setSoftware(false);
                    }}
                    className={`px-3 py-1  font-RobotoMedium  text-[#ffffff] cursor-pointer hover:text-[#798397] text:sm `}
                  >
                    Contact us{" "}

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
                className={`relative px-3 py-3  font-RobotoMedium   hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 3
                  ? " text-white "
                  : ""
                  } md:text-sm `}
              >
                Products

                <div
                  onMouseLeave={() => {
                    setProducts(false);
                  }}
                  className={`flex flex-col items-start gap-1 justify-center  rounded-[0.8rem] absolute top-[2.5rem] border-[0.03rem] border-[#798397] -left-[30%]  w-[8rem] p-3 z-20 bg-black shadow-dropdownshadow ${Products ? "block" : "hidden"
                    } `}
                >
                  <p
                    onClick={() => {
                      scrollToTop();
                      navigate("/Products/Quantum-AI")
                    }}
                    onMouseOver={() => {
                      setHardware(true);
                    }}
                    onMouseLeave={() => {
                      setHardware(false);
                    }}
                    className={`px-3 py-1  font-RobotoMedium   text-[#ffffff] cursor-pointer hover:text-[#798397] text:sm `}
                  >
                    Quantum-AI{" "}

                  </p>
                  <p
                    onClick={() => {
                      scrollToTop();
                      navigate("/Products/MarketFit")
                    }}
                    onMouseOver={() => {
                      setHardware(true);
                    }}
                    onMouseLeave={() => {
                      setHardware(false);
                    }}
                    className={`px-3 py-1 font-RobotoMedium   text-[#ffffff] cursor-pointer hover:text-[#798397] text:sm `}
                  >
                    Market Fit{" "}

                  </p>

                </div>
              </li>

              <li
                onClick={() => {

                  scrollToTop();
                  navigate("/Services")
                }}
                className={`px-3 py-3  font-RobotoMedium   hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 4
                  ? " text-white "
                  : ""
                  } md:text-sm `}
              >
                Services
              </li>
              <li
                onClick={() => {
                  scrollToTop();
                  navigate("/Partners")
                }}
                className={`px-3 py-3  font-RobotoMedium   hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 5
                  ? " text-white "
                  : ""
                  } md:text-sm `}
              >
                Partners
              </li>
              <li
                onClick={() => {

                  scrollToTop();
                  navigate("/Ourip")
                }}
                className={`px-3 py-3  font-RobotoMedium   hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 6
                  ? " text-white "
                  : ""
                  } md:text-sm `}
              >
                Our IP's
              </li>
              <li
                onClick={() => {

                  scrollToTop();
                  navigate("/Resources")
                }}
                className={`px-3 py-3  font-RobotoMedium   hover:text-[#ffffff] cursor-pointer text-[#798397] ${active === 7
                  ? " text-white "
                  : ""
                  } md:text-sm `}
              >
                {" "}
                Resources
              </li>



              <li onClick={() => {
                window.open("https://qulabs.ai/", "_blank");
              }}>
                <div className=" flex justify-center text-center">
                  <HoverBorderButton
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black font-RobotoMedium text-sm text-white flex items-center px-3 py-1"
                  >

                    <span> Qulabs</span>
                  </HoverBorderButton>
                </div>
              </li>
              <li onClick={() => {
                window.open("https://www.quacademy.com/", "_blank");
              }}>
                <div className=" flex justify-center text-center">
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
            <FaBars className="text-[#000000] text-2xl cursor-pointer" onClick={() => setShowMenu(!showMenu)} />
          </div>

        </div>
        {/* {showMenu && (
        <div className={`absolute top-full rounded-lg right-0 w-[50%] ${showMenu ? 'menu-slide' : ''} h-${researchClicked ? '45' : '40'}% bg-[#FDFDFD] text-white py-6`}>
           <ul className="flex  flex-col items-center justify-center text-white gap-3 ">
           <li
              onClick={() => {
               
                scrollToTop();
                navigate("/")
              }}
              className={`px-3 py-1 bg-[#FDFDFD] font-opensans font-normal  hover:text-[#6FC7E3] cursor-pointer text-[#000000] ${
                active === 1
                  ? "border-b-2 text-[#3B84B4] hover:text-[#3B84B4]  border-[#3B84B4]"
                  : "border-b-0"
              } text-xs `}
            >
              Home
            </li>
            <li
              onClick={toggleCompanySubmenu}
              className={`relative flex items-center justify-center gap-2 p-3 bg-[#FDFDFD] hover:text-[#6FC7E3] font-opensans font-normal cursor-pointer text-[#000000] ${
                active === 2 ? 'border-b-2 text-[#3B84B4] hover:text-[#3B84B4] border-[#3B84B4]' : 'border-b-0'
              } text-xs`}
            >
              Company
              {showCompanySubmenu ? <FaChevronUp className="mt-[0.10rem]" /> : <FaChevronDown className="mt-[0.10rem]" />}
            </li>
            {showCompanySubmenu && (
              <li className={`flex flex-col items-center justify-center shadow-md w-[10rem] bg-[#FDFDFD] rounded-lg text-xs py-1`}>
                <p
                  onClick={() => {
                    
                    scrollToTop();
                    navigate('/Company/Aboutus');
                  }}
                  className="flex items-center justify-center font-opensans font-normal  px-2 py-1 w-[8rem] text-[#000000] hover:text-[#6FC7E3] hover:bg-[#F3F3F3] hover:rounded-xl text-xs"
                >
                  About us
                </p>
                <p
                  onClick={() => {
                   
                scrollToTop();
                    navigate('/Company/Contactus');
                  }}
                  className="flex items-center justify-center font-opensans font-normal px-2 py-1 w-[8rem] text-[#000000] hover:text-[#6FC7E3] hover:bg-[#F3F3F3] hover:rounded-xl text-xs"
                >
                  Contact us
                </p>
              </li>
            )}
              <li
              onClick={toggleProductSubmenu}
              className={`relative flex items-center justify-center gap-2 p-3 bg-[#FDFDFD] hover:text-[#6FC7E3] font-opensans font-normal cursor-pointer text-[#000000] ${
                active === 3 ? 'border-b-2 text-[#3B84B4] hover:text-[#3B84B4] border-[#3B84B4]' : 'border-b-0'
              } text-xs`}
            >
              Products
              {showProductSubmenu ? <FaChevronUp className="mt-[0.10rem]" /> : <FaChevronDown className="mt-[0.10rem]" />}
            </li>
            {showProductSubmenu && (
              <li className={`flex flex-col items-center justify-center shadow-md w-[10rem] bg-[#FDFDFD] rounded-lg text-xs py-1`}>
                <p
                  onClick={() => {
                    
                    scrollToTop();
                    navigate('/Products/Quantum-AI');
                  }}
                  className="flex items-center justify-center font-opensans font-normal px-2 py-1 w-[8rem] text-[#000000] hover:text-[#6FC7E3] hover:bg-[#F3F3F3] hover:rounded-xl text-xs"
                >
                  Quantum-AI
                </p>
                <p
                  onClick={() => {
                   
                     scrollToTop();
                    navigate('/Products/Marketfit');
                  }}
                  className="flex items-center justify-center font-opensans font-normal px-2 py-1 w-[8rem] text-[#000000] hover:text-[#6FC7E3] hover:bg-[#F3F3F3] hover:rounded-xl text-xs"
                >
                  Market Fit
                </p>
              </li>
            )}
             
            <li
              onClick={() => {
                
                scrollToTop();
                navigate("/Services")
              }}
              className={`px-3 py-1 bg-[#FDFDFD] font-opensans font-normal  hover:text-[#6FC7E3] cursor-pointer text-[#000000] ${
                active === 4
                  ? "border-b-2 text-[#3B84B4] hover:text-[#3B84B4] border-[#3B84B4]"
                  : "border-b-0"
              } text-xs`}
            >
              Services
            </li>
            <li
              onClick={() => {
                
                scrollToTop();
                navigate("/Partners")
              }}
              className={`px-3 py-1 bg-[#FDFDFD] font-opensans font-normal hover:text-[#6FC7E3] cursor-pointer text-[#000000] ${
                active === 5
                  ? "border-b-2 text-[#3B84B4] hover:text-[#3B84B4] border-[#3B84B4]"
                  : "border-b-0"
              } text-xs`}
            >
              Partners
            </li>
            <li
              onClick={() => {
              
                scrollToTop();
                navigate("/Ourip")
              }}
              className={`px-3 py-1 bg-[#FDFDFD] font-opensans font-normal  hover:text-[#6FC7E3] cursor-pointer text-[#000000] ${
                active === 6
                  ? "border-b-2 text-[#3B84B4] hover:text-[#3B84B4] border-[#3B84B4]"
                  : "border-b-0"
              } text-xs`}
            >
              Our IP's
            </li>
            <li
              onClick={() => {
                
                scrollToTop();
                navigate("/Resources")
              }}
              className={`px-3 py-1 bg-[#FDFDFD] font-opensans font-normal  hover:text-[#6FC7E3] cursor-pointer text-[#000000] ${
                active === 7
                  ? "border-b-2 text-[#3B84B4] hover:text-[#3B84B4] border-[#3B84B4]"
                  : "border-b-0"
              } text-xs`}
            >
              {" "}
              Resources
            </li>
            
            
            <li
               onClick={() => {
                window.open("https://qulabs.ai/", "_blank");
              }}
              className={`px-3 py-1 bg-[#2DD9F1] font-opensans font-normal hover:text-[#ffffff]/70 cursor-pointer   rounded-lg text-[#ffffff] text-xs`}
            >
              Qulabs
            </li>
            <li
               onClick={() => { 
                window.open("https://www.quacademy.com/", "_blank");
              }}
              className={`px-3 py-1 bg-[#2DD9F1] font-opensans font-normal hover:text-[#ffffff]/70 cursor-pointer  rounded-lg text-[#ffffff]  text-xs`}
            >
              QuAcademy
            </li>
          </ul>
         
        </div>
      )} */}
      </div>
    </div>
  );
}
