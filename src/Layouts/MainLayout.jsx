import React, { useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ThemeContext } from '../provider/ThemeProvider';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    const { isDarkMode } = useContext(ThemeContext);
    return (
        <div className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} mx-auto`}>
        {noHeaderFooter || <Navbar></Navbar>}
        <Outlet></Outlet>
       {noHeaderFooter || <Footer></Footer>}
    </div>
    )
};

export default MainLayout;