import React from "react";
import Home from "./Home";
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'
import  Navbar  from './Navbar'
import Footer from './Footer'


const App = ()=>{
    return(
        <>
            <Navbar style = {{position:'fixed'}} />
            <br/><br/><br/><br/>
            <div id = 'home'>
                <Home/>
            </div>
            
            <br/><br/>
            <div id = 'about'>
                <About/>
            </div>
            <div id = 'skills'>
                <Skills/>
            </div>
            <div id = 'projects'>
                <Projects/>
            </div>
            <div id = 'contact'>
                <Contact/>
            </div>
            <Footer/>
        </>
    )
}

export default App