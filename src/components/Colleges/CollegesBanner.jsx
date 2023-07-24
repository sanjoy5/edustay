import React from 'react';

const CollegesBanner = ({ text }) => {
    return (
        <>
            <section className=''>
                <div className="bg-[#2D2D39] pt-16 pb-24 px-4 w-full h-full text-center flex items-center justify-center flex-col">
                    <h2 className="text-4xl md:text-5xl text-white uppercase">
                        {text}
                    </h2>
                </div>
            </section>
        </>
    );
};

export default CollegesBanner;