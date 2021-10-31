import React from 'react';
import HomeServices from '../Home/HomeServices/HomeServices';
import Header from '../Shared/Header/Header';
import './MainServices.css';
const MainServices = () => {
    return (
        <div>
            <div className="header-area">
                <nav className="navbar navbar-expand-lg fixed-top py-4">
                    <Header></Header>
                </nav>
            </div>
            <div className="main-services-intro-section">
                <h1>Our Services</h1>
            </div>
            <div className="container main-services-section my-4 p-3">
               <HomeServices></HomeServices>
            </div>
        </div>
    );
};

export default MainServices;