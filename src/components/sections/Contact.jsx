import React from 'react'
import { contact, section5title } from '../../profile-data'

const Contact = () => {
    return (
        <div className="relative bg-cream text-cream p-4 m-3 shadow-inner shadow-[inset_10px_40px_40px_rgba(0,0,0,0.7)] flex flex-col justify-center items-center">
        <div data-aos="zoom-in-up" data-aos-once="true" className="git-form w-full sm:w-[1160px] mx-12 my-12 bg-white max-h-[80vh]">
          <div className="git-head-div pt-5 pb-4  border-b-3 border-black text-center font-medium text-black">
            <h1 id="Contact" className="text-3xl text-desertSun ">{section5title}</h1>
          </div>
      
          <div className="container mx-auto px-4 bg-coral">
            <div className="git-cont inline-block">
              <div className="w-full  px-4">
                <form action={contact.contactUrl ? contact.contactUrl : "mailto:amna.syeda98@gmail.com"} method={contact.contactUrl ? "POST" : "GET"} className="space-y-4 py-12 px-4">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    id="mailid"
                    name="Email"
                    placeholder="Email Address"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    id="sub"
                    name="Subject"
                    placeholder="Subject"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <textarea
                    id="msg"
                    name="message"
                    placeholder="Message"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-3 text-coral text bg-cream rounded-full mt-5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default Contact
