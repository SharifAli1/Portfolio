import React from "react";
import { Link } from "react-scroll";

function Header() {
  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="flex justify-center items-center fixed top-0 left-0 right-0 z-50 h-16  backdrop-blur-sm shadow-md">
      <nav className="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 w-full justify-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-blue-200 hover:text-gray-100 transition-all duration-300 font-medium cursor-pointer py-2 px-1 sm:px-2 md:px-3 lg:px-4 rounded-lg text-xs sm:text-sm md:text-base tracking-wide whitespace-nowrap"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
