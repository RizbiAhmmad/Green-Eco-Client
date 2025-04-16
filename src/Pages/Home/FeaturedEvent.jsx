import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../provider/ThemeProvider';

const FeaturedEvent = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const events = [
    {
      title: 'Tree Planting Day',
      date: 'April 20, 2025',
      location: 'City Park',
      description: 'Join us to plant 500 trees and help fight climate change!',
    },
    {
      title: 'Eco Workshop',
      date: 'May 10, 2025',
      location: 'Community Center',
      description: 'Learn sustainable living tips from experts.',
    },
  ];

  const eventVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <section
      className={`py-16 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 md:px-12">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
          isDarkMode ? 'text-green-400' : 'text-green-700'
        }`}>
          Upcoming <span className="text-green-600">Events</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-lg ${
                isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/90 border border-gray-200'
              }`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              variants={eventVariants}
            >
              <h3 className={`text-xl font-bold mb-2 ${
                isDarkMode ? 'text-green-400' : 'text-gray-800'
              }`}>{event.title}</h3>
              <p className={`text-gray-600 mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <span className="font-semibold">Date:</span> {event.date}
              </p>
              <p className={`text-gray-600 mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <span className="font-semibold">Location:</span> {event.location}
              </p>
              <p className={`text-gray-600 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvent;