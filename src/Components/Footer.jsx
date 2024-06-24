import React,{useEffect, useState} from "react";
import "./../App.css"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbMail } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { LuFacebook } from "react-icons/lu";
import { RxTwitterLogo } from "react-icons/rx";
import { FiLinkedin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logoSVG from '../../src/Images/QuantumAILogo.png';
import { generateSvgDataUrl } from "./Dimensions";

export default function Footer(props) {
  const backgroundImageBig = generateSvgDataUrl("#060606",70,70);
  const backgroundImageSmall = generateSvgDataUrl("#060606",50,50);
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navigate = useNavigate();
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@qulabs.ai';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+916281684342';
  };

  const openInstagramProfile = () => {
    window.open('https://www.instagram.com/qulabssoftware/', '_blank');
  };

  const openTwitterProfile = () => {
    window.open('https://twitter.com/i/flow/login?redirect_after_login=%2Fqulabssoftware', '_blank');
  };

  const openLinkedInProfile = () => {
    window.open('https://www.linkedin.com/company/qulabs-software-india/', '_blank');
  };
  return (
    <div className={`flex flex-col  items-center justify-center w-full h-auto bg-[#000000] `}>

      {

        props.showpage && (

          <div className="width flex flex-col  relative inset-0 gap-4 md:w-[72rem] w-[20rem] h-[30rem] md:h-[20rem] border-[0.06rem] border-[#1B99D4] px-[2.25rem] py-[1.25rem] rounded-3xl "
          style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 w-full md:w-[50rem] h-[15rem] -z-2'
              style={{
                background: "radial-gradient(circle at center, rgba(77,118,244,0.3), transparent )",
                filter: "blur(70px)"
              }}></div>

            <div className="text-center text-[#1B99D4] font-RobotoBold text-[1.5rem] md:text-[2rem] 2xl:text-[2.3rem]">
              Where can you find us?
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center xl:gap-12 gap-6">
              <a href=""
                target="_blank" rel="noreferrer" className="flex items-center justify-center gap-5 xl:w-[24.3rem] xl:h-[5.37rem] md:w-[22rem] md:h-[5rem]  w-[16rem] h-[4.5rem] z-0  hover:border-[0.06rem] hover:border-[#1B99D4]  hover:bg-transparent bg-[#000000]  shadow-lg  rounded-2xl px-[1.875rem] py-[0.625rem]">
                <HiOutlineLocationMarker size={24} color="#1B99D4" />
                <div className="w-[90%] flex flex-col items-center justify-center">
                  <div className=" sm:w-[18rem] text-left md:text-center w-[90%] text-[#ffffff] font-RobotoRegular   text-xs md:text-sm  ">
                    22 Meridian Rd Unit 14



                  </div>
                  <div className=" sm:w-[18rem] text-left md:text-center w-[90%]  text-[#ffffff] font-RobotoRegular    text-xs md:text-sm   ">
                    Edison, NJ 08820



                  </div>
                </div>


              </a>
              <a href="https://maps.app.goo.gl/Y7e6sdXc3U5DjCiD9"
                target="_blank" rel="noreferrer" className="flex items-center justify-center gap-5 xl:w-[24.3rem] xl:h-[5.37rem] md:w-[22rem] md:h-[5rem]  w-[16rem] h-[4.5rem] z-0 hover:border-[0.06rem] hover:border-[#1B99D4]  hover:bg-transparent bg-[#000000] shadow-lg  rounded-2xl px-[1.875rem] py-[0.625rem]">
                <HiOutlineLocationMarker size={24} color="#1B99D4" />
                <div className="w-[90%] flex flex-wrap sm:w-[18rem]  text-left md:text-center text-[#ffffff] font-opensans  text-xs md:text-sm ">
                  Suite 305B, Capital Park,

                  HITEC City Hyderabad, Telangana 500081
                </div>
              </a>

            </div>
            <div className="flex flex-col md:flex-row items-center justify-center xl:gap-12 gap-6">
              <a href="https://www.google.com/maps/search/USA+Qulabz+Inc+16192+Coastal+Highway+Lewes+Delaware,+19958/@38.782478,-75.2334244,12z/data=!3m1!4b1?entry=ttu"
                target="_blank" rel="noreferrer" className="flex items-center justify-center gap-5 xl:w-[24.3rem] xl:h-[5.37rem] md:w-[22rem] md:h-[5rem]  w-[16rem] h-[4.5rem] z-0 hover:border-[0.06rem] hover:border-[#1B99D4]  hover:bg-transparent bg-[#000000] shadow-lg  rounded-2xl px-[1.875rem] py-[0.625rem]">
                <HiOutlineLocationMarker size={24} color="#1B99D4" />
                <div className="w-[90%] flex flex-col items-center justify-center">
                  <div className=" sm:w-[18rem] text-left md:text-center w-[90%] text-[#ffffff] font-RobotoRegular    text-xs md:text-sm ">
                    FDRK2335, Compass Building

                  </div>
                  <div className=" sm:w-[18rem] text-left md:text-center w-[90%] text-[#ffffff] font-RobotoRegular   text-xs md:text-sm  ">
                    Ras Al Khaimah, UAE


                  </div>
                </div>


              </a>
              <a href="https://www.google.com/maps/search/USA+Qulabz+Inc+16192+Coastal+Highway+Lewes+Delaware,+19958/@38.782478,-75.2334244,12z/data=!3m1!4b1?entry=ttu"
                target="_blank" rel="noreferrer" className="flex items-center justify-center gap-5 xl:w-[24.3rem] xl:h-[5.37rem] md:w-[22rem] md:h-[5rem]  w-[16rem] h-[4.5rem] z-0 hover:border-[0.06rem] hover:border-[#1B99D4]  hover:bg-transparent bg-[#000000] shadow-lg  rounded-2xl px-[1.875rem] py-[0.625rem]">
                <HiOutlineLocationMarker size={24} color="#1B99D4" />
                <div className=" flex flex-wrap sm:w-[18rem] w-[90%] text-left md:text-center text-[#ffffff] font-RobotoRegular  text-xs md:text-sm ">
                  Sunrise Towers, Hill no 3, IT SEZ

                  Rushikonda, Visakhapatnam
                </div>
              </a>

            </div>
          </div>

        )
      }
      <div className="width w-full flex flex-col items-center justify-center ">
        <div className="md:w-[75%]   w-[80%] flex flex-row md:gap-24 gap-10 items-center justify-center">
          <div className=" md:w-[16rem] md:h-[16rem] w-[9rem] h-[8rem]  flex items-center justify-center ">
            <img className="md:w-[15.3rem] md:h-[15.3rem] w-[10rem] h-[10rem] " src={logoSVG} alt="Quantum Logo" />
          </div>
          <div className="w-[60%]  flex md:flex-row flex-col  md:gap-9 items-start justify-center font-opensans ">
            <div className="w-full flex md:gap-9  items-start justify-center">
              <div className=" p-[0.625rem]  font-RobotoRegular">

                <div className="text-[#1B99D4]  font-semibold  2xl:text-xl md:text-lg text-sm leading-loose mb-1.5">Product</div>
                <ul className="text-[#ffffff] text-xs md:text-sm">
                  <li onClick={() => {
                    scrollToTop();
                    navigate("/Products")
                  }} className="w-full hover:text-[#ffffff] cursor-pointer text-[#798397]">Quantum-AI</li>
                  <li onClick={() => {
                    scrollToTop();
                    navigate("/Products")
                  }} className="mb-1 hover:text-[#ffffff] cursor-pointer text-[#798397]">MarketFit</li>
                  <li onClick={() => {
                    scrollToTop();
                    navigate("/Ourip")
                  }} className="mb-1 hover:text-[#ffffff] cursor-pointer text-[#798397]">Our IP's</li>
                </ul>
              </div>
              <div className=" p-[0.625rem] font-RobotoRegular">

                <div className="text-[#1B99D4]  font-semibold  2xl:text-xl md:text-lg text-sm leading-loose mb-1.5">Company</div>
                <ul className="text-[#ffffff] text-xs md:text-sm">
                  <li onClick={() => {
                    scrollToTop();
                    navigate("/Aboutus")
                  }} className="mb-1  hover:text-[#ffffff] cursor-pointer text-[#798397]">About us</li>
                  <li onClick={() => {
                    scrollToTop();
                    navigate("/Contactus")
                  }} className="mb-1 hover:text-[#ffffff] cursor-pointer text-[#798397]">Contact us</li>
                  <li onClick={() => {
                    scrollToTop();
                    navigate("/Resources")
                  }} className="mb-1 hover:text-[#ffffff] cursor-pointer text-[#798397]">Resources</li>

                </ul>
              </div>

            </div>
            <div className="w-full flex  justify-between items-start gap-10">
              <div className="pl-[0.625rem]">
                <div className="p-[0.625rem] font-RobotoRegular">
                  <div className="text-[#1B99D4]  font-semibold 2xl:text-xl md:text-lg text-sm font-opensans leading-loose mb-1">Contact Us</div>
                  <ul className="  text-[#798397] text-xs md:text-sm flex-col">
                    <li className="mb-1 cursor-pointer " >
                      <div className="flex items-center justify-start gap-2.5">
                        <TbMail size={18} color="#1B99D4" />
                        <span className="align-middle">info@thequantum.ai</span>
                      </div>
                    </li>
                    <li className="mb-1 cursor-pointer " >
                      <div className="flex items-center justify-start gap-2.5">
                        <IoCallOutline size={18} color="#1B99D4" />
                        <span className="align-middle">+1 (732) 227 4433</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full  border-t-2 border-[#1B99D4] bg-black">
        <div className="width md:w-[70%] w-[80%]  mt-[0.1rem] flex items-center justify-between  ">
          <div className="flex w-[50%] px-2 sm:px-0">
            <div className="text-[#ffffff] font-opensans 2xl:text-xs md:text-[0.6rem] text-[0.3rem]">Copyright © 2023 I</div>
            <div className="text-[#1B99D4] font-opensans 2xl:text-xs md:text-[0.6rem] text-[0.3rem]">Quantum AI Global</div>

          </div>
          <div className="flex items-center justify-end w-[50%]">
            <div className="text-[#ffffff] font-opensans 2xl:text-xs md:text-[0.6rem] text-[0.3rem]">All Rights Reserved</div>
            <div className="text-[#1B99D4] font-opensans 2xl:text-xs md:text-[0.6rem] text-[0.3rem]">| Terms and Conditions | Privacy Policy</div>

          </div>
         

        </div>

      </div>
      </div>
    
    </div>
  );
}

