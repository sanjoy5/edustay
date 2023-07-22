import React, { useEffect, useState } from 'react';
import Colleges from './Colleges';

const PopularColleges = () => {
    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch('colleges.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setColleges(data)
            })
    }, [])

    return (
        <section className='pt-24 pb-10 max-w-7xl mx-auto px-4'>
            <h2 className="text-3xl font-semibold  text-center uppercase  mb-16">Popular Colleges</h2>


            <div className="flex flex-wrap">
                <div className="flex flex-wrap -m-4">

                    <Colleges colleges={colleges} />

                </div>
            </div>


        </section>
    );
};

export default PopularColleges;