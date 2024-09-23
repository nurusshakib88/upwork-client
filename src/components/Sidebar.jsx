import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import IconMenu from "./Icon/IconMenu";
import IconHome from "./Icon/IconHome";
const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  const [collapse, setCollapse] = useState(false);

  const handleSidebarColapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div
      className={`dark:text-white bg-white dark:bg-black w-56 p-5 flex flex-col justify-between shadow-xl transition-all duration-300  ${
        collapse && "w-[75px] items-center"
      }`}
    >
      <div className="flex items-center justify-between">
        {!collapse && <h1 className="text-xl font-bold">Sidebar</h1>}

        <button onClick={handleSidebarColapse}>
          <IconMenu />
        </button>
      </div>

      <div className="flex flex-col gap-3 font-semibold">
        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 overflow-hidden"
        >
          <IconHome />

          <h1 className={`  ${collapse ? "w-0" : "w-40"}`}>Dashboard</h1>
        </NavLink>
        <NavLink
          to="/products"
          className="flex items-center gap-3 overflow-hidden"
        >
          <IconHome />
          <h1 className={`  ${collapse ? "w-0" : "w-40"}`}>Products</h1>
        </NavLink>
      </div>

      <button
        className="dark:bg-[#060818] p-2 rounded-md shadow-lg dark:text-white flex items-center gap-3 overflow-hidden"
        onClick={handleLogout}
      >
        <IconHome />
        <h1 className={`  ${collapse ? "w-0 none" : "w-40"}`}>Logout</h1>
      </button>
    </div>
  );
};

export default Sidebar;
