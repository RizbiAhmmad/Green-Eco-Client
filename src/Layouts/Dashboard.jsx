import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className="w-56 min-h-full bg-emerald-500" >

                <ul>
                    <li> <NavLink to="/dashboard/allUser"> All User </NavLink> </li>
                    <li> <NavLink to="/dashboard/addEvent"> Add Event </NavLink> </li>
                </ul>

            </div>


            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
        
    );
};

export default Dashboard;