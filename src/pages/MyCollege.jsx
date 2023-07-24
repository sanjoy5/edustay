import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import DetailsBanner from '../components/CollegeDetails/DetailsBanner';
import CollegeDetail from '../components/CollegeDetails/CollegeDetail';

const MyCollege = () => {
    const colleges = useLoaderData()
    // console.log(colleges, '&&&');
    const { user } = useAuthContext()
    const [info, setInfo] = useState({})

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/my-college/?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setInfo(data)
                // console.log(data, '%%');
            })
    }, [])


    const selectedCollege = colleges.filter(clg => clg.collegeName === info.cname)
    console.log('Selected College : ', selectedCollege);


    return (
        <div>
            {
                selectedCollege?.map(college => (
                    <div key={college._id} className="">
                        <DetailsBanner college={college} />
                        <CollegeDetail college={college} />
                    </div>
                ))
            }

        </div>
    );
};

export default MyCollege;