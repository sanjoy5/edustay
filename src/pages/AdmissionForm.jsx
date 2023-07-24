import React from 'react';
import CollegesBanner from '../components/Colleges/CollegesBanner';
import { useForm } from "react-hook-form";
import { useAuthContext } from '../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const AdmissionForm = () => {
    const { user } = useAuthContext()
    const college = useLoaderData()
    // console.log(college, '444');

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log('Form data : ', data);

        fetch('http://127.0.0.1:5000/my-college', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Addmission was Successfull',
                        showConfirmButton: false,
                        timer: 1500,
                    })
                }
                reset()
            })
    }

    return (
        <>
            <CollegesBanner text='Admission Form' />

            <div className='max-w-7xl mx-auto py-16 px-4'>
                <div className="lg:w-2/3 md:w-1/2 bg-white flex flex-col md:mx-auto w-full ">

                    <form onSubmit={handleSubmit(onSubmit)} >


                        <div className="relative mb-4 w-full">
                            <label htmlFor="cname" className="leading-7 text-base text-gray-600">College Name</label>
                            <input type="text" id="cname" {...register("cname", { required: true })} defaultValue={college?.collegeName} className="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly />
                            {errors.name && <span className='text-red-500 '>College Name field is required</span>}
                        </div>
                        <div className="relative mb-4 w-full">
                            <label htmlFor="subject" className="leading-7 text-base text-gray-600">Subject</label>
                            <input type="text" id="subject" {...register("subject", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {errors.phone && <span className='text-red-500 '>Phone field is required</span>}
                        </div>
                        <div className="relative mb-4 w-full">
                            <label htmlFor="name" className="leading-7 text-base text-gray-600">Candidate Name</label>
                            <input type="text" id="name" {...register("name", { required: true })} defaultValue={user?.displayName} className="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {errors.name && <span className='text-red-500 '>Name field is required</span>}
                        </div>
                        <div className="relative mb-4 w-full">
                            <label htmlFor="email" className="leading-7 text-base text-gray-600">Candidate Email</label>
                            <input type="email" id="email" {...register("email", { required: true })} defaultValue={user?.email} className="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {errors.email && <span className='text-red-500 '>Email field is required</span>}
                        </div>
                        <div className="relative mb-4 w-full">
                            <label htmlFor="phone" className="leading-7 text-base text-gray-600">Candidate Phone</label>
                            <input type="text" id="phone" {...register("phone", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {errors.phone && <span className='text-red-500 '>Phone field is required</span>}
                        </div>

                        <div className="relative mb-4 w-full">
                            <label htmlFor="address" className="leading-7 text-base text-gray-600">Candidate Address</label>
                            <input type="text" id="addresss" {...register("address", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {errors.address && <span className='text-red-500 '>Address field is required</span>}
                        </div>
                        <div className="relative mb-4 w-full">
                            <label htmlFor="photo" className="leading-7 text-base text-gray-600">Photo URL</label>
                            <input type="photo" id="photo" {...register("photo", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {errors.photo && <span className='text-red-500 '>Photo field is required</span>}
                        </div>


                        <div className="relative mb-4 w-full">
                            <label htmlFor="dateofbirth" className="leading-7 text-base text-gray-600">Date of Birth</label>
                            <input type="text" id="dateofbirth" {...register("dateofbirth", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {errors.dateofbirth && <span className='text-red-500 '>Date of Birth field is required</span>}
                        </div>


                        <input type="submit" className="mt-3  inline-flex text-white bg-[#6A6C84] border-0 py-2 md:py-3 px-6 md:px-8 focus:outline-none hover:bg-[#4C4E66] rounded text-lg" value='Addmission Now' />
                    </form>

                </div>
            </div>
        </>
    );
};

export default AdmissionForm;