import React from 'react';
import HomeBanner from './HomeBanner';
import AllChef from './AllChef';
import SpacialRecipe from './SpacialRecipe';
import AboutUs from './AboutUs';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <AllChef></AllChef>
            <SpacialRecipe/>
            <AboutUs/>
        </div>
    );
};

export default Home;