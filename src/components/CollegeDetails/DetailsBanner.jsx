import React from 'react';

import CollegeRating from './CollegeRating';

const DetailsBanner = ({ college }) => {
    const { collegeImage, collegeName, rating } = college;
    return (
        <>
            <div className="hero h-[500px] w-full" style={{ backgroundImage: `url(${collegeImage})` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full px-4 md:px-16">
                        <div className="flex items-center justify-center">
                            <CollegeRating value={rating} text={`${rating} stars rating`} color={'#FF982E'} />
                        </div>
                        <h1 className="mb-5 text-4xl md:text-5xl font-bold">{collegeName}</h1>



                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsBanner;