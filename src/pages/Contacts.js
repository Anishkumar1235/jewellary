// src/Contacts.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
  return (
    <div className="p-8 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 mt-16 text-center">Contact Us</h1>
        <p className="text-lg mb-8 text-center">
          We'd love to hear from you! Whether you have a question about our products, need assistance, or just want to talk, we want to know what’s on your mind.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-2"><strong>Address:</strong> Jharkhand, Bokaro, Gomia main road 1/ b swang</p>
            <p className="mb-2"><strong>Phone:</strong> +91 7209767445, 9334054080</p>
            <p className="mb-2"><strong>Email:</strong> rajeshswarnkar5080@gmail.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://wa.me/917209767445" target="_blank" rel="noopener noreferrer" className="text-green-500">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input type="text" id="name" className="mt-1 p-2 border border-gray-300 rounded w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input type="email" id="email" className="mt-1 p-2 border border-gray-300 rounded w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea id="message" rows="4" className="mt-1 p-2 border border-gray-300 rounded w-full"></textarea>
              </div>
              <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;