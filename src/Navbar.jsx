import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


const NavBar = ()=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg nav-head navbar-fixed-top">
                <div className="container-fluid">
                    <a href = '#home' className="navbar-brand" ><span className = 'logo-nav' style = {{color:"#b5ccff"}}>YK</span></a>
                    <button style = {{color:"white"}} className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span style = {{color:"white"}} className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href = '#home' className="nav-link" aria-current="page" ><span className = 'menu-head'>Home</span></a>
                            </li>
                            <li className="nav-item">
                                <a href = '#about' className="nav-link" ><span className = 'menu-head'>Education</span></a>
                            </li>
                            <li className="nav-item">
                                <a href = '#skills' className="nav-link" ><span className = 'menu-head'>Skills</span></a>
                            </li>
                            <li className="nav-item">
                                <a href = '#projects' className="nav-link" ><span className = 'menu-head'>Projects</span></a>
                            </li>
                            <li className="nav-item">
                                <a href = '#contact' className="nav-link" ><span className = 'menu-head'>Contact</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar