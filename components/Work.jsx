import React from 'react';
import { assets, serviceData } from '@/assets/assets'; // Correct import for serviceData

const Services = () => {
  return (
    <div className="w-full px-[12%] py-10">
      <h2 className="text-center text-5xl font-Ovo">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
        {serviceData.map((service, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-5 rounded-lg">
            <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
