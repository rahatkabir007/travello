import React from 'react';
import Destination from '../Destination/Destination';
import Banner from '../Home/Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import Header from '../Shared/Header/Header';
import Facilities from './Facilities/Facilities';
import HomeAbout from './HomeAbout/HomeAbout';
import Review from './Review/Review';
import Footer from './../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <Facilities></Facilities>
            <Destination></Destination>
            <HomeServices></HomeServices>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;