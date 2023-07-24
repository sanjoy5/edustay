import React, { useEffect, useState } from 'react';
import CollegesBanner from '../components/Colleges/CollegesBanner';
import SingleCollege from '../components/Colleges/SingleCollege';


const College = () => {
    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/colleges')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setColleges(data)
            })
    }, [])

    return (
        <>
            <CollegesBanner text='All colleges' />
            <section className='pt-24 pb-10 max-w-7xl mx-auto px-4'>
                <div className="flex flex-wrap">
                    <div className="flex flex-wrap -m-4">
                        <SingleCollege colleges={colleges} />
                    </div>
                </div>


            </section>
        </>
    );;
};

export default College;