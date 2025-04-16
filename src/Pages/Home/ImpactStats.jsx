import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../provider/ThemeProvider';

const ImpactStats = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const stats = [
    { label: 'Trees Planted', value: '10,000+' },
    { label: 'Funds Raised', value: '$500K+' },
    { label: 'Volunteers', value: '2,000+' },
  ];

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
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
          Our <span className="text-green-400">Impact</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-lg ${
                isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/90 border border-gray-200'
              }`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={statVariants}
            >
              <h3 className={`text-4xl font-bold text-center mb-2 ${
                isDarkMode ? 'text-green-400' : 'text-green-400'
              }`}>{stat.value}</h3>
              <p className={`text-lg text-center ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;