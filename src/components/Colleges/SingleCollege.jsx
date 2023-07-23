import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating';

const SingleCollege = ({ colleges }) => {
    return (
        <>
            {
                colleges.map(college => {
                    const { _id, collegeImage, rating, collegeName, admissionProcess, researchWorks } = college;
                    return (
                        <div className="p-4 w-full md:w-1/2 lg:w-1/3" key={_id}>
                            <div className="flex items-center border-2 rounded-lg  border-gray-200 border-opacity-50 p-5 flex-col gap-6 md:gap-10">
                                <div className="w-full">
                                    <img src={collegeImage} className='w-full h-full md:h-[300px] object-cover object-center' alt="" />
                                </div>
                                <div className="w-full">
                                    <h2 className="text-gray-900 text-xl  md:text-2xl title-font font-medium mb-3 md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">{collegeName}</h2>

                                    <Rating value={rating} text={`${rating} stars`} color={'#FF982E'} />

                                    <p className="leading-relaxed text-base my-2"><strong>Admission</strong>: {admissionProcess.admissionDates}</p>
                                    <p className="leading-relaxed text-base"><strong>Total Research</strong>: {researchWorks.length} </p>

                                    <Link to={`/college-details/${_id}`} className="mt-6 inline-flex text-white bg-[#6A6C84] border-0 py-2  px-6  focus:outline-none hover:bg-[#4C4E66] rounded text-lg">Details
                                    </Link>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default SingleCollege;