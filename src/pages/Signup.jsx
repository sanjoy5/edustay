
import React, { useState } from 'react';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const Signup = () => {
    const { createUser, updateUserProfile, googleSignIn, githubSignIn } = useAuthContext()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const registerUser = result.user
                setError('')
                updateUserProfile(registerUser, data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, photo: data.photoURL }
                        fetch('https://edustay-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.insertedId) {
                                    setError('')
                                    reset()
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'User was created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/success')

                                }
                            })

                    })
                    .catch(error => setError(error.message))
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleLoginWithGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL }
                fetch('https://edustay-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
            })

            .catch(error => {
                setError(error.message)
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL, role: 'student' }
                fetch('https://edustay-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
            })

            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <>
            <div className='w-full bg-[#2D2D39] min-h-screen py-20 -z-10'>
                <div class="px-5 w-full h-full flex items-center justify-center ">
                    <form onSubmit={handleSubmit(onSubmit)} class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <Link to='/' className="w-10 h-10 flex items-center justify-center bg-base-200 cursor-pointer rounded-full">
                            <FaArrowLeft className='inline' />
                        </Link>
                        <h2 class="text-gray-900 text-2xl mb-1 font-bold uppercase title-font text-center">Sign Up Now</h2>
                        {
                            error && <label className="label">
                                <p className="my-2 text-red-500"><strong>Error:</strong> {error}</p>
                            </label>
                        }

                        <div class="relative mb-4">
                            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" {...register("name", { required: true })} class="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {errors.name && <span className='text-red-500 '>Name field is required</span>}
                        </div>
                        <div class="relative mb-4">
                            <label for="photo" class="leading-7 text-sm text-gray-600">Photo URL</label>
                            <input type="text" id="photo" {...register("photoURL", { required: true })} class="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {errors.photoURL && <span className='text-red-500 '>Photo URL field is required</span>}
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" {...register("email", { required: true })} class="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {errors.email && <span className='text-red-500 '>Email field is required</span>}
                        </div>
                        <div class="relative mb-4">
                            <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                            })} class="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                            {errors.password?.type === 'required' && <p className='text-red-500 '>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-500 '>Password must be 6 character</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-500 '>Password must be less than 20 character</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-500 '>Password must be at least a symbol, upper and lower case letters and a number
                            </p>}
                        </div>

                        <button type='submit' class="text-white bg-[#4C4E66] border-0 py-2 px-6 focus:outline-none hover:bg-[#6A6C84] rounded text-lg">Sign Up</button>
                        <p class="text-base text-gray-500 mt-3">Already have an account? <Link to='/login' className='text-blue-500'>Login</Link></p>
                    </form>


                </div>
                <div className="flex items-center gap-6 w-full justify-center mt-6">
                    <div onClick={handleLoginWithGoogle} className="h-10 w-10 bg-base-200 rounded-full flex items-center justify-center cursor-pointer">
                        <FcGoogle className='text-2xl' />
                    </div>
                    <div onClick={handleGithubSignIn} className="h-10 w-10 bg-base-200 rounded-full flex items-center justify-center cursor-pointer">
                        <FaGithub className='text-2xl' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;