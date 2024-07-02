import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection';
import Marketfitcomponent from '../Components/Marketfitcomponent'
import { migrationdata, readydata, bankingdata } from '../Data/Marketfit'
import { generateSvgDataUrl } from '../Components/Dimensions';
import TitleContent from '../Components/TitleContent';
import BackgroundGradient from '../Images/BackgroundGradient.png'
import BackgroundGradientSmall from '../Images/BackgroundGradientSmall.png'

export default function Marketfit() {
    const [backgroundImage, setBackgroundImage] = useState(``);

    useEffect(() => {
        const updateBackgroundImage = () => {
            if (window.innerWidth < 640) {
                setBackgroundImage(`url(${BackgroundGradientSmall})`);
            } else {
                setBackgroundImage(`url(${BackgroundGradient})`);
            }
        };

        // Set initial background image
        updateBackgroundImage();

        // Update background image on window resize
        window.addEventListener('resize', updateBackgroundImage);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateBackgroundImage);
    }, []);

    return (
        <div className='w-full  flex flex-col gap-0 items-center justify-center bg-black'>
            <div className='w-full width flex flex-col gap-0 items-center justify-center bg-contain bg-repeat' style={{ backgroundImage: backgroundImage }}>
                <Header id={3} />
                <div className='w-full h-[30rem] '>

                    <HeroSection title1="Explore Quantum AI Global"
                        title2="Product - Market Fit" content="We bring a relentless customer focus to everything we do." />
                </div>

                <div className='w-full width  flex flex-col items-center justify-center my-10 gap-6'>
                    <TitleContent title="Our Solutions in Quantum Communication" content="" />


                    <div className='w-full md:w-[77.5rem] flex flex-col-reverse sm:flex-row items-center justify-center gap-3'>

                        <div className='w-[85%] flex flex-col items-center justify-center gap-4'>
                            <div className='w-[95%] sm:w-[80%] font-RobotoBold text-[#1B99D4] text-xl 2xl:text-2xl  text-center'>Quantum-Safe Enterprise Security



                            </div>
                            <div className='w-full flex flex-col items-center justify-center gap-1'>
                                <div className='sm:w-[80%] w-[95%] font-RobotoRegular  text-xs md:text-sm text-[#ffffff]  text-justify'>If we acknowledge the possibility that a quantum computer capable of breaking asymmetric cryptography may materialize within the next decade, it becomes imperative for organizations to reassess their cryptographic infrastructure.
                                    Consider this: How swiftly can your cryptographic infrastructure be upgraded inresponse to such a development? What is the anticipated lifespan of your data under these circumstances? These questions demand immediate attention.
                                    Failure to address these critical concerns could leave your organization vulnerable to security breaches and data compromise. By taking proactive measures now, you can position yourself ahead of the curve and mitigate potential risks.
                                    We swear by remembering, readiness is not just about reacting swiftly; it's about planning strategically. By understanding the implications and timelines involved, you can allocate resources effectively and adapt to evolving standards. The time to act is now. Don't wait until it's too late.Our line up of product solutions are built to empower businesses to excel in a time of swift technological progress.</div>
                                {/* <div className='sm:w-[80%] w-[95%] font-RobotoRegular  text-xs md:text-sm text-[#ffffff]   text-center'>Consider this: How swiftly can your cryptographic infrastructure be upgraded inresponse to such a development? What is the anticipated lifespan of your data under these circumstances? These questions demand immediate attention.</div>
                            <div className='sm:w-[80%] w-[95%] font-RobotoRegular  text-xs md:text-sm text-[#ffffff]  text-center'>Failure to address these critical concerns could leave your organization vulnerable to security breaches and data compromise. By taking proactive measures now, you can position yourself ahead of the curve and mitigate potential risks.</div>
                            <div className='sm:w-[80%] w-[95%] font-RobotoRegular  text-xs md:text-sm text-[#ffffff]   text-center'>We swear by remembering, readiness is not just about reacting swiftly; it&#39;s about planning strategically. By understanding the implications and timelines involved, you can allocate resources effectively and adapt to evolving standards. The time to act is now. Don&#39;t wait until it&#39;s too late.Our line up of product solutions are built to empower businesses to excel in a time of swift technological progress.</div> */}

                            </div>
                        </div>

                    </div>
                    <div className='w-[85%] md:w-[77.5rem] flex  items-center justify-center gap-3'>
                        <div className='w-full sm:w-[80%]  flex flex-col sm:flex-row items-center  justify-center gap-4 sm:gap-6'>
                            <img className='w-[7.432rem] h-[8.97rem] ' src={require("../../src/Images/Q-SLEEVE.png")}>
                            </img>
                            <div className='w-full sm:w-[70%] flex flex-col items-center justify-center gap-4'>
                                <div className='w-full flex flex-col items-center justify-center gap-4'>
                                    <div className='sm:w-full w-[95%] font-RobotoBold text-[#1B99D4] text-xl 2xl:text-2xl text-left '>Post Quantum Cryptography


                                    </div>
                                    <div className='w-full flex flex-col items-center justify-center gap-1'>
                                        <div className='sm:w-full w-[95%] font-RobotoRegular  text-xs md:text-sm text-[#ffffff] text-left'>If we acknowledge the possibility that a quantum computer capable of breaking asymmetric cryptography may materialize within the next decade, it becomes imperative for organizations to reassess their cryptographic infrastructure. Consider this: How swiftly can your cryptographic infrastructure be upgraded in response to such a development? What is the anticipated lifespan of your data under these circumstances? These questions demand immediate attention. Failure to address these critical concerns could leave your organization vulnerable to security breaches and data compromise. By taking proactive measures now, you can position yourself ahead of the curve and mitigate potential risks. We swear by remembering, readiness is not just about reacting swiftly; it&#39;s about planning strategically. By understanding the implications and timelines involved, you can allocate resources effectively and adapt to evolving standards. The time to act is now. Don&#39;t wait until it&#39;s too late. Our line up of product solutions are built to empower businesses to excel in a time of swift technological progress.</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='w-[85%] md:w-[77.5rem]  flex  items-center justify-center gap-3'>
                        <div className='w-full sm:w-[80%]  flex flex-col sm:flex-row items-center  justify-center gap-4 sm:gap-6'>
                            <img className='w-[7.432rem] h-[8.97rem] ' src={require("../../src/Images/QKD.png")}>
                            </img>
                            <div className='w-full sm:w-[70%] flex flex-col items-center justify-center gap-4'>
                                <div className='w-full flex flex-col items-center justify-center gap-4'>
                                    <div className='sm:w-full w-[95%] font-RobotoBold text-[#1B99D4] text-xl 2xl:text-2xl text-left '>Quantum Key Distribution


                                    </div>
                                    <div className='w-full flex flex-col items-center justify-center gap-1'>
                                        <div className='sm:w-full w-[95%] font-RobotoRegular  text-xs md:text-sm text-[#ffffff] text-left'>Quantum Key distribution is the logical next step towards Quantum safety. Once data is encrypted, the interception of the key that was used for the encryption would nullify the effect of the encryption.</div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className='w-full md:w-[77.5rem]  flex flex-col items-center justify-center my-10 '>
                        <div className='w-[85%] flex flex-col items-center justify-center '>
                            <div className='w-[95%] sm:w-[80%] font-RobotoRegular text-[#1B99D4] text-xl 2xl:text-2xl text-left '>Product suite we offer



                            </div>
                            <div className='w-full sm:w-[80%] flex flex-col sm:flex-row items-center justify-center '>

                                <div className='w-full flex flex-col items-center justify-center gap-4 py-2'>
                                    <div className='w-full flex flex-col sm:flex-row items-center justify-center gap-4'>

                                        <div className='w-full flex flex-col items-center justify-center gap-1'>
                                            <div className='sm:w-full w-[95%] font-RobotoRegular text-[#1B99D4] text-[1rem]  text-left'>Quantum Migration


                                            </div>
                                            <div className='sm:w-full w-[95%] font-RobotoRegular  text-xs md:text-sm text-[#ffffff] text-left'>A product suite to initiate the development to ease migration from the current set of public-key cryptographic algorithms to replacement algorithms that are resistant to quantum computer-based attacks.</div>
                                        </div>
                                        <div className="flex md:flex-row flex-col   max-w-full  md:gap-6 gap-2 mx-auto items-center justify-center   px-3  cursor-pointer">
                                            {migrationdata.map((item) => (
                                                <div key={item.id} className="flex-item ">
                                                    <Marketfitcomponent
                                                        img={item.img}
                                                        name={item.name}
                                                        content={item.content}

                                                    />
                                                </div>
                                            ))}
                                        </div>



                                    </div>
                                    <div className='w-full flex flex-col sm:flex-row items-center justify-center gap-4'>

                                        <div className='w-full flex flex-col items-center justify-center gap-1'>
                                            <div className='sm:w-full w-[95%] font-RobotoRegular  text-[#1B99D4] text-[1rem] text-left'>Quantum Ready


                                            </div>
                                            <div className='sm:w-full w-[95%] font-RobotoRegular  text-xs md:text-sm text-[#ffffff] text-left'>We leverage quantum key distribution to protect data and communications, keeping society, businesses and people safe now and in the long-term future. Ensuring everyone can communicate and exchange information safely. For the long run.</div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row  max-w-full  md:gap-6 gap-2 mx-auto items-center justify-center   px-3  cursor-pointer">
                                            {readydata.map((item) => (
                                                <div key={item.id} className="flex-item ">
                                                    <Marketfitcomponent
                                                        img={item.img}
                                                        name={item.name}
                                                        content={item.content}

                                                    />
                                                </div>
                                            ))}
                                        </div>



                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className='w-full width  flex flex-col items-center justify-center my-10 gap-6'>


                    <TitleContent title="Quantum For Banking and Finance Institutions" content="We leverage Quantum for Finance. Our solution demonstrates how quantum computing can revolutionize portfolio optimization,bringing unprecedented speed and efficiency." />

                    <div className='w-[85%] md:w-[77.5rem] flex  items-center justify-center gap-3'>
                        <div className='w-full sm:w-[80%]  flex flex-col sm:flex-row-reverse items-center  justify-center gap-4 sm:gap-6'>
                            <img className='w-[7.432rem] h-[8.97rem] ' src={require("../../src/Images/Q-folio pro.png")}>
                            </img>
                            <div className='w-full sm:w-[70%] flex flex-col items-center justify-center gap-4'>


                                <div className='w-full flex flex-col items-center justify-center gap-1'>
                                    <div className='sm:w-full w-[95%] font-RobotoRegular  text-[#3b84b4] text-[1rem] text-left '>Q-Folio Pro </div>
                                    <div className='w-full flex flex-col items-center justify-center gap-1'>
                                        <div className='sm:w-full w-[95%] font-RobotoRegular  text-xs md:text-sm text-[#ffffff] text-left'>When it comes to using advanced technology to increase profit, reduce cost, and improve efficiency, financial institutions have often led the way. Today, many of those same companies are at the forefront of exploring how quantum computers can be used to drive competitive advantage. Optimization is at the Heart of Finance. With Q-Folio pro a quantum-hybrid approach we are ready to tackle this problem successfully.</div>
                                    </div>
                                    {/* <div>
                                    {Object.entries(bankingdata[0]).map(([heading, points], index) => (
                                        <div key={index}>
                                            <p className='sm:w-[90%] w-[100%] font-opensansbold font-bold text-[#3b84b4] text-xl 2xl:text-2xl text-left '>{heading}</p>
                                            <ul>
                                                {points.map((point, idx) => (
                                                    <li key={idx}>
                                                        <div className='flex items-start justify-start sm:w-[90%] w-[100%]  '><TbPointFilled size={20} /><div className='font-opensans font-medium text-sm 2xl:text-lg text-[#000000] text-left'>{point}</div> </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div> */}

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <Footer showpage={false} />
            </div>
        </div>

    )
}
