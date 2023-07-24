import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className="p-10 md:p-20 rounded">
                <img src="https://i.ibb.co/5vgH4Dm/404-error-illustration-maintenance-system-technology-showing-404-internet-connection-problem-message.png" className='w-full max-w-[400px] mx-auto' alt="" />

                <h2 className="text-3xl md:text-5xl mt-4 md:mt-6 font-bold text-center">Opps! Page Not Found!</h2>
                <div className="text-center">
                    <Link to='/' className='inline-flex text-white bg-[#6A6C84] border-0 py-2 md:py-3 px-6 md:px-8 focus:outline-none hover:bg-[#4C4E66] rounded text-lg mt-4 md:mt-8 '>Back to Home</Link>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;