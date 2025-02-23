import React from 'react'
import { contact, section5title } from '../../profile-data'

const Contact = () => {
    return (
        <div className="relative bg-cream text-cream p-4 m-3 shadow-inner shadow-[inset_10px_40px_40px_rgba(0,0,0,0.7)] flex flex-col justify-center items-center">
            <div data-aos="zoom-in-up" data-aos-once="true" className="git-form w-full sm:w-[80%] lg:w-[60%] mx-auto my-12 bg-white max-h-[80vh] p-8 rounded-lg shadow-lg">
                <div className="git-head-div pt-5 pb-4 border-b-3 border-black text-center font-medium text-black">
                    <h1 id="Contact" className="text-3xl sm:text-4xl lg:text-5xl text-desertSun">{section5title}</h1>
                </div>
                
                <div className="container mx-auto px-4 bg-coral">
                    <div className="git-cont inline-block">
                        <div className="w-full px-4">
                            <form 
                                action={contact.contactUrl ? contact.contactUrl : "mailto:abayieopuni1@gmail.com"} 
                                method={contact.contactUrl ? "POST" : "GET"} 
                                className="space-y-6 py-12 px-4"
                            >
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Your Name"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-desertSun focus:outline-none"
                                />
                                <input
                                    type="email"
                                    id="mailid"
                                    name="Email"
                                    placeholder="Email Address"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md  text-black  focus:ring-2 focus:ring-desertSun focus:outline-none"
                                />
                                <input
                                    type="text"
                                    id="sub"
                                    name="Subject"
                                    placeholder="Subject"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md   text-black focus:ring-2 focus:ring-desertSun focus:outline-none"
                                />
                                <textarea
                                    id="msg"
                                    name="message"
                                    placeholder="Message"
                                    required
                                    className="w-full p-3 border border-gray-300  text-black  rounded-md focus:ring-2 focus:ring-desertSun focus:outline-none"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full py-3 text-coral bg-cream rounded-full  mt-5 hover:bg-desertSun focus:outline-none focus:ring-2 focus:ring-red-400"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;

