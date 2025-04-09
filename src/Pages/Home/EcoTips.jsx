import React from 'react';
import { motion } from 'framer-motion';
import { FaRecycle, FaLightbulb, FaTree } from 'react-icons/fa'; // Icons for each tip

const EcoTips = () => {
  const tips = [
    {
      title: 'Reduce Plastic Use',
      description: 'Switch to reusable bags and bottles to cut down on waste.',
      icon: <FaRecycle className="text-green-600 text-4xl" />,
    },
    {
      title: 'Save Energy',
      description: 'Turn off lights and unplug devices when not in use.',
      icon: <FaLightbulb className="text-green-600 text-4xl" />,
    },
    {
      title: 'Plant a Tree',
      description: 'Help the planet by planting trees in your community.',
      icon: <FaTree className="text-green-600 text-4xl" />,
    },
  ];

  const tipVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Simple <span className="text-green-600">Eco Tips</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              variants={tipVariants}
            >
              <div className="flex justify-center mb-4">
                {tip.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoTips;