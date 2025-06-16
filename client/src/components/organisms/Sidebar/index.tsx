import { useNavigate } from "react-router";
import { FaHome, FaEnvelope, FaCog, FaSignOutAlt } from "react-icons/fa";
import React from "react";
export const SIDEBARDATA = [
  {
    id: 1,
    title: "Dashboard",
    icon: <FaHome />,
    path: "/dashboard",
  },
  // {
  //   id: 2,
  //   title: "New Template",
  //   icon: <FaEnvelope />,
  //   path: "/new-template",
  // },
  {
    id: 3,
    title: "Send Profile",
    icon: <FaCog />,
    path: "/send-to-hr-mail",
  },
  // view sent mails
  {
    id: 4,
    title: "View Sent Mails",
    icon: <FaEnvelope />,
    path: "/view-sent-mails",
  },
]
const Sidebar = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = React.useState(1);

  const menuItemClass =
    "flex items-center p-4 hover:bg-gray-700 cursor-pointer transition duration-300 w-full";
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
            {SIDEBARDATA.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    setSelectedTab(item.id);
                    navigate(item.path);
                  }}
                  className={menuItemClass + +" "+ (selectedTab === item.id ? "bg-gray-700 text-violet-500" : "")}
                  

                >
                  {item.icon && <span  className={iconClass+" "+ (selectedTab === item.id ? "text-violet-500" : "")}>{item.icon}</span>}
                  {item.title}
                </button>
              </li>
            ))}
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
