import React, { useEffect, useState } from 'react';
import DetailsBanner from '../components/CollegeDetails/DetailsBanner';
import { useLoaderData, useParams } from 'react-router-dom';

const CollegeDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <DetailsBanner />
        </div>
    );
};

export default CollegeDetails;