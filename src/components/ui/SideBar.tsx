import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const getActiveLink = (
    isActive: boolean
  ) => {
    return `p-1 block ${isActive
      ? "text-yellow-500"
      : "hover:bg-yellow-500 hover:text-gray-900 text-gray-400"}`;
  };

  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
      <div className="p-6">
        <p className="uppercase text-white text-2xl tracking-wide font-bold">
          Restaurant App
        </p>
        <p className="mt-3 text-gray-600">
          Administra tu restaurant en la siguiente opciones
        </p>
        <nav className="mt-10">
          <NavLink
            className={({isActive}) => getActiveLink(isActive)}
            to="/"
          >
            Ordenes
          </NavLink>
          <NavLink
            className={({isActive}) => getActiveLink(isActive)}
            to="/menu"
          >
            Menu
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
