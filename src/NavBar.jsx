import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-gray-900 text-white">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default NavBar;
