import React from 'react';
import { Oval } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='h-96 w-full flex items-center justify-center z-10'>
            <Oval
                height={80}
                width={80}
                color="#2D2D39"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4C4E66"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
        </div>

    );
};

export default Loading;