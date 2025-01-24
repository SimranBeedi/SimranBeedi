'use client';

import { useState, useEffect } from "react"; // Import React hooks
import Navbar from "@/components/Navbar"; // Import Navbar
import Header from "@/components/Header"; // Import Header
import About from "@/components/About"; // Import About
import Services from "@/components/Services"; // Import Services
import Work from "@/components/Work"; // Import Work
import Contact from "@/components/Contact"; // Import Contact
import Footer from "@/components/Footer"; // Import Footer

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check theme preference on initial load
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // Apply/remove dark mode class when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
