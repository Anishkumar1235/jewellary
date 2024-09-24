// src/ForgotPassword.js
import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Forgot Password</h1>
        <p className="text-center mb-6">Enter your email to reset your password</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
          </div>
          <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded mt-4">
            Reset Password
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm">
            Remember your password? <a href="/login" className="text-pink-500 hover:underline">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
