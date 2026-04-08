import React from 'react';
import NavBar from '../Component/Shared/Navbar/NavBar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;