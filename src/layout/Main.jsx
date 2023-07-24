import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';

const Main = () => {
    const navigation = useNavigation()
    return (
        <>
            <Navbar />
            <div>{navigation.state === 'loading' && <Loading />}</div>
            <Outlet />

        </>
    );
};

export default Main;