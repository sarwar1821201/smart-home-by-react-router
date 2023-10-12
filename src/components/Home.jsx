import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
           
           <div className='min-h-[calc(100vh-341px)]' >
            <Outlet></Outlet>
           </div>

        <Footer></Footer>
        </div>
    );
};

export default Home;