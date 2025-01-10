import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "react-use-cookie";

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeCookie("my_token");
    removeCookie("user");
    navigate("/");
  };
  return (
    <button onClick={handleLogout} className="focus:ring-4 focus:outline-none py-2">
      <FaSignOutAlt size={18} />
      Logout
    </button>
  );
};

export default LogoutButton;
