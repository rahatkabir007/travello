import React from 'react';
import HomeServices from '../Home/HomeServices/HomeServices';

import './MainServices.css';
const MainServices = () => {
    return (
        <div>
            <div className="main-services-intro-section">
                <h1>Our Services</h1>
            </div>
            <div className="main-services-section my-5">
               <HomeServices></HomeServices>
            </div>
        </div>
    );
};

export default MainServices;