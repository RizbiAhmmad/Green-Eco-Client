import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      quote: 'GreenEco made it so easy to contribute to a greener planet. I’m proud to be a volunteer!',
      author: 'Jane Doe, Volunteer',
      rating: 5,
    },
    {
      quote: 'Donating to GreenEco was the best decision. I can see the real impact of my contribution!',
      author: 'John Smith, Donor',
      rating: 4,
    },
    {
      quote: 'Volunteering with GreenEco has been life-changing. The team is passionate and the mission is inspiring.',
      author: 'Emily White, Volunteer',
      rating: 5,
    },
  ];

  const testimonialVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={18}
        className={`${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-100 text-black">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What People <span className="text-green-600">Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={testimonialVariants}
            >
              <div className="mb-4 text-yellow-400 flex gap-1">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 italic mb-6">“{testimonial.quote}”</p>
              <p className="text-green-600 font-semibold">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
