import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faShoppingCart,
  faGem,
  faPhone,
  faSignInAlt,
  faUserPlus,
  faChevronDown,
  faDiamond,
  faRing,
  faCoins,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={sidebarRef}
      className="w-full bg-gray-800 text-white flex items-center justify-between p-4 fixed top-0 z-10"
    >
      <h2 className="text-1xl md:text-2xl font-bold mr-4">Jewellery Shop</h2>
      <div className="flex items-center space-x-2 flex-1 max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-full">
        <input
          type="text"
          placeholder="Search..."
          className="p-1 border border-gray-300 rounded text-black w-20 sm:w-35 md:w-60" // Responsive width
        />
        <button className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-gray-200">
          Search
        </button>
      </div>
      <button
        className="lg:hidden text-white space-x-3 text-2xl p-2 rounded hover:bg-gray-700"
        onClick={toggleMobileMenu}
      >
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </button>
      <nav
        className={`flex-col lg:flex lg:flex-row lg:items-center lg:space-x-4 absolute lg:relative w-full lg:w-auto bg-gray-800 lg:bg-transparent top-full left-0 lg:top-auto lg:left-auto lg:mt-0 mt-2 lg:p-0 p-4 transition-all duration-300 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="flex items-center px-4 py-2 hover:bg-pink-600 rounded lg:inline-flex"
        >
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Home
        </Link>
        <Link
          to="/about"
          className="flex items-center px-4 py-2 hover:bg-pink-600 rounded lg:inline-flex"
        >
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
          About
        </Link>
        <div className="relative lg:inline-flex group">
          <button className="flex items-center px-4 py-2 hover:bg-pink-600 rounded lg:inline-flex">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Products
            <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
          </button>
          <div className="absolute right-0 bg-gray-800 text-white flex flex-col lg:mt-1 mt-2 w-40 hidden group-hover:flex">
            <Link
              to="/products/diamond"
              className="flex items-center px-4 py-2 hover:bg-pink-600 rounded"
            >
              <FontAwesomeIcon icon={faDiamond} className="mr-2" />
              Diamond
            </Link>
            <Link
              to="/products/gold"
              className="flex items-center px-4 py-2 hover:bg-pink-600 rounded"
            >
              <FontAwesomeIcon icon={faRing} className="mr-2" />
              Gold
            </Link>
            <Link
              to="/products/silver"
              className="flex items-center px-4 py-2 hover:bg-pink-600 rounded"
            >
              <FontAwesomeIcon icon={faCoins} className="mr-2" />
              Silver
            </Link>
          </div>
        </div>
        <div className="relative lg:inline-flex group">
          <button className="flex items-center px-4 py-2 hover:bg-pink-600 rounded lg:inline-flex">
            <FontAwesomeIcon icon={faGem} className="mr-2" />
            Categories
            <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
          </button>
          <div className="absolute right-0 bg-gray-800 text-white flex flex-col lg:mt-1 mt-2 w-64 hidden group-hover:flex">
            <Link
              to="/categories/gold-rings-mens"
              className="flex items-center px-4 py-2 hover:bg-pink-600 rounded"
            >
              Gold Rings (Mens/Women)
            </Link>
            <Link
              to="/categories/ladies-necklace"
              className="flex items-center px-4 py-2 hover:bg-pink-600 rounded"
            >
              Ladies Necklace
            </Link>
            <Link
              to="/categories/gold-chain-mangalsutra"
              className="flex items-center px-4 py-2 hover:bg-pink-600 rounded"
            >
              Gold Chain/ Mangalsutra
            </Link>
            <Link
              to="/categories/gold-bracelet"
              className="flex items-center px-4 py-2 hover:bg-pink-600 rounded"
            >
              Gold Bangle/ Bracelet
            </Link>
            <Link
              to="/categories/diamond-ring-nose-pin"
              className="flex items-center px-4 py-2 hover:bg-pink-600 rounded"
            >
              Diamond Ring/ Nose Pin
            </Link>
            <Link
              to="/categories/silver-items"
              className="flex items-center px-4 py-2 hover:bg-pink-600 rounded"
            >
              Silver Items
            </Link>
          </div>
        </div>
        <Link
          to="/contacts"
          className="flex items-center px-4 py-2 hover:bg-pink-600 rounded lg:inline-flex"
        >
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          Contacts
        </Link>
        <Link
          to="/logout"
          className="flex items-center px-4 py-2 hover:bg-pink-600 rounded lg:inline-flex"
        >
          <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
