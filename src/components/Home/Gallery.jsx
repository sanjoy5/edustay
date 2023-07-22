import React from 'react';

const Gallery = () => {
    return (
        <>
            <section className="max-w-7xl mx-auto">
                <div className="px-5 py-10 md:py-16 flex flex-wrap">

                    <h2 className="w-full text-3xl font-semibold  text-center uppercase  mb-16">Image Gallery</h2>

                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-full md:w-1/2">
                            <div className="md:p-2 p-1 w-full md:w-1/2" data-aos="fade-in" data-aos-duration="2000">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/Yhx9yyp/vasily-koloda-8-Cq-Dv-Puo-k-I-unsplash.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-full md:w-1/2" data-aos="fade-in" data-aos-duration="2000">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/hdc6rDP/md-duran-1-Vq-HRwxc-CCw-unsplash.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-full md:w-full" data-aos="fade-in" data-aos-duration="2000">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/KzDGZVv/juan-ramos-T9-VF8-N2-MQw-Y-unsplash.jpg" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-full md:w-1/2" data-aos="fade-in" data-aos-duration="2000">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src=" https://i.ibb.co/TMKzvyZ/pang-yuhao-kd5cxw-ZOK4-unsplash.jpg" />
                            </div>


                            <div className="md:p-2 p-1 w-full md:w-1/2" data-aos="fade-in" data-aos-duration="2000">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/GcK5ghx/victoria-heath-b7-CRDcwf-NFU-unsplash.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-full md:w-1/2" data-aos="fade-in" data-aos-duration="2000">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/LSFd2Pc/joel-mott-q-Kwbkeo-NW8-unsplash.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;