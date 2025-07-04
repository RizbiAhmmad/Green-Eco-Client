import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart } from "react-icons/fa";
import { ThemeContext } from '../../provider/ThemeProvider';
import axios from 'axios';

const Donation = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [message, setMessage] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [events, setEvents] = useState([]);

  const amounts = [10, 15, 25, 50, 100];

  useEffect(() => {
    axios.get("http://localhost:5000/events")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  }, []);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    const parsedValue = value ? parseInt(value) : 0;
    setSelectedAmount(parsedValue || 0);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container px-4 mx-auto md:px-12">
        <motion.div
          className="max-w-md mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className={`p-6 rounded-xl shadow-lg border-2 ${isDarkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/95 border-gray-200'}`}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaHandHoldingHeart className={`text-red-500 text-2xl`} />
              <h2 className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                Support Our Mission
              </h2>
            </div>
            <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Your donation helps us create a greener, sustainable future.
            </p>

            <div className="mb-6">
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Select an Event
              </label>
              <select
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className={`w-full p-3 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-green-600`}
              >
                <option value="">Choose an event</option>
                {events.map((event) => (
                  <option key={event._id} value={event.name}>{event.name}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <div className="grid grid-cols-5 gap-2 mb-4">
                {amounts.map((amount, index) => (
                  <button
                    key={index}
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-2 border rounded-lg text-sm font-semibold transition-colors duration-200 ${selectedAmount === amount ? 'bg-green-600 text-white border-green-600' : isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 border-gray-300 text-gray-800 hover:bg-gray-300'}`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Enter custom amount"
                className={`w-full p-3 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-green-600`}
              />
            </div>

            <div className="mb-6">
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Leave a message (optional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full p-3 border rounded-lg text-sm resize-none h-12 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-green-600`}
                placeholder="Your message..."
              />
            </div>

            <div className="mb-6">
              <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Payment Details
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="Card number"
                  className={`col-span-2 p-3 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-green-600`}
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM / YY"
                    className={`p-3 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-green-600`}
                  />
                  <input
                    type="text"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="CVC"
                    className={`p-3 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-green-600`}
                  />
                </div>
              </div>
            </div>

            <button
              className={`w-full py-3 rounded-lg text-sm font-semibold transition-colors duration-200 ${isDarkMode ? 'bg-green-600 text-white hover:bg-green-500' : 'bg-green-600 text-white hover:bg-green-700'}`}
            >
              Pay ${selectedAmount || 0}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donation;
