import React, { useContext } from 'react';
import { FaHandsHelping, FaStar, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../provider/ThemeProvider';

const Support = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: 'spring',
        stiffness: 80,
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: '0px 15px 40px rgba(34, 197, 94, 0.4)',
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };

  const supportOptions = [
    {
      icon: <FaHandsHelping className="text-5xl text-green-500" />,
      title: 'Give Donation',
      description: 'Support our cause with your generous donations, directly impacting local charitable initiatives.',
    },
    {
      icon: <FaStar className="text-5xl text-green-600" />,
      title: 'Become Volunteer',
      description: 'Join our team and make a difference by volunteering your time and skills.',
    },
    {
      icon: <FaLeaf className="text-5xl text-green-500" />,
      title: 'Quick Fundraise',
      description: 'Start a fundraiser to help us grow and support more environmental projects.',
    },
  ];

  return (
    <section className={`py-20 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-green-50 to-green-100'}`}>
      <div className="container mx-auto px-4 md:px-12">
        <motion.h2
          className={`text-4xl md:text-5xl font-extrabold text-center mb-16 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ways to <span className="text-green-500">Support</span> Us
        </motion.h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              variants={cardVariants}
              className={`relative group p-8 rounded-2xl overflow-hidden border ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } transition-shadow duration-300`}
            >
              <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-green-400/10 to-green-500/10 blur-xl opacity-0 group-hover:opacity-30 transition duration-500 z-0" />
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                {option.icon}
                <h3 className={`text-xl md:text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {option.title}
                </h3>
                <p className={`text-base md:text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {option.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
