import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import { useAuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useAuthContext()

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navLinks = <>
        <ActiveLink to='/'>Home</ActiveLink>
        <ActiveLink to='/colleges'>Colleges</ActiveLink>
        <ActiveLink to='/admission'>Admission</ActiveLink>
        {
            user && <ActiveLink to='/my-college'>My College</ActiveLink>
        }
    </>

    return (
        <>
            <div className="bg-[#2D2D39] text-white py-1">
                <div className="max-w-7xl mx-auto navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className=" lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#4C4E66] rounded-box w-52 space-y-2 text-base">
                                {navLinks}
                            </ul>
                        </div>
                        <Link to='/' className="text-2xl md:text-3xl font-bold">EduStay</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1  space-x-6 text-lg">
                            {navLinks}
                        </ul>
                    </div>


                    <div className="navbar-end space-x-3">
                        {
                            user ? <>
                                <label className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom mr-1" data-tip={user?.displayName}>
                                    <div className="w-10 md:w-11 rounded-full">
                                        <img src={user?.photoURL} className='object-cover object-top' />
                                    </div>
                                </label>
                                <button onClick={handleLogout} className='inline-flex text-white bg-[#6A6C84] border-0 py-2 md:py-3 px-6 md:px-8 focus:outline-none hover:bg-[#4C4E66] rounded text-lg'>Logout</button>
                            </> : <>
                                <Link to='/login' className="inline-flex text-white bg-[#6A6C84] border-0 py-2 md:py-3 px-6 md:px-8 focus:outline-none hover:bg-[#4C4E66] rounded text-lg">Login</Link>
                            </>
                        }


                    </div>



                </div>
            </div>
        </>
    );
};

export default Navbar;