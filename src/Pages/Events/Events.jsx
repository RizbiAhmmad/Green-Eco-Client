import React, { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 p-8">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-10">
        Upcoming Environmental Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={event._id || index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={event.imageUrl || "https://via.placeholder.com/400x300"}
              alt={event.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">{event.name}</h3>
              <p className="text-sm text-gray-600 mb-1"><strong>Date:</strong> {event.date}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Location:</strong> {event.location}</p>
              <p className="text-gray-700 text-sm">{event.description}</p>
              <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition">
                Join Event
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
