import React from "react";
import { useNavigate } from "react-router";
import { FaHome, FaEnvelope, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItemClass =
    "flex items-center p-4 hover:bg-gray-700 cursor-pointer transition duration-300";
  const iconClass = "mr-3 text-xl";

  return (
    <>
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 bg-gray-800 text-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-center">HR Dashboard</h1>
        </div>
        <nav className="mt-8">
          <ul>
            <li className={menuItemClass}>
              <FaHome className={iconClass} />
              <a href="#">Dashboard</a>
            </li>
            <li className={menuItemClass}>
              <FaEnvelope className={iconClass} />
              <a href="#">New Template</a>
            </li>
            <li className={menuItemClass}>
              <FaCog className={iconClass} />
              <a href="#">Send Profile</a>
            </li>
            {/* Add more tabs as needed */}
          </ul>
        </nav>
        <div className="p-4 mt-auto">
          <button
            onClick={() => navigate("/")}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300"
          >
            <FaSignOutAlt className="inline mr-2" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
