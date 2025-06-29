import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../../provider/ThemeProvider";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <motion.div
      className={`min-h-screen p-8 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-green-100 to-green-200"
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className={`text-4xl font-bold text-center mb-10 ${
          isDarkMode ? "text-green-400" : "text-green-800"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Upcoming Environmental Events
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
      >
        {events.map((event, index) => (
          <motion.div
            key={event._id || index}
            className={`shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-[1.03] ${
              isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white"
            }`}
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <img
              src={event.imageUrl || "https://via.placeholder.com/400x300"}
              alt={event.name}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3
                className={`text-xl font-bold mb-2 ${
                  isDarkMode ? "text-green-400" : "text-green-800"
                }`}
              >
                {event.name}
              </h3>
              <p className={`text-sm mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <strong>Date:</strong> {event.date}
              </p>
              <p className={`text-sm mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <strong>Location:</strong> {event.location}
              </p>
              <p className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                {event.description}
              </p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                className="w-full px-4 py-2 mt-4 font-semibold text-white transition bg-green-500 rounded-lg hover:bg-green-600"
              >
                Join Event
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Events;
