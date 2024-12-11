import React, { useEffect } from "react";
import Particles from "./components/layouts/Particles";
import Header from "./components/sections/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Projectsec from "./components/sections/ProjectSec";



const App = () => {
  return (
    <div >
      <Header/>
      {/* Particle Background */}
      <Particles/>    
      <About/>
      <Projectsec/>
      <Contact/>
      <Footer/>
     
    </div>
  );
};

export default App;
