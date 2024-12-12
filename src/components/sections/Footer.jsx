import React from 'react'
import { header, social } from '../../profile-data'

function Footer() {
  return (
    <div className="relative my-4 p-6 mx-auto">
      <div className="text-white text-center">
        <p id="not-dark" className="text-xs sm:text-sm md:text-base">
          2021 © Copyright <strong>{header.name}</strong>. All Rights Reserved
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        {social.linkedin && (
          <a
            title="Visit Linkedin profile"
            rel="noopener noreferrer"
            target="_blank"
            href={social.linkedin}
            className="text-white hover:text-blue-500 text-lg sm:text-xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        )}
        {social.facebook && (
          <a
            title="Visit Facebook profile"
            rel="noopener noreferrer"
            target="_blank"
            href={social.facebook}
            className="text-white hover:text-blue-700 text-lg sm:text-xl"
          >
            <i className="fab fa-facebook"></i>
          </a>
        )}
        {social.twitter && (
          <a
            title="Visit Twitter profile"
            rel="noopener noreferrer"
            target="_blank"
            href={social.twitter}
            className="text-white hover:text-blue-400 text-lg sm:text-xl"
          >
            <i className="fab fa-twitter"></i>
          </a>
        )}
        {social.instagram && (
          <a
            title="Visit Instagram profile"
            rel="noopener noreferrer"
            target="_blank"
            href={social.instagram}
            className="text-white hover:text-pink-500 text-lg sm:text-xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
        )}
        {social.github && (
          <a
            title="Visit Github profile"
            rel="noopener noreferrer"
            target="_blank"
            href={social.github}
            className="text-white hover:text-gray-900 text-lg sm:text-xl"
          >
            <i className="fab fa-github"></i>
          </a>
        )}
      </div>
    </div>
  )
}

export default Footer;
