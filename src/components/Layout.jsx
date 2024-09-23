import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="dark:bg-[#060818] h-screen flex">
      <Sidebar />

      <div className="flex-1 h-full flex flex-col overflow-y-auto">
        <Header />
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
