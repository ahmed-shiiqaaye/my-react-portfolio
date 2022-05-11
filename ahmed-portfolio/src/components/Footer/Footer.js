import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer>
        <div className="container">
            <p>&copy; Copyright 2022. Created & developer by <span>ahmed abdirahman</span></p>
        <div className="social-icons">
              <a href="https://twitter.com/ahmedshiiqa6/" target='_blank'><i className="fa fa-twitter"></i></a>
              <a href="https://www.linkedin.com/in/ahmed-abdirahman-710610234/" target='_blank'><i className="fa fa-linkedin"></i></a>
              <a href="https://github.com/ahmed-shiiqaaye" target='_blank'><i className="fa fa-github"></i></a>
              <a href="mailto:ahmedshiiqa6@gmail.com" target='_blank'><i className="fa fa-envelope"></i></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer