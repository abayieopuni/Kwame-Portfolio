import React from 'react';
import HeaderButton from '../layouts/HeaderButton';
import { header } from '../../profile-data';

const Header = () => {

  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      left: 0,
      behavior: "smooth"
    });
  };

  const toggleDarkMode = (e) =>  {
    document.documentElement.classList.toggle('dark-mode');
    document.getElementById('not-dark').classList.toggle('inverse-dark');
    document.getElementById('not-dark2').classList.toggle('inverse-dark');
    var x = document.getElementsByClassName('img-pro');
    for (let i = 0; i < x.length; i += 1) {
      x.item(i).classList.toggle("inverse-dark");
    }
    
    if (document.documentElement.classList.contains('dark-mode'))
      localStorage.setItem('mode', 'Dark');
    else
      localStorage.setItem('mode', 'Light');
  };

  return (
    <div className="h-screen bg-white-500 flex flex-col text-center items-center sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white justify-center relative shadow-lg z-10">
      <div className="w-full max-w-5xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">{header.name}</h1>
        <p className="text-xl sm:text-2xl mb-6 animate-typewriter">
          Full Stack Developer
        </p>
        <HeaderButton/>
      </div>

      {/* Profile image button */}
      <img
        id="not-dark"
        onClick={scrollTo}
        alt="Contact Me"
        title="Contact Me"
        className="absolute cursor-pointer rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 border-4 border-white shadow-inner transition-all duration-300"
        src='profile.png'
      />
    </div>
  );
};

export default Header;
