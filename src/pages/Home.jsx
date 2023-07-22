import React from 'react';
import Banner from '../components/Home/Banner';
import PopularColleges from '../components/Home/PopularColleges';
import Gallery from '../components/Home/Gallery';

const Home = () => {
    return (
        <>
            <Banner />
            <PopularColleges />
            <Gallery />
        </>
    );
};

export default Home;