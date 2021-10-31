import React from 'react';
import Destination from '../Destination/Destination';
import Banner from '../Home/Banner/Banner';
import HomeServices from './HomeServices/HomeServices';
import Facilities from './Facilities/Facilities';
import HomeAbout from './HomeAbout/HomeAbout';
import Review from './Review/Review';



const Home = () => {
    return (
        <div>
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