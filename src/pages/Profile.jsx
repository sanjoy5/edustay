import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user } = useAuthContext()
    // console.log('user  : ', user);
    const [profile, setProfile] = useState({})


    useEffect(() => {
        fetch(`https://edustay-server.vercel.app/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProfile(data)
            })
    }, [])


    return (
        <div className=''>
            <div className=" py-16 md:py-32  px-4 w-full h-full text-center flex items-center justify-center flex-col">
                <div className="">
                    <img src={profile.photo || user.photoURL} className='w-32 h-32 rounded-full mb-5' alt="" />
                </div>
                <h2 className="text-4xl md:text-5xl  uppercase">
                    {profile.name || user.displayName}
                </h2>
                <p className="text-lg  mt-5">{profile?.email || user.email}</p>

                <Link to='/update-profile' className="mt-5 inline-flex  bg-[#6A6C84] border-0 py-2  px-6 md:px-8 focus:outline-none hover:bg-[#4C4E66] rounded text-white text-lg">Update Profile</Link>
            </div>

        </div>
    );
};

export default Profile;