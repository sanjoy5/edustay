import React, { useState } from 'react';

const CollegeDetail = ({ college }) => {
    const [facility, setFacility] = useState(null)

    const { admissionProcess, events, facilities, researchWorks, sportsCategories } = college;


    return (
        <div className='max-w-7xl mx-auto py-14 px-4'>

            <div className="border rounded p-3 md:p-6 shadow space-y-2">
                <h2 className="text-3xl font-semibold mb-3">Admission Proccess</h2>
                {admissionProcess?.admissionDates && <li > <span className="text-base font-semibold">Admission Date: </span>{admissionProcess?.admissionDates}</li>}
                {admissionProcess?.admissionTests?.testDate && <li > <span className="text-base font-semibold">Admission Test Date: </span>{admissionProcess?.admissionTests?.testDate}</li>}
                {admissionProcess?.admissionTests?.testName && <li > <span className="text-base font-semibold">Admission Test Name: </span>{admissionProcess?.admissionTests?.testName}</li>}
                {admissionProcess?.admissionTests?.testVenue && <li > <span className="text-base font-semibold">Admission Test Venue: </span>{admissionProcess?.admissionTests?.testVenue}</li>}
            </div>



            <div className="border rounded p-3 md:p-6 shadow my-10">
                <h2 className="text-3xl font-semibold mb-3">Events Details</h2>

                {
                    events?.map((event, i) => (
                        <>
                            <div key={i} className='mb-4'>
                                <span className=" font-bold text-xl ">{event.eventName}</span>
                                <p className="text-base font-semibold">Date: {event.eventDate}</p>
                                <p className="text-base font-semibold">Description: {event.eventDescription}</p>
                            </div>

                        </>
                    ))
                }
            </div>


            <div className="border rounded p-3 md:p-6 shadow my-10">
                <h2 className="text-3xl font-semibold mb-3">Research Work</h2>

                {
                    researchWorks?.map((research, i) => (
                        <>
                            <div key={i} className='mb-4'>
                                <p className=" font-bold text-xl ">{research.title}</p>
                                <p className="text-base font-semibold">Authors: {
                                    research?.authors?.map((author, i) => <li key={i}>{author}</li>)
                                }</p>
                                <p className="text-base font-semibold">Date: {research.publicationDate}</p>
                                <p className="text-base font-semibold">Description: {research.description}</p>
                            </div>

                        </>
                    ))
                }
            </div>

            <div className="border rounded p-3 md:p-6 shadow my-10">
                <h2 className="text-3xl font-semibold mb-3">Facilities</h2>
                {facilities?.campusArea && <p className="text-base font-semibold">Capus Area: {facilities?.campusArea}</p>}
                {facilities?.libraries && <p className="text-base font-semibold">Libraries: {facilities?.libraries}</p>}
                {facilities?.laboratories && <p className="text-base font-semibold">Labratories: {facilities?.laboratories}</p>}
                {facilities?.sportsComplex && <p className="text-base font-semibold">Sports Complex: {facilities?.sportsComplex}</p>}
                {facilities?.hostelAccommodation && <p className="text-base font-semibold">Hostel Accommodation: {facilities?.hostelAccommodation}</p>}
                {facilities?.studios && <p className="text-base font-semibold">Studios: {facilities?.studios}</p>}
                {facilities?.practiceRooms && <p className="text-base font-semibold">Practice Rooms: {facilities?.practiceRooms}</p>}
                {facilities?.recitalHall && <p className="text-base font-semibold">Recital Hall: {facilities?.recitalHall}</p>}
                {facilities?.labs && <p className="text-base font-semibold">Labs: {facilities?.labs}</p>}
                {facilities?.hospitalFacilities && <p className="text-base font-semibold">Hospital Facilities: {facilities?.hospitalFacilities}</p>}
                {facilities?.innovationHub && <p className="text-base font-semibold">Innovation Hub: {facilities?.innovationHub}</p>}
                {facilities?.computerLabs && <p className="text-base font-semibold">Computer Labs: {facilities?.computerLabs}</p>}
                {facilities?.kitchens && <p className="text-base font-semibold">Kitchens: {facilities?.kitchens}</p>}
                {facilities?.bakery && <p className="text-base font-semibold">Bakery: {facilities?.bakery}</p>}
                {facilities?.trainingRestaurant && <p className="text-base font-semibold">Training Restaurant: {facilities?.trainingRestaurant}</p>}
                {facilities?.observatory && <p className="text-base font-semibold">Observatory: {facilities?.observatory}</p>}
                {facilities?.planetarium && <p className="text-base font-semibold">Planetarium: {facilities?.planetarium}</p>}
                {facilities?.languageLaboratories && <p className="text-base font-semibold">Language Laboratories: {facilities?.languageLaboratories}</p>}
                {facilities?.languageLibrary && <p className="text-base font-semibold">Language Library: {facilities?.languageLibrary}</p>}
            </div>

            <div className="border rounded p-3 md:p-6 shadow mt-10">
                <h2 className="text-3xl font-semibold mb-3">Sports Categories</h2>

                {
                    sportsCategories?.map((sports, i) => <li key={i} className='mb-2'>{sports}</li>)
                }
            </div>

        </div>
    );
};

export default CollegeDetail;