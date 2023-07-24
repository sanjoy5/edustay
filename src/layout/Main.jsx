import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import Footer from '../components/Footer';

const Main = () => {
    const navigation = useNavigation()
    return (
        <>
            <Navbar />
            <div>{navigation.state === 'loading' && <Loading />}</div>
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;