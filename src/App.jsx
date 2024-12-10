import React, { useEffect } from "react";
import Particles from "./components/layouts/Particles";
import Header from "./components/sections/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";



const App = () => {
  return (
    <div >
      <Header/>
      {/* Particle Background */}
      <Particles/>    
      <About/>
      <Contact/>
     
    </div>
  );
};

export default App;
