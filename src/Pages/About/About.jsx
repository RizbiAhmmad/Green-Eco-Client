import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 bg-white text-gray-800" id="about">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-green-600">Us</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            At GreenEco, we’re on a mission to protect the environment and inspire communities to take action for a greener, cleaner planet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image or Illustration */}
          <motion.img
            src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80"
            alt="About GreenEco"
            className="w-full rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2022, GreenEco began with a simple goal — to plant more trees and reduce plastic waste. Today, we’ve grown into a passionate network of volunteers, donors, and advocates working together to tackle climate change and environmental challenges.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We organize tree plantation events, community cleanups, educational programs, and partner with local governments to create lasting impact. Every step we take is a step closer to a sustainable future.
            </p>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h4 className="text-xl font-bold text-green-700 mb-2">🌍 Mission</h4>
            <p className="text-gray-600 text-sm">
              To lead environmental action and promote sustainable practices for a healthier planet.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h4 className="text-xl font-bold text-green-700 mb-2">🌱 Vision</h4>
            <p className="text-gray-600 text-sm">
              A world where every individual contributes to ecological balance and future generations thrive.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h4 className="text-xl font-bold text-green-700 mb-2">💚 Values</h4>
            <p className="text-gray-600 text-sm">
              Sustainability, Integrity, Community, Education, and Environmental Justice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;