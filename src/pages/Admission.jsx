import React from 'react';
import CollegesBanner from '../components/Colleges/CollegesBanner';
import { Link, useLoaderData } from 'react-router-dom';

const Admission = () => {
    const colleges = useLoaderData()
    console.log('#### ', colleges);

    return (
        <>
            <CollegesBanner text='Admission' />

            <div className='max-w-7xl mx-auto py-10 px-5'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                    {
                        colleges?.map(college => (
                            <Link to={`/admission-form/${college._id}`} key={college._id} className="p-4 rounded border shadow cursor-pointer">
                                <h3 className="text-xl md:text-3xl font-semibold">{college.collegeName}</h3>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </>
    );
};

export default Admission;