import React from "react";
import { FaRegEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <FaRegEnvelope className="text-blue-600 text-xl" />
          <span className="font-bold text-blue-600 text-lg">EnterHrMail</span>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-6">
          <nav className="flex space-x-6 text-sm font-medium text-gray-800">
            <a href="#" className="hover:text-blue-600">
              Dashboard
            </a>
            <a href="#" className="hover:text-blue-600">
              Templates
            </a>
            <a href="#" className="hover:text-blue-600">
              Tracking
            </a>
          </nav>

          {/* Profile Image */}
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
            <img
              src="https://randomuser.me/api/portraits/men/71.jpg" // Replace with your user's image
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
