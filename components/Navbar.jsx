import Image from 'next/image';
import { assets } from '@/assets/assets';
import React, { useEffect, useState, useRef } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sideMenuRef = useRef(null);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent Body Scroll when Menu is Open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  // Close Menu on Outside Click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Background Image */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="Background" className="w-full" />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? 'bg-white bg-opacity-90 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20'
            : ''
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full border-white/50 dark:px-12 py-3 ${
            isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:bg-transparent'
          }`}
        >
          <li>
            <a className="font-Ovo hover:text-orange-500" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-orange-500" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-orange-500" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-orange-500" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-orange-500" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="relative group p-2"
            aria-label="Toggle dark mode"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Dark Mode Toggle"
              className="w-6"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
              Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
            </span>
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow" className="w-3 ml-1" />
          </a>

          {/* Hamburger Menu */}
          <button
            className="block md:hidden ml-3"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul
  ref={sideMenuRef}
  className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed left-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white ${
    menuOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
        <div className="absolute right-6 top-6" onClick={toggleMenu} aria-label="Close menu">
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt="Close"
            className="w-5 cursor-pointer"
          />
        </div>
        <li>
          <a className="font-Ovo " href="#top" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a className="font-Ovo " href="#about" onClick={toggleMenu}>
            About me
          </a>
        </li>
        <li>
          <a className="font-Ovo " href="#services" onClick={toggleMenu}>
            Services
          </a>
        </li>
        <li>
          <a className="font-Ovo " href="#work" onClick={toggleMenu}>
            My Work
          </a>
        </li>
        <li>
          <a className="font-Ovo " href="#contact" onClick={toggleMenu}>
            Contact me
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
