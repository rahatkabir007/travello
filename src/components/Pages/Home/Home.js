import React from 'react';
import Destination from '../Destination/Destination';
import Banner from '../Home/Banner/Banner';
import HomeServices from './HomeServices/HomeServices';
import Facilities from './Facilities/Facilities';
import HomeAbout from './HomeAbout/HomeAbout';
import Review from './Review/Review';
import ContactForm from './ContactForm/ContactForm';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <Facilities></Facilities>
            <Destination></Destination>
            <HomeServices></HomeServices>
            <Review></Review>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;