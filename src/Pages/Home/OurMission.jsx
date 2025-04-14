import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaTree, FaUsers } from 'react-icons/fa'; // Icons for focus areas

const OurMission = () => {
  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animation variants for focus cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const focusAreas = [
    {
      icon: <FaLeaf className="text-green-600 text-4xl" />,
      title: 'Sustainability',
      description: 'Promoting eco-friendly practices for a better future.',
    },
    {
      icon: <FaTree className="text-green-600 text-4xl" />,
      title: 'Conservation',
      description: 'Protecting nature and wildlife for generations.',
    },
    {
      icon: <FaUsers className="text-green-600 text-4xl" />,
      title: 'Community',
      description: 'Bringing people together to fight climate change.',
    },
  ];

  return (
    <section className="py-12 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-green-600">Mission</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            At GreenEco, we are dedicated to fighting climate change, protecting nature, and building a sustainable future. Together, we can make the planet greener and healthier for everyone!
          </p>
        </motion.div>

        {/* Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="flex justify-center mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;