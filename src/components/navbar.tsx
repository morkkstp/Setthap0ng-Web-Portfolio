import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container-xl mx-auto bg-171717 text-white text-xl z-50 relative">
      <div className="flex justify-between items-center p-4">
        <div className="text-2xl text-white font-bold">
          Setthap<span className="text-fad02c">0</span>ng
        </div>

        {/* Hamburger button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu items */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-4 bg-171717 transition-transform duration-300 ease-in-out absolute md:static md:ml-auto ${
            isOpen ? "top-16 left-0 right-0" : "top-[-100vh]"
          }`}
        >
          <li className="text-left ml-5 p-2 md:p-0">
            <NavLink
              to="/"
              className="hover:underline hover:text-fad02c"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="text-left ml-5 p-2 md:p-0">
            <NavLink
              to="/aboutme"
              className="hover:underline hover:text-fad02c"
              onClick={() => setIsOpen(false)}
            >
              About me
            </NavLink>
          </li>
          <li className="text-left ml-5 p-2 md:p-0">
            <NavLink
              to="/contact"
              className="hover:underline hover:text-fad02c"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li className="text-left ml-5 p-2 md:p-0">
            <NavLink
              to="/skill"
              className="hover:underline hover:text-fad02c"
              onClick={() => setIsOpen(false)}
            >
              Skill
            </NavLink>
          </li>
          <li className="text-left ml-5 p-2 md:p-0">
            <NavLink
              to="/certificate"
              className="hover:underline hover:text-fad02c"
              onClick={() => setIsOpen(false)}
            >
              Certificate
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
