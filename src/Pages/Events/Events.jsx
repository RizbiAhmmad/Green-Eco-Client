import React from "react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Green Earth Tree Plantation",
      date: "2025-06-05",
      time: "10:00 AM",
      location: "Central Park, NY",
      description: "Join us in planting 500 trees to celebrate World Environment Day.",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "Beach Cleanup Drive",
      date: "2025-06-10",
      time: "8:00 AM",
      location: "Santa Monica Beach",
      description: "Help us remove plastic waste from the shoreline and raise awareness.",
      image: "https://images.unsplash.com/photo-1615394762227-58d1c71f8e59?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "Community Garden Workshop",
      date: "2025-06-15",
      time: "3:00 PM",
      location: "Downtown Community Center",
      description: "Learn how to grow your own vegetables and promote sustainable living.",
      image: "https://images.unsplash.com/photo-1601733518719-3c33c6f09c1c?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 p-8">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-10">Upcoming Environmental Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-1"><strong>Date:</strong> {event.date}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Time:</strong> {event.time}</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Location:</strong> {event.location}</p>
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
