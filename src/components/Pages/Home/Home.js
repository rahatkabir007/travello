import React from 'react';
import Destination from '../Destination/Destination';
import Banner from '../Home/Banner/Banner';
import HomeServices from './HomeServices/HomeServices';
import Facilities from './Facilities/Facilities';
import HomeAbout from './HomeAbout/HomeAbout';
import Review from './Review/Review';
import Header from '../Shared/Header/Header';



const Home = () => {
    return (
        <div>
            <div className="header-area">
                <nav className="navbar navbar-expand-lg fixed-top py-4">
                    <Header></Header>
                </nav>
            </div>

            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <Facilities></Facilities>
            <Destination></Destination>
            <HomeServices></HomeServices>
            <Review></Review>
        </div>
    );
};

export default Home;