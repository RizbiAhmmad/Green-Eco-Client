import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

import logo from "../assets/GreenEco.jpeg"; 
import { AuthContext } from "../provider/AuthProvider";
import { ThemeContext } from "../provider/ThemeProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut().catch((error) => console.log(error));
  };

  return (
    <nav
      className={`px-12 py-4 sticky top-0 z-10 shadow-md ${
        isDarkMode ? "bg-green-900" : "bg-green-600"
      } text-white`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 cursor-pointer">
          <img
            className="h-8 w-8 object-cover"
            src={logo}
            alt="GreenHub Logo"
          />
          <h2 className="font-bold text-green-200 text-xl md:text-2xl">
            GreenEco
          </h2>
        </Link>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-4 absolute md:static top-16 left-0 w-full md:w-auto ${
            isDarkMode ? "bg-green-900" : "bg-green-600"
          } md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-200 font-bold border-b-2 border-green-200 pb-1"
                : "text-white hover:text-green-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive
                ? "text-green-200 font-bold border-b-2 border-green-200 pb-1"
                : "text-white hover:text-green-200"
            }
          >
            Events
          </NavLink>
          <NavLink
            to="/donate"
            className={({ isActive }) =>
              isActive
                ? "text-green-200 font-bold border-b-2 border-green-200 pb-1"
                : "text-white hover:text-green-200"
            }
          >
            Donations
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-200 font-bold border-b-2 border-green-200 pb-1"
                : "text-white hover:text-green-200"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-green-200 font-bold border-b-2 border-green-200 pb-1"
                : "text-white hover:text-green-200"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Right Side (Theme Toggle + Auth) */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="text-2xl cursor-pointer">
            {isDarkMode ? (
              <FaSun className="text-green-200" />
            ) : (
              <FaMoon className="text-white hover:text-green-200" />
            )}
          </button>

          {/* User Image & Logout */}
          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border border-green-200"
              />
              <button
                onClick={handleLogOut}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className={`px-4 py-2 rounded ${
                isDarkMode
                  ? "bg-green-800 text-white hover:bg-green-700"
                  : "bg-white text-green-600 hover:bg-gray-200"
              }`}
            >
              Log In
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            {menuOpen ? (
              <AiOutlineClose
                className="text-2xl cursor-pointer text-white hover:text-green-200"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <AiOutlineMenu
                className="text-2xl cursor-pointer text-white hover:text-green-200"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;