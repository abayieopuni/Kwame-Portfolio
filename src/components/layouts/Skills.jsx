import React from 'react';

const Skills = ({ label, svg, faClass, color }) => {
  return (
    <div
      data-aos="fade-up"
      className="skill__square flex flex-col items-center justify-center my-4 mx-auto text-center w-20 sm:w-24 md:w-28 lg:w-32 transition-all transform hover:scale-105"
      style={{ display: 'inline-block' }}
    >
        <i
          className={`${faClass} } text-4xl mb-2`}
        />
      <h6 className="text-[#777] text-sm mt-2">{label}</h6>
    </div>
  );
};

export default Skills;
