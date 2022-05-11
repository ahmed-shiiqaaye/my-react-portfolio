import React from 'react'
import './Projects.css'
function Projects() {
  return (
    <section className="projects">
        <div className="container">
            <div className="title">
                <h2><span>My </span>Projects</h2>
                <p>These are my projects that I have been working recently. <span>Feel free see.</span> </p>
            </div>
            <div className="grid_projects">
                
                <div className="card_project">
                    <a href="" className='img-link'>
                        <img src="../img/fast.png" alt="" />
                    </a>
                    <div className="preview_links">
                        <a href="" className="a1">live preview <i className="fa fa-eye"></i></a>
                        <a href="" className="a2">see code <i className="fa fa-code"></i></a>
                    </div>
                </div>
                <div className="card_project">
                    <a href="" className='img-link'>
                        <img src="../img/Screenshot (22).png" alt="" />
                    </a>
                    <div className="preview_links">
                        <a href="" className="a1">live preview <i className="fa fa-eye"></i></a>
                        <a href="" className="a2">see code <i className="fa fa-code"></i></a>
                    </div>
                </div>
                <div className="card_project">
                    <a href="" className='img-link'>
                        <img src="../img/hana.png" alt="" />
                    </a>
                    <div className="preview_links">
                        <a href="" className="a1">live preview <i className="fa fa-eye"></i></a>
                        <a href="" className="a2">see code <i className="fa fa-code"></i></a>
                    </div>
                </div>
                <div className="card_project">
                    <a href="" className='img-link'>
                        <img src="../img/abiani.png" alt="" />
                    </a>
                    <div className="preview_links">
                        <a href="" className="a1">live preview <i className="fa fa-eye"></i></a>
                        <a href="" className="a2">see code <i className="fa fa-code"></i></a>
                    </div>
                </div>
                <div className="card_project">
                    <a href="" className='img-link'>
                        <img src="../img/navada.png" alt="" />
                    </a>
                    <div className="preview_links">
                        <a href="" className="a1">live preview <i className="fa fa-eye"></i></a>
                        <a href="" className="a2">see code <i className="fa fa-code"></i></a>
                    </div>
                </div>
                <div className="card_project">
                    <a href="" className='img-link'>
                        <img src="../img/mofit.png" alt="" />
                    </a>
                    <div className="preview_links">
                        <a href="" className="a1">live preview <i className="fa fa-eye"></i></a>
                        <a href="" className="a2">see code <i className="fa fa-code"></i></a>
                    </div>
                </div>
      
            </div>
        </div>
    </section>
  )
}

export default Projects