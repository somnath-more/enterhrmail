import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const NewTemplate = () => {
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
          <Input label="Skills" placeholder="React.js, Node.js, TypeScript, Java, Spring Boot, MySQL, AWS" />
          <Input label="Notice Period" placeholder="30 Days" />
          <Input label="Current CTC" placeholder="₹10 LPA" />
          <Input label="Expected CTC" placeholder="₹14 LPA" />
          <Input label="Experience" placeholder="3.5 Years" />
          <Input label="Location Preference" placeholder="Bengaluru / Remote" />
          <Input label="Contact" placeholder="johndoe@example.com | +91-9876543210" />
          <Input label="GitHub / Portfolio" placeholder="https://github.com/johndoe" />
          <Textarea label="Description" placeholder="Add a brief description..." />

          {/* Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
            <div className="w-full flex justify-center py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition">
              <FiUploadCloud className="text-3xl text-gray-400" />
            </div>
          </div>

          {/* Custom Field */}
          <button
            type="button"
            className="w-full border border-blue-500 text-blue-500 py-2 rounded-md text-sm hover:bg-blue-50 transition"
          >
            + Add Custom Field
          </button>

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

// Input Component
const Input = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

// Textarea Component
const Textarea = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      placeholder={placeholder}
      className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default NewTemplate;
