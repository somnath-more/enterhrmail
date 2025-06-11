import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import ProfileLogout from "../../molecules/ProfileLogout";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClickedOnProfile, setIsClickedOnProfile] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 w-full relative z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 py-3">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <FaRegEnvelope className="text-blue-600 text-xl" />
          <span className="font-bold text-blue-600 text-lg sm:text-xl">
            EnterHrMail
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6 text-sm font-medium text-gray-800">
            <button
              onClick={() => navigate("/dashboard")}
              className="hover:text-blue-600 transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => Swal.fire("Under Development")}
              className="hover:text-blue-600 transition"
            >
              Tracking
            </button>
            <button
              onClick={() => navigate("/view-sent-mails")}
              className="hover:text-blue-600 transition"
            >
              View Sent Mails
            </button>
          </nav>
          <div
            onClick={() => {
              setIsClickedOnProfile(!isClickedOnProfile);
            }}
            className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 relative"
          >
            <img
              src="https://randomuser.me/api/portraits/men/71.jpg"
              alt="User Profile"
              className="w-full h-full object-cover cursor-pointer"
            />
            {isClickedOnProfile && <ProfileLogout  />}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 animate-slide-down"
        >
          <nav className="flex flex-col items-start px-6 py-4 space-y-3 text-sm font-medium text-gray-800">
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/dashboard");
              }}
              className="hover:text-blue-600 w-full text-left"
            >
              Dashboard
            </button>
            <button
              onClick={() => {
                setMenuOpen(false);
                Swal.fire("Under Development");
              }}
              className="hover:text-blue-600 w-full text-left"
            >
              Tracking
            </button>
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/view-sent-mails");
              }}
              className="hover:text-blue-600 w-full text-left"
            >
              View Sent Mails
            </button>
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/");
              }}
              className="w-full text-left btn btn-error btn-soft btn-block"
            >
              <span className="icon-[tabler--logout]"></span>
              Sign out
            </button>
          </nav>
        </div>
      )}
      {isClickedOnProfile && <ProfileLogout />}
    </header>
  );
};

export default Header;
