import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { ThemeContext } from '../../provider/ThemeProvider';

const EcoChat = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [messages, setMessages] = useState([
    { sender: "EcoBot", text: "Hello! Welcome to GreenEco Chat. How can I help you today?", timestamp: new Date(), options: [] },
  ]);
  const [input, setInput] = useState("");
  const [isAgentOnline, setIsAgentOnline] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAgentOnline((prev) => !prev);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleMessageSend = () => {
    if (!input.trim()) return;

    const newMessage = { sender: "User", text: input, timestamp: new Date(), options: [] };
    setMessages((prev) => [...prev, newMessage]);

    const ecoBotResponse = getEcoBotResponse(input.toLowerCase());
    setTimeout(() => {
      setMessages((prev) => [...prev, ecoBotResponse]);
    }, 1000);

    setInput("");
    setSelectedOption(null);
  };

  const getEcoBotResponse = (userInput) => {
    if (userInput.includes("volunteer")) {
      return {
        sender: "EcoBot",
        text: "Great to hear you're interested in volunteering! What would you like to know?",
        options: [
          "Upcoming volunteer events",
          "How to sign up",
          "Volunteer benefits"
        ],
        timestamp: new Date(),
      };
    } else if (userInput.includes("event")) {
      return {
        sender: "EcoBot",
        text: "We have exciting events coming up! What would you like to explore?",
        options: [
          "Tree Planting Day details",
          "Eco Workshop info",
          "Other events"
        ],
        timestamp: new Date(),
      };
    } else if (userInput.includes("sustainability")) {
      return {
        sender: "EcoBot",
        text: "Sustainability is at the heart of GreenEco! What tips are you looking for?",
        options: [
          "Reduce plastic use",
          "Save energy",
          "Plant trees"
        ],
        timestamp: new Date(),
      };
    } else {
      return {
        sender: "EcoBot",
        text: "I’m here to assist you with GreenEco. What would you like to talk about?",
        options: [
          "Volunteering opportunities",
          "Upcoming events",
          "Sustainability tips"
        ],
        timestamp: new Date(),
      };
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const newMessage = { sender: "User", text: option, timestamp: new Date(), options: [] };
    setMessages((prev) => [...prev, newMessage]);
    const ecoBotResponse = getEcoBotResponse(option.toLowerCase());
    setTimeout(() => {
      setMessages((prev) => [...prev, ecoBotResponse]);
    }, 1000);
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      className={`py-16 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold ${
              isDarkMode ? 'text-green-400' : 'text-green-700'
            }`}>
              GreenEco <span className="text-green-600">Chat</span>
            </h2>
            <div className={`h-1 w-20 mx-auto mt-4 rounded ${
              isDarkMode ? 'bg-green-400' : 'bg-green-600'
            }`}></div>
          </div>

          <div
            className={`p-6 rounded-xl shadow-lg border-2 transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-gray-800/90 border-gray-700' 
                : 'bg-white/95 border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MessageSquare className={`h-6 w-6 ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`} />
                <h3 className={`text-xl font-semibold ${
                  isDarkMode ? 'text-green-400' : 'text-gray-800'
                }`}>EcoBot Chat</h3>
              </div>
              <div className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {isAgentOnline ? "Chatting with an agent" : "EcoBot is available"}
              </div>
            </div>

            <div className="h-96 overflow-y-auto mb-6 p-4 border rounded-lg border-gray-300 dark:border-gray-700">
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex ${msg.sender === "User" ? "justify-end" : "justify-start"} items-end gap-2 mb-4`}
                    initial="hidden"
                    animate="visible"
                    variants={messageVariants}
                  >
                    <div
                      className={`p-4 rounded-lg max-w-xs sm:max-w-sm ${
                        msg.sender === "User"
                          ? 'bg-green-600 text-white'
                          : isDarkMode
                          ? 'bg-gray-700 text-white'
                          : 'bg-gray-200 text-gray-800'
                      } shadow-md`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      {msg.options && msg.options.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {msg.options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleOptionSelect(option)}
                              className={`block w-full text-left p-2 border rounded-md text-sm transition-colors duration-200 ${
                                isDarkMode
                                  ? 'bg-gray-600 border-gray-500 text-gray-200 hover:bg-gray-500'
                                  : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-300'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="text"
                className={`w-full p-3 border rounded-lg text-sm ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-green-600`}
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleMessageSend()}
              />
              <button
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  input.trim()
                    ? isDarkMode
                      ? 'bg-green-600 text-white hover:bg-green-500'
                      : 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                }`}
                onClick={handleMessageSend}
                disabled={!input.trim()}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoChat;