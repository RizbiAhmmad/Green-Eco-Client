import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';
import { ThemeContext } from '../../provider/ThemeProvider';
import { AuthContext } from '../../provider/AuthProvider';
const AddEvent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { isDarkMode } = useContext(ThemeContext);
  const {user} = useContext(AuthContext);
  console.log(user);

  const onSubmit = async (data) => {
  if (!user || !user.email) {
    Swal.fire({
      icon: 'error',
      title: 'User not authenticated',
      text: 'Please log in before adding an event.',
    });
    return;
  }

  try {
    const userRes = await axios.get(`http://localhost:5000/users/${user.email}`);
    const userData = userRes.data;

    if (!userData || !userData.role) {
      Swal.fire({
        icon: 'error',
        title: 'Role missing',
        text: 'Your role information is missing. Contact admin.',
      });
      return;
    }

    const eventData = {
      ...data,
      email: user.email,
      role: userData.role,
      timestamp: new Date().toISOString(),
    };

    const res = await axios.post('http://localhost:5000/events', eventData);

    if (res.data.insertedId || res.data.acknowledged) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Event added successfully!',
      });
      reset();
    } else {
      throw new Error('Failed to save event');
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.message || 'Something went wrong.',
    });
  }
};

  return (
    <div
      className={`min-h-screen flex justify-center items-center ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      <div
        className={`bg-white p-8 rounded-lg shadow-lg max-w-lg w-full ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}
      >
        <h2 className="text-3xl text-green-600 font-bold text-center mb-6">
          Add a New Event
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Event Name */}
          <div>
            <label className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Event Name</label>
            <input
              type="text"
              {...register("name", { required: "Event name is required" })}
              placeholder="Enter event name"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
              }`}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          {/* Event Date */}
          <div>
            <label className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Event Date</label>
            <input
              type="date"
              {...register("date", { required: "Event date is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-800'
              }`}
            />
            {errors.date && <span className="text-red-500 text-sm">{errors.date.message}</span>}
          </div>

          {/* Event Location */}
          <div>
            <label className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Location</label>
            <input
              type="text"
              {...register("location", { required: "Location is required" })}
              placeholder="Enter event location"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
              }`}
            />
            {errors.location && <span className="text-red-500 text-sm">{errors.location.message}</span>}
          </div>

          {/* Event Description */}
          <div>
            <label className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Description</label>
            <textarea
              {...register("description", { required: "Description is required" })}
              placeholder="Describe the event"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 h-12 resize-none ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
              }`}
            />
            {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
          </div>

          {/* Event Image URL  */}
          <div>
            <label className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Image URL</label>
            <input
              type="url"
              {...register("imageUrl")}
              placeholder="Enter image URL"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
              }`}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`w-full py-3 font-semibold rounded-lg transition duration-300 ${
                isDarkMode
                  ? 'bg-green-700 text-white hover:bg-green-800'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
