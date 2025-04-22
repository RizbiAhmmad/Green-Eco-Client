import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaLeaf, FaUsers } from 'react-icons/fa';
import { ThemeContext } from '../../provider/ThemeProvider';

const Achievements = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const achievements = [
    { 
      title: 'Global Recognition', 
      detail: 'Awarded Eco Innovator of the Year 2024', 
      icon: <FaAward className="text-green-600 text-4xl" /> 
    },
    { 
      title: 'Carbon Offset', 
      detail: 'Reduced 1M tons of CO2 emissions', 
      icon: <FaLeaf className="text-green-600 text-4xl" /> 
    },
    { 
      title: 'Community Outreach', 
      detail: 'Educated 50,000+ people on sustainability', 
      icon: <FaUsers className="text-green-600 text-4xl" /> 
    },
  ];

  const achievementVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
    hover: {
      scale: 1.05,
      boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.3)',
      borderColor: isDarkMode ? '#34D399' : '#10B981',
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
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold ${
            isDarkMode ? 'text-green-400' : 'text-green-700'
          }`}>
            Our <span className="text-green-600">Achievements</span>
          </h2>
          <div className={`h-1 w-20 mx-auto mt-4 rounded ${
            isDarkMode ? 'bg-green-400' : 'bg-green-600'
          }`}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-lg border-2 transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/90 border-gray-700' 
                  : 'bg-white/95 border-gray-200'
              }`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              variants={achievementVariants}
            >
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className={`text-xl font-semibold text-center mb-2 font-serif ${
                isDarkMode ? 'text-green-400' : 'text-gray-800'
              }`}>{achievement.title}</h3>
              <p className={`text-base text-center leading-relaxed font-medium font-sans ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>{achievement.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;