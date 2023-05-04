import React from 'react';
import HomeBanner from './HomeBanner';
import AllChef from './AllChef';
import SpacialRecipe from './SpacialRecipe';
import AboutUs from './AboutUs';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
    const {loading} = useContext(AuthContext);

    if(loading){
        return <div className='text-center md:mt-40'><progress className="progress w-56"></progress></div>
    }
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