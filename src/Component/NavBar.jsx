import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { JobContext } from "../Context/JobContext";
import Search from "../Component/Search";

const NavBar = () => {
  const { user } = useContext(JobContext);
  const [isOpen, setIsOpen] = useState(false);

  let LinkClassname = ({ isActive }) => isActive ? " text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 " : " hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"

  return (
    // <nav className="fixed top-0 left-0 w-full p-3 bg-white shadow-md mar-20">
    <nav className="bg-white">
      <div className="container mx-auto flex justify-between items-center">

        {/* Search Component */}
        <Search />

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-gray-700 text-2xl size-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰ {/* Hamburger icon */}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-end space-x-4">
          <NavLink to="/" className={LinkClassname}>Home</NavLink>
          <NavLink to="/job" className={LinkClassname}>Job Listing</NavLink> {/* ✅ Fixed Path */}
          {user ? (
            <h1 className={LinkClassname}>Welcome User!!</h1>
          ) : (
            <>
              <NavLink to="/register" className={LinkClassname}>Register</NavLink>

              <NavLink to="/login" className={LinkClassname}>Login</NavLink>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 bg-white shadow-lg p-6">
          <NavLink to="/" className={LinkClassname} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/job" className={LinkClassname} onClick={() => setIsOpen(false)}>Job Listing</NavLink> {/* ✅ Fixed Path */}
          {user ? (
            <h1 className={LinkClassname}>Welcome User!!</h1>
          ) : (
            <>
              <NavLink to="/register" className={LinkClassname} onClick={() => setIsOpen(false)}>Register</NavLink>

              <NavLink to="/login" className={LinkClassname} onClick={() => setIsOpen(false)}>Login</NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
