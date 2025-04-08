import React from 'react';
import { motion } from 'framer-motion';

const ImpactStats = () => {
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
    <section className="py-12 bg-gray-100 text-black">
      <div className="container mx-auto px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our <span className="text-green-400">Impact</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={statVariants}
            >
              <h3 className="text-4xl font-bold text-green-400 mb-2">{stat.value}</h3>
              <p className="text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;