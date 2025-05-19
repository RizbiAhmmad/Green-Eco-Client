import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const isAdmin = true; // Replace with actual logic to determine if the user is an admin

    return (
        <div className='flex'>
            <div className="w-56 min-h-screen bg-emerald-500" >

                <ul className='menu p-4'>
                    {
                        isAdmin ? <>
                        <li> <NavLink to="/dashboard/allUser"> All User </NavLink> </li>
                        <li> <NavLink to="/dashboard/addEvent"> Add Event </NavLink> </li>
                        </>
                        :
                        <>
                        hi
                        </>
                    }
                </ul>

            </div>


            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
        
    );
};

export default Dashboard;