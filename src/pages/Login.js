// src/Login.js
import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <p className="text-center mb-6">Welcome to the Jewelry Shop!</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
          </div>
          <div className="text-right">
            <a href="/forgot-password" className="text-sm text-pink-500 hover:underline">Forgot Password?</a>
          </div>
          <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded mt-4">
            Login
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm">
            Don't have an account? <a href="/signup" className="text-pink-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
