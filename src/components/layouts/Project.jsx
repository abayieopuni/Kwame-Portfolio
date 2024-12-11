import React from 'react'

const Project = ({ id, name, url, skills, imageUrl }) => {
    return (
        <div data-aos="fade-up" className="col-12 col-lg-4 project-card text-cream ">
            <div className="relative">
                {/* Add image directly with Tailwind CSS styling */}
                <img 
                    src={imageUrl} 
                    alt={name} 
                    className="w-full h-80 object-cover rounded-lg shadow-xl" 
                />
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}>
                <h2 className="text-xl font-semibold mt-4">{name}</h2>
            </a>
            {skills && <h3 className="text-sm text-coral  mt-2">{skills.join(", ")}</h3>}
        </div>
    )
}

export default Project
