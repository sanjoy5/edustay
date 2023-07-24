import React, { useEffect, useState } from 'react';
import Banner from '../components/Home/Banner';
import PopularColleges from '../components/Home/PopularColleges';
import Gallery from '../components/Home/Gallery';
import ReviewSlider from '../components/ReviewSlider';

const Home = () => {

    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch('https://edustay-server.vercel.app/colleges')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setColleges(data)
            })
    }, [])

    return (
        <>
            <Banner />
            <PopularColleges colleges={colleges} />
            <Gallery />
            <ReviewSlider />
        </>
    );
};

export default Home;