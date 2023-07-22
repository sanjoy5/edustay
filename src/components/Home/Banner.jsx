import React from 'react';

const Banner = () => {
    return (
        <section className=''>
            <div className="bg-[#2D2D39] pt-16 pb-24 px-4 w-full h-full text-center flex items-center justify-center flex-col">
                <h2 className="text-4xl md:text-5xl text-white uppercase">
                    Search for a <br className="block md:hidden" /> <span className="font-bold">college</span> name
                </h2>

                <form class="w-full flex items-center space-x-2 justify-center mt-10">
                    <div class="w-full md:w-1/3">
                        <input type="text" name="search" class="w-full bg-white rounded  border-gray-300 focus:ring-2 focus:ring-[#6A6C84] focus:border-[#6A6C84] text-base outline-none text-[#6A6C84] py-1 md:py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='College Name' />
                    </div>
                    <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#6A6C84] border-0 py-2 md:py-3 px-4 md:px-8 focus:outline-none hover:bg-[#4C4E66] rounded text-lg md:font-semibold">Search</button>
                </form>
            </div>
        </section>
    );
};

export default Banner;