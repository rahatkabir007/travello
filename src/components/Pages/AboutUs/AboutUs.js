import React from 'react';
import Header from '../Shared/Header/Header';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div className="header-area">
                <nav className="navbar navbar-expand-lg fixed-top py-4">
                    <Header></Header>
                </nav>
            </div>
            <div className="aboutus-intro-section">
                <h1>About Us</h1>
            </div>
        </div>
    );
};

export default AboutUs;