import { assets, workData } from '@/assets/assets'; // Ensure the path is correct
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Section Title */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        "Welcome to my portfolio, where creativity meets functionality. Each project showcases my
        commitment to delivering innovative and user-friendly designs that leave a lasting
        impression."
      </motion.p>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5 dark:text-black"
      >
        {workData?.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: url(${project.bgImage}) }}
          >
            {/* Project Details */}
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <a
                  target='_blank'
                  href={project.link || '#'}
                  className="block"
                  aria-label={View details of ${project.title}}
                >
                  <h2 className="font-semibold text-lg group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {project.description}
                  </p>
                </a>
              </div>
              <div
                className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
                aria-label="Send icon"
              >
                <Image
                  src={assets.send_icon || '/assets/send_icon.svg'}  // Fallback path
                  alt="send_icon"
                  className="w-5"
                  width={24}  // Optional width
                  height={24} // Optional height
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href="#"
        className="w-max flex items-center justify-center gap-2 text-black border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-pink-100 duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
          width={16}  // Optional width
          height={16} // Optional height
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
