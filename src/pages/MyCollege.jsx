import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import DetailsBanner from '../components/CollegeDetails/DetailsBanner';
import CollegeDetail from '../components/CollegeDetails/CollegeDetail';
import Review from '../components/Review';

const MyCollege = () => {
    const colleges = useLoaderData()
    // console.log(colleges, '&&&');
    const { user } = useAuthContext()
    const [info, setInfo] = useState({})

    useEffect(() => {
        fetch(`https://edustay-server.vercel.app/my-college/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setInfo(data)
                // console.log(data, '%%');
            })
    }, [])


    const selectedCollege = colleges.filter(clg => clg.collegeName === info.cname)
    // console.log('Selected College : ', selectedCollege);


    return (
        <div>
            {
                selectedCollege.length !== 0 ? <>
                    {
                        selectedCollege?.map(college => (
                            <div key={college._id} className="">
                                <DetailsBanner college={college} />
                                <CollegeDetail college={college} />
                                <Review college={college} />
                            </div>
                        ))
                    }
                </> : <>
                    <div className="max-w-7xl border mx-auto my-10 p-5 md:p-8 text-2xl md:3xl font-semibold text-center">
                        You are not take admission in any college yet !
                    </div>
                </>

            }

        </div>
    );
};

export default MyCollege;