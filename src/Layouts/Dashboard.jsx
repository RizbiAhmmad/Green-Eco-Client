import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { MdEvent, MdOutlineDashboardCustomize } from "react-icons/md";
import { FaHome, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const isAdmin = true; 

     const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

    return (

        <div>
      {/* top */}
      <div className="flex justify-between items-center p-4">        
          <button
            onClick={toggleSidebar}
            className=" w-full text-4xl text-black focus:outline-none"
          >
             {!isSidebarOpen ? (
              <MdOutlineDashboardCustomize />
            ) : (
              <LuLayoutDashboard />
            )}
          </button>
        </div>

        <div className='flex min-h-screen'>
            <div className={`${
            isSidebarOpen ? "w-64" : "w-0 md:w-64"
          } bg-green-500 text-white transition-all duration-300 flex flex-col justify-between`} >

                <ul onClick={toggleSidebar} className='menu  p-4'>
                    {
                        isAdmin ? <>
                        <li >
                  <NavLink to="/" className="flex py-2 space-x-3 items-center">
                    <FaHome></FaHome> <span>Home</span>
                  </NavLink>
                </li>
                <li >
                  <NavLink to="/dashboard/allUsers" className="flex py-2 space-x-3 items-center">
                   <FaUsers /> <span>All Users</span>
                  </NavLink>
                </li>
                <li >
                  <NavLink to="/dashboard/addEvent" className="flex py-2 space-x-3 items-center">
                    <MdEvent /> <span>Add Event</span>
                  </NavLink>
                </li>
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

        </div>
        
    );
};

export default Dashboard;