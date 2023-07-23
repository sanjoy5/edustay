import React from 'react';

const DetailsBanner = () => {
    return (
        <>
            <div className="hero h-[500px] w-full" style={{ backgroundImage: 'url(https://i.ibb.co/gjFxCjY/clg1.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-11/12 md:w-1/2">
                        <h1 className="mb-5 text-4xl md:text-5xl font-bold">Greenwood Institute of Environmental Sciences</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsBanner;