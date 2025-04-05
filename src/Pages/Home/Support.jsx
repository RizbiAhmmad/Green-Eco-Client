import React from 'react';
import { FaHandsHelping, FaStar, FaLeaf } from 'react-icons/fa'; // Icons for each card
import { motion } from 'framer-motion'; // Import Framer Motion

const Support = () => {
  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start position: invisible and shifted down
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Staggered delay for each card
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
    hover: {
      scale: 1.05, // Slightly scale up on hover
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Increase shadow on hover
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Give Donation */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md text-center"
            custom={0} // Index for staggered animation
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <div className="flex justify-center mb-4">
              <FaHandsHelping className="text-green-600 text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Give Donation</h3>
            <p className="text-gray-600">
              Your contribution used locally to help charitable causes and support the organization. Support.
            </p>
          </motion.div>

          {/* Card 2: Become Volunteer */}
          <motion.div
            className="bg-green-600 p-6 rounded-lg shadow-md text-center text-white"
            custom={1} // Index for staggered animation
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <div className="flex justify-center mb-4">
              <FaStar className="text-white text-4xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Become Volunteer</h3>
            <p className="text-green-100">
              Your contribution used locally to help charitable causes and support the organization. Support.
            </p>
          </motion.div>

          {/* Card 3: Quick Fundraise */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md text-center"
            custom={2} // Index for staggered animation
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <div className="flex justify-center mb-4">
              <FaLeaf className="text-green-600 text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quick Fundraise</h3>
            <p className="text-gray-600">
              Your contribution used locally to help charitable causes and support the organization. Support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;