import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/Green-Eco-Energy.png'; // Adjust the image path as needed

const AboutUs = () => {
  // Animation variants for text and image
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              About <span className="text-green-600">GreenEco</span>
            </h2>
            <p className="text-lg text-gray-600">
              At GreenEco, we’re all about saving the planet with love and action. We care for nature, fight climate change, and dream of a greener world for everyone. Together, we can make it happen!
            </p>
            <div className="h-1 w-20 bg-green-200 rounded"></div>
          </motion.div>

          {/* Image Section with Overlay */}
          <motion.div
            className="rounded-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <div className="relative w-full">
              <img
                src={aboutImage}
                alt="GreenEco About Us"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="w-full h-full bg-green-600 opacity-30 top-0 left-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;