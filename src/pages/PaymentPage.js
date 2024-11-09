import React, { useState } from "react";
import { FaCashRegister, FaGooglePay, FaMobileAlt } from "react-icons/fa"; // Add relevant icon for PhonePe
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  // Function to handle going back to the previous page
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2">
      <div
        className="bg-white p-3 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm"
        style={{ maxWidth: "600px", maxHeight: "600px" }} // Reduced container size
      >
        <h1 className="text-lg sm:text-xl font-bold mt-6 mb-3">Payment Page</h1>
        <p className="text-xs sm:text-sm mb-3">
          Proceed with your payment here.
        </p>

        <form>
          <div className="mb-3">
            <label className="block mb-1 text-xs sm:text-sm font-semibold">
              Payment Method:
            </label>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="card"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === "card"}
                onChange={handlePaymentMethodChange}
                className="mr-1"
              />
              <label
                htmlFor="card"
                className="flex items-center text-xs sm:text-sm font-bold" // Added font-bold
              >
                <span className="mr-1">Card Payment</span>
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="cash"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={handlePaymentMethodChange}
                className="mr-1"
              />
              <label
                htmlFor="cash"
                className="flex items-center text-xs sm:text-sm font-bold" // Added font-bold
              >
                <span className="mr-1">Cash on Delivery</span>
                <FaCashRegister className="text-green-500 text-base ml-1" />
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="googlePay"
                name="paymentMethod"
                value="googlePay"
                checked={paymentMethod === "googlePay"}
                onChange={handlePaymentMethodChange}
                className="mr-1"
              />
              <label
                htmlFor="googlePay"
                className="flex items-center text-xs sm:text-sm font-bold" // Added font-bold
              >
                <span className="mr-1">Google Pay</span>
                <FaGooglePay className="text-blue-500 text-base ml-1" />
              </label>
            </div>
            {/* Add PhonePe option */}
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="phonePe"
                name="paymentMethod"
                value="phonePe"
                checked={paymentMethod === "phonePe"}
                onChange={handlePaymentMethodChange}
                className="mr-1"
              />
              <label
                htmlFor="phonePe"
                className="flex items-center text-xs sm:text-sm font-bold" // Added font-bold
              >
                <span className="mr-1">PhonePe</span>
                <FaMobileAlt className="text-yellow-500 text-base ml-1" />{" "}
                {/* Added PhonePe Icon */}
              </label>
            </div>
          </div>

          {paymentMethod === "card" && (
            <>
              <label className="block mb-2 text-xs sm:text-sm font-semibold">
                Card Number:
              </label>
              <input
                type="text"
                className="w-full p-1 border border-gray-300 rounded mb-2 text-xs sm:text-sm"
                placeholder="Enter your card number"
              />
              <label className="block mb-2 text-xs sm:text-sm font-semibold">
                Expiry Date:
              </label>
              <input
                type="text"
                className="w-full p-1 border border-gray-300 rounded mb-2 text-xs sm:text-sm"
                placeholder="MM/YY"
              />
              <label className="block mb-2 text-xs sm:text-sm font-semibold">
                CVV:
              </label>
              <input
                type="text"
                className="w-full p-1 border border-gray-300 rounded mb-2 text-xs sm:text-sm"
                placeholder="CVV"
              />
            </>
          )}

          <button
            type="submit"
            className="bg-pink-500 hover:bg-green-600 text-white px-2 py-1 rounded w-full mt-3 text-xs sm:text-sm"
          >
            Pay Now
          </button>
        </form>
      </div>

      {/* Back Button */}
      <button
        onClick={handleGoBack}
        className="text-blue-500 hover:text-blue-700 flex font-bold items-center mt-2 justify-center border border-blue-500 rounded-lg px-2 py-1 hover:bg-blue-100 text-xs"
      >
        <i className="fas font-bold fa-chevron-left mr-1"></i>
        <span>Back</span>
      </button>
    </div>
  );
};

export default PaymentPage;
