import React from 'react';
import backgroundImage from '../../assets/Banner.jpg'; // Adjust the file name as needed

const Banner = () => {
  // Debug: Log the imported image path to confirm it’s loading
  console.log('Background Image Path:', backgroundImage);

  return (
    <section
      className="w-full h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center bg-green-600" // Fallback background color
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${backgroundImage})`,
      }}
    >
      {/* Content */}
      <div className="text-center text-white">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-green-200">Green</span>
          <span className="text-white">Eco</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl mb-6 text-green-100">
          Empowering Sustainability, Conservation, and Climate Action
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="/events"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Explore Events
          </a>
          <a
            href="/donate"
            className="px-6 py-3 bg-transparent border-2 border-green-200 text-green-200 rounded-lg hover:bg-green-200 hover:text-green-900 transition duration-300"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;