import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // to handle navigation

const LogoutPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Start with modal open
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to manage the loading spinner
  const navigate = useNavigate(); // to navigate to a new page

  // Function to close the modal
  const closeModal = () => {
    // Option 1: Just close the modal
    setIsModalOpen(false);

    // Option 2: Redirect to another page
    navigate("/home"); // Uncomment to navigate to home or dashboard page
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoading(true); // Show the loading spinner
    setIsModalOpen(false); // Close modal

    setTimeout(() => {
      setIsLoading(false); // Stop the loading spinner
      setIsLoggedOut(true); // Show the success message

      // Add your logout logic here, like clearing auth tokens
      setTimeout(() => {
        navigate("/login"); // Redirect to login page or landing page after showing the success message
      }, 2000); // Delay before navigating
    }, 3000); // Adjust delay for loading (e.g., 3 seconds)
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      {/* Modal (Popup) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 w-11/12 sm:w-96 md:w-1/2 lg:w-1/3 mx-4">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
              Confirm Logout
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6">
              Are you sure you want to logout?
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-end space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleLogout}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300"
              >
                Confirm
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 sm:px-5 sm:py-2 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="loader"></div> {/* Loader spinner */}
            <p className="text-white mt-4 text-lg">Logging out...</p>
          </div>
        </div>
      )}

      {/* Success Message */}
      {isLoggedOut && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-40">
          <div className="bg-green-500 text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Logout successfully!
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutPopup;
