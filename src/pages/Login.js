// src/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State for loading
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true); // Start loading

    // Simulate authentication logic for 5.5 seconds
    setTimeout(() => {
      if (email === "anishkumar5080@gmail.com" && password === "8271") {
        console.log("User logged in:", { email, password });
        setLoading(false); // Stop loading
        navigate("/home"); // Navigate to home page
      } else {
        setLoading(false); // Stop loading on error
        alert("Invalid email or password.");
      }
    }, 5500); // Simulate delay for authentication
  };

  const handleRegister = () => {
    navigate("/register"); // Navigate to registration page
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password"); // Navigate to forgot password page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
          Login
        </h1>
        <p className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-center">
          Welcome to Manish Jewellers!
        </p>

        {/* Show loader while logging in */}
        {loading ? (
          <div className="flex justify-center items-center">
            <div
              style={{
                border: "8px solid rgba(0, 0, 0, 0.1)",
                borderTopColor: "#ff69b4", // Pink color
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                animation: "spin 1s linear infinite",
              }}
            ></div>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-base sm:text-lg"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm sm:text-base font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-base sm:text-lg"
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded mt-4 text-base sm:text-lg ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading} // Disable button while loading
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* Forgot Password and Register links */}
            <div className="flex justify-between mt-4">
              <a
                onClick={handleForgotPassword}
                className="text-sm sm:text-base text-pink-500 hover:underline cursor-pointer"
              >
                Forgot Password?
              </a>
              <a
                onClick={handleRegister}
                className="text-sm sm:text-base text-pink-500 hover:underline cursor-pointer"
              >
                Register for a New Account
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
