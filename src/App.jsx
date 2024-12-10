import React, { useEffect } from "react";
import Particles from "./components/layouts/Particles";
import Header from "./components/sections/Header";


const App = () => {
  return (
    <div >
      <Header/>
      {/* Particle Background */}
      <Particles/>
      
    </div>
  );
};

export default App;
