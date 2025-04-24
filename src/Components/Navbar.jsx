import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // Added for animations
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

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav
      className={`px-4 md:px-12 py-4 sticky top-0 z-10 shadow-md ${
        isDarkMode ? "bg-green-900" : "bg-green-600"
      } text-white`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img
            className="h-8 w-8 object-cover"
            src={logo}
            alt="GreenEco Logo"
          />
          <h2 className="font-bold text-green-200 text-lg md:text-2xl">
            GreenEco
          </h2>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex md:flex-row gap-4">
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
            to="/donation"
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
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-green-200 font-bold border-b-2 border-green-200 pb-1"
                : "text-white hover:text-green-200"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-green-200 font-bold border-b-2 border-green-200 pb-1"
                : "text-white hover:text-green-200"
            }
          >
            Dashboard
          </NavLink>
        </div>

        {/* Right Side (Theme Toggle + Auth + Mobile Menu Toggle) */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-xl md:text-2xl cursor-pointer"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <FaSun className="text-green-200" />
            ) : (
              <FaMoon className="text-white hover:text-green-200" />
            )}
          </button>

          {/* User Image & Logout */}
          {user ? (
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User Avatar"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-green-200"
              />
              <button
                onClick={handleLogOut}
                className="px-2 py-1 md:px-4 md:py-2 text-sm md:text-base bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className={`px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded ${
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
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl cursor-pointer text-white hover:text-green-200"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden absolute top-16 left-0 w-full bg-green-600 p-4 shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <div className="flex flex-col gap-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-200 font-bold border-b-2 border-green-200 pb-1"
                      : "text-white hover:text-green-200"
                  }
                  onClick={() => setMenuOpen(false)}
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
                  onClick={() => setMenuOpen(false)}
                >
                  Events
                </NavLink>
                <NavLink
                  to="/donation"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-200 font-bold border-b-2 border-green-200 pb-1"
                      : "text-white hover:text-green-200"
                  }
                  onClick={() => setMenuOpen(false)}
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
                  onClick={() => setMenuOpen(false)}
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
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-200 font-bold border-b-2 border-green-200 pb-1"
                      : "text-white hover:text-green-200"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-200 font-bold border-b-2 border-green-200 pb-1"
                      : "text-white hover:text-green-200"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;