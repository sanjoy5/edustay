import React from 'react';
import { Link } from 'react-router-dom';

const SearchColleges = ({ colleges }) => {
    return (
        <>
            {
                colleges.map(college => {
                    const { _id, collegeImage, collegeName, admissionProcess, events, researchWorks, sportsCategories } = college;
                    return (
                        <div className="p-4 w-full" key={_id}>

                            <h2 className="text-3xl font-semibold  text-center uppercase  my-10">Search Result</h2>

                            <div className="flex items-center border-2 rounded-lg border-gray-200 border-opacity-50 p-5 sm:flex-row flex-col gap-6 md:gap-10">
                                <div className="w-full md:w-2/5">
                                    <img src={collegeImage} className='w-full md:h-[350px] object-cover object-center' alt="" />
                                </div>
                                <div className="w-full md:w-3/5">
                                    <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">{collegeName}</h2>
                                    <p className="leading-relaxed text-base mb-2"><strong>Admission</strong>: {admissionProcess.admissionDates}</p>
                                    <p className="leading-relaxed text-base"><strong>Research</strong>: {
                                        researchWorks?.map((reserch, i) => (
                                            <li key={i} className="">{reserch.title}</li>
                                        ))
                                    }</p>


                                    <div className="leading-relaxed text-base flex gap-5 mt-5"><strong>Events</strong>:
                                        <div className="flex flex-wrap items-center gap-2">
                                            {
                                                events.map((event, i) => (
                                                    <span key={i} className="px-3 py-1 rounded-lg bg-gray-200">{event.eventName}</span>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    <div className="leading-relaxed text-base flex gap-5 mt-5"><strong>Sports</strong>:
                                        <div className="flex flex-wrap items-center gap-2">
                                            {
                                                sportsCategories.map((sport, i) => (
                                                    <span key={i} className="px-3 py-1 rounded-lg bg-gray-200">{sport}</span>
                                                ))
                                            }
                                        </div>
                                    </div>




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

export default SearchColleges;