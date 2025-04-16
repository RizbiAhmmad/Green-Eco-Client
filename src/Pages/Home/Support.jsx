import React, { useContext } from 'react';
import { FaHandsHelping, FaStar, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../provider/ThemeProvider';

const Support = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
    hover: { scale: 1.05, boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.3)', transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  const supportOptions = [
    { icon: <FaHandsHelping className="text-green-600 text-4xl md:text-5xl" />, title: 'Give Donation', description: 'Support our cause with your generous donations, directly impacting local charitable initiatives.' },
    { icon: <FaStar className="text-green-700 text-4xl md:text-5xl" />, title: 'Become Volunteer', description: 'Join our team and make a difference by volunteering your time and skills.' },
    { icon: <FaLeaf className="text-green-600 text-4xl md:text-5xl" />, title: 'Quick Fundraise', description: 'Start a fundraiser to help us grow and support more environmental projects.' },
  ];

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
          Ways to <span className="text-green-600">Support</span> Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              className={`p-6 rounded-xl shadow-lg backdrop-blur-md ${
                isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/90 border border-gray-200'
              }`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="flex justify-center mb-6">{option.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-4">{option.title}</h3>
              <p className={`text-base md:text-lg text-center leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;