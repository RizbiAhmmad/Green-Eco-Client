import React, { useContext } from 'react';
import { ThemeContext } from '../../provider/ThemeProvider';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Testimonial = () => {
  const { isDarkMode } = useContext(ThemeContext);

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
    {
      quote: 'The team at GreenEco is so supportive and organized. I’ve recommended them to all my friends!',
      author: 'Michael Brown, Volunteer',
      rating: 5,
    },
    {
      quote: 'Every penny I donated was worth it. I received updates and felt truly involved.',
      author: 'Sarah Lee, Donor',
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={18}
        className={`${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        } ${isDarkMode ? 'text-gray-500' : ''}`}
      />
    ));
  };

  return (
    <section className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 md:px-12">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
          isDarkMode ? 'text-green-400' : 'text-green-700'
        }`}>
          What People <span className="text-green-600">Say</span>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className={`p-8 rounded-2xl shadow-lg h-full mx-auto max-w-md ${
                  isDarkMode
                    ? 'bg-gray-800/80 border border-gray-700 text-white'
                    : 'bg-white/90 border border-gray-200 text-black'
                } hover:shadow-xl transition-shadow`}
              >
                <div className="mb-4 justify-center flex gap-1">
                  {renderStars(testimonial.rating)}
                </div>
                <p className={`italic mb-6 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  “{testimonial.quote}”
                </p>
                <p className={`font-semibold ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  {testimonial.author}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
