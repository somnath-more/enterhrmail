import React from 'react';
import { useNavigate } from 'react-router';

const ProfileLogout = () => {
  const navigate = useNavigate();

  return (
    <ul
      className="absolute right-2 top-full mt-2 w-64 bg-white shadow-lg rounded-md z-50 py-2"
      role="menu"
      aria-orientation="vertical"
    >
      <li className="flex items-center gap-3 px-4 py-2">
        <div className="w-10 h-10 rounded-full overflow-hidden border">
          <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
        </div>
        <div>
          <h6 className="text-gray-800 font-semibold">John Doe</h6>
          <p className="text-xs text-gray-500">john@example.com</p>
        </div>
      </li>
      <li>
        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
          My Profile
        </button>
      </li>
      <li className="px-4 pt-2">
        <button
          onClick={() => navigate("/")}
          className="w-full btn btn-error btn-sm text-red-800 hover:bg-gray-100"
        >
          Sign out
        </button>
      </li>
    </ul>
  );
};

export default ProfileLogout;
