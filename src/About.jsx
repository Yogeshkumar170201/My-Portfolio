import React from 'react'
import photo from './edu.jpg'

const About = ()=>{
    return(
        <>
            <div className = 'about-outer'>
                <div className = 'about-img'>
                    <img src = {photo} alt = 'photo' width = '250px' style = {{borderRadius:'20px', boxShadow:'0px 2px 2px white'}}/>
                </div>
                <div className = 'about-inner'>
                    <div className = 'about-head'>
                        <h1> Education </h1>
                    </div>
                    <div className = 'about-item'>
                        <span className = 'about-subhead'> Class 10th </span>
                        <span> Bharat Shakti Public School </span>
                        <span> 10 CGPA </span>
                    </div>
                    <div className = 'about-item'>
                        <span className = 'about-subhead'> Class 12th </span>
                        <span> S.C.S.D. Sarvodaya Vidyalaya </span>
                        <span> 92% </span>
                    </div>
                    <div className = 'about-item'>
                        <span className = 'about-subhead'> Graduation </span>
                        <span> Delhi Technological University </span>
                        <span> 8.76 CGPA (Till Now) </span>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default About