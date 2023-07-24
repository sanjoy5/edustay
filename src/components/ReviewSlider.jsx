import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Rating from './Rating';

const ReviewSlider = () => {

    const [allReview, setAllReview] = useState([])
    const [slidesPerView, setSlidesPerView] = useState(3);


    useEffect(() => {
        fetch('https://edustay-server.vercel.app/all-review')
            .then(res => res.json())
            .then(data => {
                console.log('data : ', data);
                setAllReview(data)
            })
    }, [])

    useEffect(() => {
        function updateSlidesPerView() {
            if (window.innerWidth >= 1024) {
                // Large devices (screens wider than 1024 pixels)
                setSlidesPerView(3);
            } else if (window.innerWidth >= 768) {
                // Medium devices (screens wider than 768 pixels)
                setSlidesPerView(2);
            } else {
                // Mobile devices (smaller screens)
                setSlidesPerView(1);
            }
        }

        // Initial setup
        updateSlidesPerView();

        // Event listener to update slidesPerView on window resize
        window.addEventListener('resize', updateSlidesPerView);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);


    return (
        <div className='max-w-7xl mx-auto mt-10 mb-24 px-4'>

            <h2 className="w-full text-3xl font-semibold  text-center uppercase  mb-16">Students Reviews</h2>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {
                    allReview?.map(review => (
                        <SwiperSlide>
                            <div key={review._id} className="border p-5 rounded shadow text-center ">
                                <div className='flex flex-col gap-3 items-center'>
                                    <img src={review.userImage} alt="" className="w-12 h-12 rounded-full" />
                                    <p className="text-lg font-semibold">{review.user}</p>
                                </div>
                                <h2 className="text-2xl font-bold">{review.college.collegeName}</h2>
                                <p className="text-base mt-2">{review.comment}</p>
                                <div className=" my-2 flex items-center justify-center">
                                    <Rating value={review.rating} text={``} color={'#FF982E'} />
                                </div>

                            </div>
                        </SwiperSlide>
                    ))
                }



            </Swiper>
        </div>
    );
};

export default ReviewSlider;