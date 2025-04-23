import React from 'react';
import Banner from './Banner';
import Support from './Support';
import AboutUs from './AboutUs';
import FeaturedEvent from './FeaturedEvent';
import ImpactStats from './ImpactStats';
import Testimonial from './Testimonial';
import CallToAction from './CallToAction';
import EcoTips from './EcoTips';
import OurMission from './OurMission';
import Achievements from './Achievements';
import EcoChat from './EcoChat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Support></Support>
            <AboutUs></AboutUs>
            <FeaturedEvent></FeaturedEvent>
            <OurMission></OurMission>
            <EcoTips></EcoTips>
            <Achievements></Achievements>
            <ImpactStats></ImpactStats>
            <Testimonial></Testimonial>
            <EcoChat></EcoChat>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;