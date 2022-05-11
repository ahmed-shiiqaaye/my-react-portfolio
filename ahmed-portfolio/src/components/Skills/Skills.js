import React from 'react'
import './Skills.css'
function Skills() {
  return (
    <section className="skills">
        <div className="container">
            <div className="title">
                <h2><span>My</span> skills</h2>
            </div>
            <div className="grid">
                <div className="card">
                    <i className="fa fa-html5"></i>
                    <h3>Html5</h3>
                </div>
                <div className="card">
                    <i className="fa fa-css3"></i>
                    <h3>css3</h3>
                </div>
                <div className="card">
                    <i className="fab fa-js"></i>
                    <h3>Html5</h3>
                </div>
                <div className="card">
                    <i className="fab fa-sass"></i>
                    <h3>Html5</h3>
                </div>
                <div className="card">
                    <i className="fab fa-bootstrap"></i>
                    <h3>Html5</h3>
                </div>
                <div className="card">
                    <i className="fab fa-react"></i>
                    <h3>Html5</h3>
                </div>
                <div className="card">
                    <i className="fa fa-github"></i>
                    <h3>Html5</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills