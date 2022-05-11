import React from 'react'
import './Hero.css'
function Hero() {
  return (
      <main>
          <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#d0efff" fill-opacity="1" d="M0,288L720,224L1440,160L1440,320L720,320L0,320Z"></path>
</svg>
          <div className="container">
              <h2>Ahmed Abdirahman</h2>
              <p className="job">I'm front-end developer | web developer.</p>
            <div className="btns">
              <a href='#' className="outline">Resume <i className="fa fa-file"></i></a>
              <a href='#' className="dark">Projects </a>
            </div>
            <div className="social-icons">
              <a href="https://twitter.com/ahmedshiiqa6/" target='_blank'><i className="fa fa-twitter"></i></a>
              <a href="https://www.linkedin.com/in/ahmed-abdirahman-710610234/" target='_blank'><i className="fa fa-linkedin"></i></a>
              <a href="https://github.com/ahmed-shiiqaaye" target='_blank'><i className="fa fa-github"></i></a>
              <a href="mailto:ahmedshiiqa6@gmail.com" target='_blank'><i className="fa fa-envelope"></i></a>
            </div>
          </div>
      </main>
  )
}

export default Hero