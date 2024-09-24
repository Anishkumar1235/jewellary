// src/About.js
import React from 'react';

const About = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white text-gray-800">
      <div className="max-w-full sm:max-w-3xl md:max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 mt-12 sm:mt-16 text-center">About Us</h1>
        <div className="mb-6 sm:mb-8">
          <p className="text-base sm:text-lg md:text-xl">
            Welcome to the jewellery shop! We are dedicated to providing the finest jewellery to our customers. Our collection includes exquisite pieces crafted with the utmost care and precision.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-base sm:text-lg">
              Founded in 1995, our jewellery shop has been a family-owned business for over 25 years. We started with a small store and have grown into a trusted name in the industry, known for our quality and customer service.
            </p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Our Values</h2>
            <p className="text-base sm:text-lg">
              We believe in integrity, craftsmanship, and customer satisfaction. Each piece of jewelry is carefully inspected to ensure it meets our high standards. We strive to make each shopping experience memorable and enjoyable.
            </p>
          </div>
        </div>
        <div className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="flex flex-col sm:flex-row sm:space-x-6 md:space-x-8">
            <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
              <img src="Papa.jpg" alt="Team Member 1" className="w-full h-auto rounded-lg" />
              <h3 className="text-lg sm:text-xl font-medium mt-4">Rajesh Swarnkar</h3>
              <p className="text-sm sm:text-base">Founder & CEO</p>
            </div>
            <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
              <img src="Papa.jpg" alt="Team Member 2" className="w-full h-auto rounded-lg" />
              <h3 className="text-lg sm:text-xl font-medium mt-4">Rajesh Swarnkar</h3>
              <p className="text-sm sm:text-base">Chief Designer</p>
            </div>
            <div className="w-full sm:w-1/3">
              <img src="Mk.jpg" alt="Team Member 3" className="w-full h-auto rounded-lg" />
              <h3 className="text-lg sm:text-xl font-medium mt-4 text-center">Manish Swarnkar</h3>
              <p className="text-sm sm:text-base text-center">Sales Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
