import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner-area">
            <div className="banner-text">
                <h1>Explore Your Travel Destinations Like Never Before</h1>
                <p>Travelo operate life changing group travel experiences across Asia, South Asia and beyond. Adventure starts here!</p>
                <a href="/booking" className="primary-btn" style={{ textDecoration: "none" }} >Book Now</a>
           </div>
        </div>
    );
};

export default Banner;