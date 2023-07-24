import React, { useEffect, useState } from 'react';
import DetailsBanner from '../components/CollegeDetails/DetailsBanner';
import { useLoaderData, useParams } from 'react-router-dom';
import CollegeDetail from '../components/CollegeDetails/CollegeDetail';

const CollegeDetails = () => {
    const [college, setCollege] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://edustay-server.vercel.app/colleges/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log('Single College : ', data);
                setCollege(data)
            })
    }, [id])

    return (
        <div>
            <DetailsBanner college={college} />
            <CollegeDetail college={college} />
        </div>
    );
};

export default CollegeDetails;