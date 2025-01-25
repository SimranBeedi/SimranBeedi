import { assets, serviceData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 1 }}
  
    id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Section Heading */}
      <motion.h4   
       initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
       
      
      className="text-center mb-2 text-lg font-Ovo">What I Offer</motion.h4>
      <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
         
      className="text-center text-5xl font-Ovo">My Services</motion.h2>
      <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
         
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I offer comprehensive web development solutions, including full-stack development, front-end design, back-end server-side logic, and robust database management. Whether you're looking for a custom WordPress site or a scalable web application, I use the latest technologies to create dynamic, user-friendly websites tailored to your needs.
      </motion.p>

      {/* Services Grid */}
      <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
         
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
         
          whileHover={{ scale: 1.1 }} 
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 shadow-sm hover:shadow-lg hover:shadow-black/50 transition-shadow duration-300 hover:bg-lightHover hover:-translate-y-1 cursor-pointer dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            {/* Conditionally render the image */}
            {icon && (
              <div className="flex justify-center mb-4">
                <Image src={icon} alt={title} className="w-10" width={40} height={40} />
              </div>
            )}

            {/* Service Title */}
            <h3 className="text-lg my-4 text-gray-700 text-center dark:text-white">{title}</h3>

            {/* Service Description */}
            <p className="text-sm text-gray-600 leading-5 text-center dark:text-white/80">{description}</p>

            {/* Read More Link */}
            {link && (
              <div className="flex justify-center mt-5">
                <a
                  href={link}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  Read More
                  <Image src={assets.right_arrow} alt="Arrow" className="w-4" width={16} height={16} />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
