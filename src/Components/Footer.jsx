import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  // Animation variants for footer sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-green-400">Green</span>Eco
            </h3>
            <p className="text-green-200">
              Growing a Better World with Care, Nature, and Climate Help
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-green-100 hover:text-green-200 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/events" className="text-green-100 hover:text-green-200 transition duration-300">
                  Events
                </a>
              </li>
              <li>
                <a href="/donate" className="text-green-100 hover:text-green-200 transition duration-300">
                  Donations
                </a>
              </li>
              <li>
                <a href="/about" className="text-green-100 hover:text-green-200 transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-green-100 hover:text-green-200 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-green-200" />
                <a href="mailto:info@greeneco.org" className="text-green-100 hover:text-green-200 transition duration-300">
                  info@greeneco.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-green-200" />
                <a href="tel:+1234567890" className="text-green-100 hover:text-green-200 transition duration-300">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-green-100 hover:text-green-200 transition duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-green-100 hover:text-green-200 transition duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-green-100 hover:text-green-200 transition duration-300" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright Notice */}
        <motion.div
          className="mt-8 pt-8 border-t border-green-200 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <p className="text-green-100">
            &copy; {new Date().getFullYear()} GreenEco. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;