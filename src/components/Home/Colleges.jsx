import React from 'react';
import { Link } from 'react-router-dom';

const Colleges = ({ colleges }) => {
    return (
        <>
            {
                colleges?.map(college => {
                    const { _id, collegeImage, collegeName, admissionDates, events, researchHistory, sports } = college;
                    return (
                        <div class="p-4 w-full">
                            <div class="flex items-center border-2 rounded-lg border-gray-200 border-opacity-50 p-5 sm:flex-row flex-col gap-6 md:gap-10">
                                <div class="w-full md:w-2/5">
                                    <img src={collegeImage} className='w-full md:h-[350px] object-cover object-center' alt="" />
                                </div>
                                <div class="w-full md:w-3/5">
                                    <h2 class="text-gray-900 text-2xl title-font font-medium mb-3">{collegeName}</h2>
                                    <p class="leading-relaxed text-base mb-2"><strong>Admission</strong>: {admissionDates}</p>
                                    <p class="leading-relaxed text-base"><strong>Research</strong>: {researchHistory}</p>


                                    <div class="leading-relaxed text-base flex gap-5 mt-5"><strong>Events</strong>:
                                        <div className="flex flex-wrap items-center gap-2">
                                            {
                                                events.map(event => (
                                                    <span className="px-3 py-1 rounded-lg bg-gray-200">{event}</span>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    <div class="leading-relaxed text-base flex gap-5 mt-5"><strong>Sports</strong>:
                                        <div className="flex flex-wrap items-center gap-2">
                                            {
                                                sports.map(sport => (
                                                    <span className="px-3 py-1 rounded-lg bg-gray-200">{sport}</span>
                                                ))
                                            }
                                        </div>
                                    </div>




                                    <Link to={`/college-details/${_id}`} class="mt-6 inline-flex text-white bg-[#6A6C84] border-0 py-2  px-6  focus:outline-none hover:bg-[#4C4E66] rounded text-lg">Details
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

export default Colleges;