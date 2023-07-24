import React, { useEffect, useState } from 'react';
import CollegesBanner from '../components/Colleges/CollegesBanner';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateProfile = () => {
    const { user } = useAuthContext()
    // console.log('user  : ', user);
    const [profile, setProfile] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProfile(data)
            })
    }, [])


    const handleProfile = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.image.value;


        const userData = { name, photo }
        console.log(userData);

        fetch(`http://127.0.0.1:5000/user-update/${profile._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Profile Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate('/profile')
            })

    }

    return (
        <>
            <CollegesBanner text="Update Profile" />

            <div className="mt-16 mb-24 max-w-7xl mx-auto px-4">
                <form onSubmit={handleProfile} class="border lg:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">


                    <div class="relative mb-4">
                        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name='name' class="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue={profile?.name} required />

                    </div>


                    <div class="relative mb-4">
                        <label for="image" class="leading-7 text-sm text-gray-600">Photo</label>
                        <input type="text" id="image" name='photo' class="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue={profile?.photo} required />
                    </div>


                    <button type='submit' class="text-white bg-[#4C4E66] border-0 py-2 px-6 focus:outline-none hover:bg-[#6A6C84] rounded text-lg">Update</button>

                </form>
            </div>
        </>
    );
};

export default UpdateProfile;