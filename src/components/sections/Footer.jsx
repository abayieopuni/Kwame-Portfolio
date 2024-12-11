import React from 'react'
import { header,social } from '../../profile-data'

function Footer() {
  return (
    <div className='bg-red-700 relative my-4 p-6 mx-auto'>
      <div>
        <p id="not-dark" className="Copy">2021 © Copyright <strong>{header.name}</strong>. All Rights Reserved</p>
      </div>

                <div className="inline-block gap-3">
                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                    {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
                    {social.twitter && <a title="Visit Twitter profile" rel="noopener noreferrer" target="_blank" href={social.twitter}><i className="fab fa-twitter"></i></a>}
                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br/>
                </div>
  
    </div>
  )
}
;
export default Footer