import React from 'react'
import "./navbar.css"
const Navbar = () => {
    return (
        <div className='container-fluid mainnav'>
            <img src='https://cdn.phenompeople.com/CareerConnectResources/prod/COGNGLOBAL/images/Cognizant-logo-2022-155x48-1649775826145.png' alt="logo"></img>
            <ul>
                <li>Careers Home</li>
                <li>Get to know us</li>
                <li>Our Core Values</li>
                <li>Diversity & Inclusion</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li> | Saved Jobs</li>
            </ul>
        </div>
    )
}

export default Navbar