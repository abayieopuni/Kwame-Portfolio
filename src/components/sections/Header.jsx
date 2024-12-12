import React from 'react';
import HeaderButton from '../layouts/HeaderButton';
import { header } from '../../profile-data'


const Header = () => {


  const scrollTo = () => {
    window.scrollTo({
        top: 100000,
        left: 0,
        behavior: "smooth"
    })
  }

  const toggleDarkMode = (e) =>  {
    document.documentElement.classList.toggle('dark-mode')
    document.getElementById('not-dark').classList.toggle('inverse-dark')
    document.getElementById('not-dark2').classList.toggle('inverse-dark')
    var x = document.getElementsByClassName('img-pro')
    for(let i = 0; i < x.length; i += 1) {
        x.item(i).classList.toggle("inverse-dark");
    }
    
    if (document.documentElement.classList.contains('dark-mode'))
      localStorage.setItem('mode', 'Dark')
    else
      localStorage.setItem('mode', 'Light')
    }


  return (
    <div className="h-screen bg-white-500 flex flex-col text-center items-center sm:text text-white justify-center relative shadow-lg z-10">
      <div>
        <h1 className="text-7xl font-bold mb-4">{header.name}</h1>
        <p className="line-1  text-xl mb-6 animate-typewriter ">
          Jr. Full Stack Web Developer
        </p>
        {/*
        <label className="switch absolute top-4 right-4 flex items-center space-x-2 z-10">
          <input
            id="mode-switch"
            onClick={toggleDarkMode}
            type="checkbox"
            className="hidden"
          />
          <span className="slider relative cursor-pointer w-12 h-6 bg-white transition-all duration-400 rounded-full">
            <span className="absolute left-1 top-1 w-4 h-4 bg-desertSun rounded-full transition-transform transform checked:left-7"></span>
          </span>
          <span className="text-sm"></span>
        </label>
        -->
         */}
        <HeaderButton/>
 



      </div>
      <img
        id="not-dark"
        onClick={scrollTo}
        alt="Contact Me"
        title="Contact Me"
        className=" absolute  cursor-pointer rounded-r-lg w-14 h-14 border-4 top-1 left-2 items-center sm:rounded-r-sm  shadow-inner border-white"
        src='profile.png'
      />
    </div>
  );
};



export default Header;