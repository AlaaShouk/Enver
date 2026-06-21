import React from 'react'
import './VideoSection.css'

import team from '/assets/BG.png'

const VideoSection = () => {
  return (
    <div>
     <section className="video-section">
      <div className="video-header">
        <h2>
          Why Enver Is The
          Best Choice?
        </h2>
        <p>
          Watch this one minute video so you understand why you should
          use our services!
        </p>
      </div>

      <div className="video-container">
        <img
          src={team}
          alt="team"
        />
      </div>
    </section>
    </div>
  )
}

export default VideoSection