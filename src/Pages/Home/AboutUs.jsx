import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../provider/ThemeProvider';
import aboutImage from '../../assets/Green-Eco-Energy.png';

const AboutUs = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 } },
  };

  const cardHoverVariants = {
    hover: { scale: 1.05, boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.3)', transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  return (
    <section
      className={`py-16 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Section */}
          <motion.div
            className={`p-6 rounded-xl shadow-lg ${
              isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/90 border border-gray-200'
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            whileHover="hover"
            custom={cardHoverVariants}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-green-400' : 'text-green-700'
            }`}>
              About <span className="text-green-600">GreenEco</span>
            </h2>
            <p className={`text-base md:text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              At GreenEco, we’re driven by a passion to heal the planet. We fight climate change with innovative solutions, protect nature’s beauty, and unite communities for a sustainable future. Join us in making the world greener, one step at a time!
            </p>
            <div className={`h-1 w-16 mt-6 rounded ${
              isDarkMode ? 'bg-green-400' : 'bg-green-600'
            }`}></div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative overflow-hidden rounded-xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <img src={aboutImage} alt="GreenEco About Us" className="w-full h-full object-cover" />
            <div
              className={`absolute inset-0 bg-gradient-to-tr ${
                isDarkMode
                  ? 'from-gray-800/80 via-transparent to-gray-700'
                  : 'from-white/90 via-transparent to-gray-200'
              }`}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`text-2xl md:text-3xl font-semibold px-4 py-2 rounded-lg ${
                isDarkMode ? 'bg-gray-800/80 text-white' : 'bg-white/90 text-gray-800'
              }`}>
                Our Vision
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;