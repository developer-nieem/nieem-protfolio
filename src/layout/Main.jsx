import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Shared/Navbar';

const Main = () => {
    return (
        <div className='overflow-hidden'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;