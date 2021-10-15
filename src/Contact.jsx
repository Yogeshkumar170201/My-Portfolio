import React from "react";
import contact from './contact.jpeg'

const Contact = ()=>{
    return(
        <div className = 'contact-outer'>
            <h1 style = {{textAlign:'center'}}> Contact </h1>
            <div className = 'contact-inner'>
                <div className = 'contact-inner1'>
                    <img src = {contact} alt = 'contact' height='300px' style = {{ borderRadius:'10px', boxShadow:'0px 1px 1px 1px #adaba6'}} />
                </div>
                <div className = 'contact-inner2'>
                    <span className = 'contact-head'>Mobile No.</span>
                    <span>+91-9717584849</span>
                    <span className = 'contact-head'>E-mail</span>
                    <span><a href="mailto:yogeshkumar170201@gmail.com">yogeshkumar170201@gmail.com</a></span>
                    <span className = 'contact-head'>LinkedIn</span>
                    <span><a href = 'https://www.linkedin.com/in/yogesh-kumar-1313491aa/' target = '_blank'>https://www.linkedin.com/in/yogesh-kumar-1313491aa/</a></span>
                </div>
            </div>
        </div>
    )
}

export default Contact