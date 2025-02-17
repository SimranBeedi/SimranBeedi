import { assets } from '../assets/assets'; // Adjust the path as needed
import Image from 'next/image'; // Import Image component from Next.js
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [dynamicText, setDynamicText] = useState(""); // State for the typed text
  const textToType = "Full Stack Developer"; // The text to display
  const typingSpeed = 100; // Typing speed in milliseconds
  const charIndexRef = useRef(0); // Ref to track character index without causing re-renders

  useEffect(() => {
    const typeText = () => {
      if (charIndexRef.current <= textToType.length) {
        setDynamicText(textToType.slice(0, charIndexRef.current)); // Update dynamicText
        charIndexRef.current += 1;
        setTimeout(typeText, typingSpeed);
      }
    };
    typeText(); // Start typing effect

    return () => {
      // Cleanup timeout to prevent memory leaks
      charIndexRef.current = textToType.length;
    };
  }, []); // Run only once on initial render

  // Reusable animation settings
  const animationSettings = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, type: "spring" },
  };

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img || "/fallback-profile.png"} // Add fallback
          alt="Profile Image"
          className="rounded-full w-32 h-32 mx-auto border-2"
        />
      </motion.div>

      {/* Introduction */}
      <motion.h3
        {...animationSettings} // Apply reusable animation settings
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Simran Beedi
        <Image src={assets.hand_icon || "/fallback-hand.png"} alt="Hand Icon" className="w-6" />
      </motion.h3>

      {/* Job Title */}
      <motion.h1
        {...animationSettings}
        transition={{ ...animationSettings.transition, delay: 0.5 }} // Add delay
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        <span className="typing-effect">{dynamicText}</span>
        <span className="blinking-cursor">|</span> {/* Blinking cursor */}
      </motion.h1>

      {/* Description */}
      <motion.p
        {...animationSettings}
        transition={{ ...animationSettings.transition, delay: 0.7 }} // Add delay
        className="max-w-3xl mx-auto font-Ovo"
      >
        I'm a passionate developer with experience in building scalable and efficient applications. Let's build something amazing together!
      </motion.p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          {...animationSettings}
          transition={{ ...animationSettings.transition, delay: 1 }} // Add delay
          href="#contact"
          className="inline-block px-6 py-3 border border-gray-300 rounded-full mr-4 dark:bg-transparent"
        >
          Contact Me
          <Image src={assets.right_arrow_white || "/fallback-arrow.png"} alt="Right Arrow" className="inline-block w-4 ml-2" />
        </motion.a>
        <motion.a
          {...animationSettings}
          transition={{ ...animationSettings.transition, delay: 1.2 }}
          href="https://simranbeedi.github.io/SimranBeedi/simran_resume.pdf"  // Full URL
          download="simran_resume.pdf"
          className="inline-block px-6 py-3 border border-gray-300 rounded-full bg-white dark:text-black"
        >
          Download Resume
          <Image src={assets.download_icon || "/fallback-download.png"} alt="Download Icon" className="inline-block w-4 ml-2" />
        </motion.a>

      </div>
    </div>
  );
};

export default Header;
