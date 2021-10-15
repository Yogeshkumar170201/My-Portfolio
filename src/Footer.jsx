import React from 'react'
import './index.css'
import {Container, Nav } from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const year = new Date().getFullYear()

const Footer = ()=>{
    return (
        <>
            <Nav className="justify-content-center foot">
                <Container className = "justify-content-center foot-outer">
                    <Container className = 'foot-inner1'>
                        <span> ©️ {year} Made with ❤️ by YK</span>
                    </Container>
                    <Container className = 'foot-inner2'>
                        <a href = "https://www.facebook.com/profile.php?id=100057448791356" target = "_blank"><FacebookIcon className = 'foot-icon' /></a>
                        <a href = "https://www.instagram.com/yogi_ka_photu/" target="_blank"><InstagramIcon className = 'foot-icon' /></a>
                        <a href = "https://www.linkedin.com/in/yogesh-kumar-1313491aa/" target="_blank"><LinkedInIcon className = 'foot-icon' /></a>
                        <a href = "https://twitter.com/YogeshK170201" target = "_blank"><TwitterIcon className = 'foot-icon' /></a>
                    </Container>
                </Container>
            </Nav>
        </>
    )
}

export default Footer