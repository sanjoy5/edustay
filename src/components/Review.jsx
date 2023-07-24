import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Review = ({ college }) => {
    const { user } = useAuthContext()
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const [allReview, setAllReview] = useState([])



    const handleReview = (e) => {
        e.preventDefault()
        const data = { college, rating, comment, user: user.displayName, userImage: user.photoURL }
        console.log('data : ', data);

        fetch('http://127.0.0.1:5000/review-college', {
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
                        title: 'Rating was Successfull Done',
                        showConfirmButton: false,
                        timer: 1500,
                    })
                }
                setRating('')
                setComment('')
            })
    }

    useEffect(() => {
        fetch('http://127.0.0.1:5000/all-review')
            .then(res => res.json())
            .then(data => {
                console.log('data : ', data);
                setAllReview(data)
            })
    }, [])

    const existsReview = allReview.filter(review => review.college.collegeName === college.collegeName)
    console.log(existsReview, ' : existsReview');

    return (
        <div className='mb-24 mx-4'>

            {
                user ? (
                    <form onSubmit={handleReview} className='lg:w-1/3 md:w-1/2 bg-white border rounded-lg p-8 flex flex-col md:mx-auto w-full relative z-10 shadow-md'>
                        <h4 className='text-2xl font-semibold mb-5'>Write a review</h4>
                        <div class="mb-3">
                            <label for="rating" class=" text-lg">Rating</label>
                            <select class="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-1" value={rating} onChange={(e) => setRating(e.target.value)}>
                                <option value=''>Select...</option>
                                <option value="1">1 - Poor</option>
                                <option value="2">2 - Fair</option>
                                <option value="3">3 - Good</option>
                                <option value="4">4 -Very Good</option>
                                <option value="5">5 - Excellent</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="comment" class="text-lg pb-1">Commnet</label>
                            <textarea class="w-full bg-white rounded border border-gray-300 focus:border-[#2D2D39] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-1" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} rows="3"></textarea>
                        </div>

                        <button type='submit' className="text-white bg-[#4C4E66] border-0 py-2 px-6 focus:outline-none hover:bg-[#6A6C84] rounded text-lg">Submit</button>

                    </form>
                ) : (
                    <div className='py-4 px-6 border rounded text-center max-w-7xl mx-auto'>You Are Already Reviewed This College !!</div>
                )
            }
        </div>
    );

}
export default Review;