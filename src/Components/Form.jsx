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
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [agreedToCommunications, setAgreedToCommunications] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            first_name: firstName,
            last_name: lastName,
            user_email: email,
            user_phoneNumber: phoneNumber,
            user_subject: subject,
            user_message: message,
            agreed_to_communications: agreedToCommunications ? 'Yes' : 'No',
            agreed_to_terms: agreedToTerms ? 'Yes' : 'No',
        };

        emailjs.send('service_l8j1ytl', 'template_gkb9zeq', templateParams, 'rcWUEyKg3TYfCLt2-')
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="2xl:w-[70%] md:w-[50%] max-w-5xl mx-auto flex md:flex-row flex-col md:gap-0 gap-8 items-center justify-center px-10 py-2">
            <div className="w-full px-10 py-10 bg-[#000000] rounded-xl flex flex-col justify-center items-center gap-4">
                <div>
                    <h2 className="w-full text-3xl 2xl:text-4xl font-RobotoBold mb-1 wordGradient text-center">
                        Contact Quantum AI Global
                    </h2>
                    <div className='font-RobotoMedium w-full text-[#28ABE3] text-sm 2xl:text-lg mb-1 text-center'>
                        We’re available to quickly answer any questions you might have.
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="w-full md:mb-4 mb-1 flex text-sm items-center justify-center gap-2">
                        <div className='w-[50%] buttonclass'>
                            <input
                                type="text"
                                id="firstname"
                                name="first_name"
                                placeholder='First Name'
                                className="md:p-3 w-full font-RobotoRegular text-[#ffffff] rounded-xl bg-[#000000]"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='w-[50%] buttonclass'>
                            <input
                                type="text"
                                id="lastname"
                                name="last_name"
                                placeholder='Last Name'
                                className="md:p-3 w-full font-RobotoRegular text-[#ffffff] rounded-xl bg-[#000000]"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full md:mb-4 mb-1 flex text-sm items-center justify-center gap-2">
                        <div className='w-[50%] buttonclass'>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                placeholder='Email'
                                className="md:p-3 w-full font-RobotoRegular text-[#ffffff] rounded-xl bg-[#000000]"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='w-[50%] buttonclass'>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="user_phoneNumber"
                                placeholder='Phone number'
                                className="md:p-3 w-full font-RobotoRegular text-[#ffffff] rounded-xl bg-[#000000]"
                                required
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
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
                                className="md:p-3 w-full font-RobotoRegular text-[#ffffff] rounded-xl bg-[#000000]"
                                required
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full md:mb-4 text-sm mb-1 buttonclass">
                        <textarea
                            id="message"
                            name="user_message"
                            placeholder='Type your Message'
                            rows="4"
                            className="md:p-3 w-full font-RobotoRegular text-[#ffffff] rounded-xl bg-[#000000]"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='flex gap-1 my-2'>
                        <input
                            type="checkbox"
                            id="agreedToCommunications"
                            checked={agreedToCommunications}
                            onChange={(e) => setAgreedToCommunications(e.target.checked)}
                        />
                        <label className='font-RobotoRegular text-[#ffffff] text-sm' htmlFor="agreedToCommunications">
                            I agree to receive other communications from Quantum AI Global.
                        </label>
                    </div>
                    <div className='flex gap-1 my-2'>
                        <input
                            type="checkbox"
                            id="agreedToTerms"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                        />
                        <label className='font-RobotoRegular text-[#ffffff] text-sm' htmlFor="agreedToTerms">
                            I accept the Terms of Use and privacy policy*
                        </label>
                    </div>
                    <div className='font-RobotoRegular text-[#ffffff] text-justify text-sm my-2'>
                        By clicking submit below, you consent to allow Quantum Computing Inc. to store and process the personal information submitted above to provide you the content requested.
                    </div>
                    <div className="flex justify-center text-center">
                        <HoverBorderButton
                            containerClassName="rounded-full"
                            as="button"
                            type="submit"
                            className="bg-black font-RobotoMedium text-sm text-white flex items-center px-3 py-1"
                        >
                            <span>Submit</span>
                        </HoverBorderButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
