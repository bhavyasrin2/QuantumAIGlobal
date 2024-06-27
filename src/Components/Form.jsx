import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import HoverBorderButton from './HoverBorderButton';
import GradientButton from '../Components/GradientButton';

export default function Form() {
    const form = useRef();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subject, setSubject] = useState('Subject : General Enquiry');
    const [message, setMessage] = useState('');
    const [organisation, setOrganisation] = useState('');
    const [location, setLocation] = useState('');
    const [agreedToCommunications, setAgreedToCommunications] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            user_name: `${firstName} ${lastName}`,
            user_email: email,
            user_phoneNumber: phoneNumber,
            user_subject: subject,
            user_message: message,
            user_organisation: organisation,
            user_location: location,
            agreed_to_communications: agreedToCommunications ? 'Yes' : 'No',
            agreed_to_terms: agreedToTerms ? 'Yes' : 'No',
        };

        emailjs.send('service_l8j1ytl', 'template_gkb9zeq', templateParams, 'rcWUEyKg3TYfCLt2-')
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSubmitted(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    if (isSubmitted) {
        return (
            <div className="w-[90%] relative sm:w-full width  mx-auto flex items-center justify-center px-2 md:px-10 py-10 md:py-20 ">
            <div className=" w-[32rem] h-[10rem] md:h-auto px-3 py-5 md:px-10 md:py-10 rounded-xl flex flex-col justify-center items-center gap-4 z-20 bg-[#000000] border-[0.03rem]   border-[#444D61]">
                <p className="text-[#1B99D4] text-sm md:text-[1rem] xl:text-lg font-RobotoBold tracking-wide  text-center">
                    Your message has been superpositioned in our inbox - we'll collapse it into action soon!
                </p>
                <p className="text-center font-RobotoRegular text-xs md:text-sm tracking-wide text-white">
                    Want to connect with us in a snap? Follow us on our socials for quantum-speed update and interactions.
                </p>

            </div>
            <div className="absolute -z-2 left-1/2 top-[60%] transform -translate-x-1/2 -translate-y-1/2 inset-0 md:w-[80%] md:h-[12rem]"
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(70,196,255,0.2), transparent )",
                    filter: "blur(70px)",
                }}
            ></div>

        </div>
        );
    }

    return (
        <div className="w-[90%] md:w-[50%] max-w-5xl mx-auto flex md:flex-row flex-col md:gap-0 gap-8 items-center justify-center px-2 md:px-10 py-10">
            <div className="w-full  px-3 py-5 md:px-10 md:py-10  rounded-xl flex flex-col justify-center items-center gap-4">
                <div>
                    <h2 className="w-full text-[1.5rem] md:text-[2rem] 2xl:text-[2.3rem] font-RobotoBold mb-1 wordGradient text-center">
                        Contact Quantum AI Global
                    </h2>
                    <div className='w-[90%] md:w-full font-RobotoMedium  text-[#1B99D4] md:text-sm text-xs  mb-1 text-center'>
                        We’re available to quickly answer any questions you might have.
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="w-full md:mb-4 mb-1 flex md:flex-row flex-col text-sm items-center justify-center gap-2">
                        <div className='w-full md:w-[50%]  buttonclass'>
                            <input
                                type="text"
                                id="firstname"
                                name="first_name"
                                placeholder='First Name'
                                className="px-2 py-2 md:p-3 w-full font-RobotoRegular text-[#ffffff] md:text-sm text-xs rounded-xl bg-[#000000]"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='w-full md:w-[50%] buttonclass'>
                            <input
                                type="text"
                                id="lastname"
                                name="last_name"
                                placeholder='Last Name'
                                className=" px-2 py-2 md:p-3 w-full font-RobotoRegular text-[#ffffff] md:text-sm text-xs rounded-xl bg-[#000000]"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full md:mb-4 mb-1 flex md:flex-row flex-col text-sm items-center justify-center gap-2">
                        <div className='w-full md:w-[50%] buttonclass'>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                placeholder='Email'
                                className="px-2 py-2 md:p-3 w-full font-RobotoRegular text-[#ffffff] md:text-sm text-xs rounded-xl bg-[#000000]"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='w-full md:w-[50%] buttonclass'>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="user_phoneNumber"
                                placeholder='Phone number'
                                className=" px-2 py-2 md:p-3 w-full font-RobotoRegular text-[#ffffff] md:text-sm text-xs rounded-xl bg-[#000000]"
                                required
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full md:mb-4 mb-1 flex md:flex-row flex-col text-sm items-center justify-center gap-2">
                        <div className='w-full md:w-[50%] buttonclass'>
                            <input
                                type="text"
                                id="organisation"
                                name="user_organisation"
                                placeholder="Organisation's Name"
                                className="px-2 py-2 md:p-3 w-full font-RobotoRegular text-[#ffffff] md:text-sm text-xs rounded-xl bg-[#000000]"
                                required
                                value={organisation}
                                onChange={(e) => setOrganisation(e.target.value)}
                            />
                        </div>
                        <div className='w-full md:w-[50%] buttonclass'>
                            <input
                                type="text"
                                id="location"
                                name="user_location"
                                placeholder="Organisation's Location"
                                className="px-2 py-2 md:p-3 w-full font-RobotoRegular text-[#ffffff] md:text-sm text-xs rounded-xl bg-[#000000]"
                                required
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full md:mb-4 text-sm mb-1">
                        <div className='buttonclass'>
                            <input
                                type="text"
                                id="subject"
                                name="user_subject"
                                placeholder='Subject'
                                className=" px-2 py-2 md:p-3 w-full font-RobotoRegular text-[#798397] md:text-sm text-xs rounded-xl bg-[#000000]"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="w-full md:mb-4 text-sm mb-1 buttonclass">
                        <textarea
                            id="message"
                            name="user_message"
                            placeholder='Type your Message'
                            rows="4"
                            className=" px-2 py-2 md:p-3  h-[10rem] w-full font-RobotoRegular text-[#ffffff] md:text-sm text-xs rounded-xl bg-[#000000]"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='flex gap-1 pl-2 my-2'>
                        <input
                            type="checkbox"
                            id="agreedToCommunications"
                            checked={agreedToCommunications}
                            onChange={(e) => setAgreedToCommunications(e.target.checked)}
                        />
                        <label className='font-RobotoRegular text-[#ffffff] md:text-sm text-xs' htmlFor="agreedToCommunications">
                            I agree to receive other communications from Quantum AI Global.
                        </label>
                    </div>
                    <div className='flex gap-1 pl-2 my-2'>
                        <input
                            type="checkbox"
                            id="agreedToTerms"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                        />
                        <label className='font-RobotoRegular text-[#ffffff] md:text-sm text-xs ' htmlFor="agreedToTerms">
                            I accept the Terms of Use and privacy policy
                        </label>
                    </div>
                    <div className='font-RobotoRegular text-[#ffffff] text-justify md:text-sm text-xs my-2'>
                        By clicking submit below, you consent to allow Quantum Computing Inc. to store and process the personal information submitted above to provide you the content requested.
                    </div>
                    <div className="flex justify-center text-center mt-6">
                        <HoverBorderButton
                            containerClassName="rounded-full"
                            as="button"
                            type="submit"
                            className="bg-black font-RobotoMedium md:text-sm text-xs text-white flex items-center px-3 py-1"
                        >
                            <span>Submit</span>
                        </HoverBorderButton>
                    </div>
                </form>
                
            </div>

        </div>
    );
}
