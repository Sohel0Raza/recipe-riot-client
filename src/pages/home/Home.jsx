import React from 'react';
import HomeBanner from './HomeBanner';
import AllChef from './AllChef';
import SpacialRecipe from './SpacialRecipe';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <AllChef></AllChef>
            <SpacialRecipe/>
        </div>
    );
};

export default Home;