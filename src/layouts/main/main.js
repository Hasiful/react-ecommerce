import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../pages/shared/header/header';
import Footer from '../../pages/shared/footer/footer';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;