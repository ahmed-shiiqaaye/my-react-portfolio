import React from 'react'
import './About.css'
function About() {
  return (
    <section className="about" id='about'>
        <div className="container">
            <div className="title">
                <h2>About <span>Me</span></h2>
            </div>
            <div className="flex">
              <div className="img">
              <img src="img/me3.jpg" alt="" />
              </div>
              <div className="text">
                <p>Hello, I'm Ahmed and I'm passionate web developer able to build a web presence from the ground up. I work hard, I care about writing clean code and I genuinely love to learn. I'm skilled at writing well designed, and efficient code using current Front-end web development languages. I'm fast learner, hard worker and team player.</p>
                <a href="#" className='btn'>View more <i className="fa fa-linkedin-square"></i></a>
              </div>
            </div>
        </div>
    </section>
  )
}

export default About