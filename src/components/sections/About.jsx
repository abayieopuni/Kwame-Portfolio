import React from 'react';
import Skills from '../layouts/Skills';
import { about, skillsBar, section2title } from '../../profile-data';

const About = () => {
    return (
        <div id="about" className="relative bg-cream text-cream p-4 m-3 shadow-inner shadow-[inset_10px_40px_40px_rgba(0,0,0,0.7)]">
            <div className="relative w-full sm:w-[80%] md:w-[70%] bg-desertSun p-5 my-10 mx-auto border-b border-[#777] rounded-lg shadow-lg">
                <div className="absolute content-[''] bottom-[15px] left-[10px] w-[50%] top-[10%] max-w-[300px] bg-[#777] shadow-[0_15px_10px_#777] transform -rotate-[3deg] z-[-1]"></div>
                <div className="absolute content-[''] bottom-[15px] right-[10px] w-[50%] top-[10%] max-w-[300px] bg-[#777] shadow-[0_15px_10px_#777] transform rotate-[3deg] z-[-1]"></div>
                <div data-aos="zoom-in-up" data-aos-once="true" className="flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/3 px-4 mb-6 shadow-inner shadow-[inset_10px_40px_40px_rgba(0,0,0,0.7)]">
                        <img
                            src="/remi.jpeg"
                            alt="Profile"
                            className="w-full h-auto rounded-lg object-cover shadow-inner shadow-[inset_10px_40px_40px_rgba(0,0,0,0.7)]"
                        />
                    </div>
                    <div className="w-full md:w-2/3 px-4">
                        <div className="About-title-box box-border w-full sm:w-[50%] pb-1 border-b-2 border-primary mb-4">
                            <h1 id="About" className="text-cream-600 font-bold text-xl sm:text-2xl md:text-3xl">{section2title}</h1>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg">{about.paragraph}</p>
                    </div>
                </div>
            </div>
            <div id="Skills" className="mt-6">
                <div className="flex justify-center items-center flex-wrap gap-4 text-desertSun skills">
                    {skillsBar.map((x) => (
                        <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;


