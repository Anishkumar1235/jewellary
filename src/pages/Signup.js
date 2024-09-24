// src/Signup.js
import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-10">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Signup</h1>
        <p className="text-center mb-6">Welcome to the Jewelry Shop!</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" id="confirm-password" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
          </div>
          <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded mt-4">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm">
            Already have an account? <a href="/login" className="text-pink-500">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
