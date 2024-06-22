// Navbar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Icons for the mobile menu

const DropdownMenu = ({ title, description }) => (
  <div className="p-4">
    <h3 className="font-bold">{title}</h3>
    <p>{description}</p>
  </div>
);

const MegaMenu = ({ isVisible }) => (
  <motion.div
    className="absolute top-full left-0 w-full bg-white shadow-lg grid grid-cols-1 md:grid-cols-3 p-8"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
    transition={{ duration: 0.3 }}
  >
    <DropdownMenu title="Title 1" description="Description 1" />
    <DropdownMenu title="Title 2" description="Description 2" />
    <DropdownMenu title="Title 3" description="Description 3" />
  </motion.div>
);

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState({
    welfare: false,
    spirituality: false,
    publications: false,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">Logo</div>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <ul
          className={`md:flex space-x-4 hidden ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="hover:text-gray-400">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#education">Education</a>
          </li>
          <li
            className="relative"
            onMouseEnter={() =>
              setDropdownVisible({ ...dropdownVisible, welfare: true })
            }
            onMouseLeave={() =>
              setDropdownVisible({ ...dropdownVisible, welfare: false })
            }
          >
            <a href="#welfare" className="hover:text-gray-400">
              Welfare
            </a>
            {dropdownVisible.welfare && (
              <MegaMenu isVisible={dropdownVisible.welfare} />
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() =>
              setDropdownVisible({ ...dropdownVisible, spirituality: true })
            }
            onMouseLeave={() =>
              setDropdownVisible({ ...dropdownVisible, spirituality: false })
            }
          >
            <a href="#spirituality" className="hover:text-gray-400">
              Spirituality
            </a>
            {dropdownVisible.spirituality && (
              <MegaMenu isVisible={dropdownVisible.spirituality} />
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() =>
              setDropdownVisible({ ...dropdownVisible, publications: true })
            }
            onMouseLeave={() =>
              setDropdownVisible({ ...dropdownVisible, publications: false })
            }
          >
            <a href="#publications" className="hover:text-gray-400">
              Publications
            </a>
            {dropdownVisible.publications && (
              <MegaMenu isVisible={dropdownVisible.publications} />
            )}
          </li>
          <li className="hover:text-gray-400">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <ul className="space-y-4 p-4">
          <li className="hover:text-gray-400">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#education">Education</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#welfare">Welfare</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#spirituality">Spirituality</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#publications">Publications</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
