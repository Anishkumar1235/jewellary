// src/About.js
import React from 'react';

const About = () => {
  return (
    <div className="p-8 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 mt-16 text-center">About Us</h1>
        <div className="mb-8">
          <p className="text-lg">
            Welcome to the jewellery shop! We are dedicated to providing the finest jewellery to our customers. Our collection includes exquisite pieces crafted with the utmost care and precision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p>
              Founded in 1995, our jewellery shop has been a family-owned business for over 25 years. We started with a small store and have grown into a trusted name in the industry, known for our quality and customer service.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <p>
              We belive in  integrity, craftsmanship, and customer satisfaction. Each piece of jewelry is carefully inspected to ensure it meets our high standards. We strive to make each shopping experience memorable and enjoyable.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="flex space-x-8">
            <div className="w-1/3">
              <img src="Papa.jpg" alt="Team Member 1" className="rounded-lg" />
              <h3 className="text-xl font-medium mt-4">Rajesh Swarnkar</h3>
              <p className="text-sm">Founder & CEO</p>
            </div>
            <div className="w-1/3">
              <img src="Papa.jpg" alt="Team Member 2" className="rounded-lg" />
              <h3 className="text-xl font-medium mt-4">Rajesh Swarnkar</h3>
              <p className="text-sm">Chief Designer</p>
            </div>
            <div className="w-1/3">
              <img src="Mk.jpg" alt="Team Member 3" className="rounded-lg" />
              <h3 className="text-xl  font-medium mt-3 text-center">Manish Swarnkar</h3>
              <p className="text-medium text-center">Sales Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
