import React from 'react'
import Project from '../layouts/Project'
import { projects, section3Title } from '../../profile-data'

const ProjectSec = () => {
    return (
        <div className="relative py-12">
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <div className="pp-head-line mx-auto text-center text-cream mb-10">
                    {/* Heading with Tailwind CSS styling */}
                    <h1 id="Projects" className="text-3xl font-bold text-cream border-b-4 border-cream pb-2">
                        {section3Title}
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project cards */}
                    {projects && projects.map((x) => (
                        <Project 
                            key={x.id} 
                            id={x.id} 
                            url={x.url} 
                            name={x.name} 
                            skills={x.skills} 
                            imageUrl={x.img} // Pass imageUrl prop to Project component
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectSec
