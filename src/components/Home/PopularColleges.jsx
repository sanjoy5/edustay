import React, { useEffect, useState } from 'react';
import HomeColleges from './HomeColleges';


const PopularColleges = ({ colleges }) => {


    return (
        <section className='pt-14 pb-10 max-w-7xl mx-auto px-4'>
            <h2 className="text-3xl font-semibold  text-center uppercase  mb-16">Popular Colleges</h2>


            <div className="flex flex-wrap">
                <div className="flex flex-wrap -m-4">

                    <HomeColleges colleges={colleges.slice(0, 3)} />

                </div>
            </div>


        </section>
    );
};

export default PopularColleges;