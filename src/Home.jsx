import React from 'react'

import Photo from './yk.jpg'

import Typical from 'react-typical'



const desg = {
    borderRadius:'20px',
    boxShadow : '0px 1px 1px 1px white',
    opacity : '1.0'
}

const Home = ()=>{
    return(
        <>
            <div className = 'home-outer'>
                <div className = 'home-inner1'>
                    <img src = {Photo} width="250px" alt = 'photo' style = {desg}/>
                </div>
                <div className = 'home-inner2'>
                    <h1> Hello Everyone 😃 </h1>
                    <Typical
                        steps={['I am Yogesh Kumar', 2000, 'I am योगेश कुमार', 2000, 'I am a Web Developer', 2000, 'I am a Competitive Programmer', 2000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
            </div>
        </>
    )
}

export default Home