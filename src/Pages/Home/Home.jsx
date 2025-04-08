import React from 'react';
import Banner from './Banner';
import Support from './Support';
import AboutUs from './AboutUs';
import FeaturedEvent from './FeaturedEvent';
import ImpactStats from './ImpactStats';
import Testimonial from './Testimonial';
import CallToAction from './CallToAction';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Support></Support>
            <AboutUs></AboutUs>
            <FeaturedEvent></FeaturedEvent>
            <ImpactStats></ImpactStats>
            <Testimonial></Testimonial>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;