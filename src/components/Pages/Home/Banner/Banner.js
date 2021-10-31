import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner-area">
            <div className="banner-text">
                <h1>Explore Your Travel Destinations Like Never Before</h1>
                <p>Travelo operate life changing group travel experiences across Asia, South Asia and beyond. Adventure starts here!</p>
                <Link to="/mainServices" className="primary-btn" style={{ textDecoration: "none" }} >Book Now</Link>
           </div>
        </div>
    );
};

export default Banner;