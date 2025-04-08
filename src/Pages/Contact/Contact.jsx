import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-16 bg-white text-gray-800" id="contact">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-gray-500 text-lg">
            We'd love to hear from you! Send us a message and we’ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-gray-50 p-8 rounded-2xl shadow-md space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                placeholder="Write your message here..."
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition duration-300"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col justify-center bg-green-50 p-8 rounded-2xl shadow-md space-y-6"
          >
            <div className="flex items-center gap-4">
              <MapPin className="text-green-600" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-sm text-gray-600">123 GreenEco Street, Earth City</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-green-600" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-gray-600">contact@greeneco.org</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-green-600" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm text-gray-600">+1 (234) 567-8901</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
