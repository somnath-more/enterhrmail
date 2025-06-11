import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const ViewTemplate = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">John Doe</h2>
              <p className="text-sm text-gray-500">Full Stack Developer</p>
            </div>
          </div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 text-2xl" />
          </a>
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Save Template
            </button>
            <button
              type="button"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Live Preview Mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewTemplate;
