import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PopupForm from "./PopupForm";

const ProductPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [address, setAddress] = useState("Anish Kumar, 829128");
  const [addressDetails, setAddressDetails] = useState(
    "Gomia, Khudgadda Basti Near Durga Mandir, Hazar..."
  );
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(84000); // Initial total price

  const navigate = useNavigate();
  const location = useLocation();
  const { img } = location.state || {}; // Destructure the image from the state

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const updateAddress = (formData) => {
    const { name, phoneNo, pinCode, state, district, optionalPhoneNo } =
      formData;
    const newAddress = `${name}, ${phoneNo}, ${pinCode}`;
    const newAddressDetails = `${state}, ${district}, ${optionalPhoneNo}`;

    setAddress(newAddress);
    setAddressDetails(newAddressDetails);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);

    const itemPrice = 84000; // Assuming the price is ₹84,000 for 1 item
    setTotalPrice(itemPrice * newQuantity);
  };

  const handlePlaceOrder = () => {
    navigate("/payment"); // Navigate to the Payment Page
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 max-w-screen-xxl mx-auto">
      {/* Shopping Bag Header */}
      <div className="flex justify-between items-center p-4 mb-6 mt-8 sm:mt-10 md:mt-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          SHOPPING BAG
        </h2>
        <i className="fas fa-heart text-gray-600 text-lg sm:text-xl md:text-2xl"></i>
      </div>

      {/* Delivery Information */}
      <div className="bg-pink-100 p-4 sm:p-6 md:p-8 rounded-lg shadow-md mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <p className="font-bold text-md sm:text-lg md:text-xl">
              Deliver to: <span className="text-black">{address}</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg">{addressDetails}</p>
          </div>
          <button
            onClick={openPopup}
            className="text-pink-600 font-bold mt-4 sm:mt-0"
          >
            Change
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col sm:flex-row md:space-x-6 lg:space-x-8">
        {/* Product Item */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mb-6 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 lg:w-1/3 h-80">
            <img
              src={img} // Show the product image passed from Home
              alt="Product"
              className="object-cover rounded-md w-full h-full"
            />
          </div>

          <div className="flex-1 md:ml-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700">
                Ornaments
              </h3>
              <i className="fas fa-times text-gray-400 text-lg sm:text-xl md:text-2xl"></i>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">
              Men Yellow Woven Design Chain
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-400">
              Sold by: Manish Jewellers
            </p>

            {/* Size, Quantity, Weight */}
            <div className="flex flex-col sm:flex-row sm:space-x-6 mt-4">
              <div>
                <label className="text-xs sm:text-sm md:text-base text-gray-500">
                  Size:{" "}
                </label>
                <span className="font-semibold text-md sm:text-lg">22 cm</span>
              </div>
              <div className="mt-2 sm:mt-0">
                <label className="text-xs sm:text-sm md:text-base text-gray-500">
                  Weight:{" "}
                </label>
                <span className="font-semibold text-md sm:text-lg">11/gm</span>
              </div>
              <div className="mt-2 sm:mt-0">
                <label className="text-xs sm:text-sm md:text-base text-gray-500">
                  Qty:{" "}
                </label>
                <select
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border border-gray-300 rounded p-1 text-base sm:text-lg md:text-xl lg:text-2xl"
                  style={{ height: "2.5rem", overflowY: "auto" }}
                >
                  {[...Array(5).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price and Discount */}
            <div className="mt-4">
              <p className="font-bold text-lg sm:text-xl md:text-2xl text-gray-700">
                ₹{totalPrice.toLocaleString()}
                <span className="line-through text-sm text-gray-400">
                  ₹98,000
                </span>
                <span className="text-red-500 text-sm font-semibold ml-2">
                  10% OFF
                </span>
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-2">
                14 days return available
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1">
                Delivery between{" "}
                <span className="font-semibold">21 Sep - 23 Sep</span>
              </p>
            </div>
          </div>
        </div>

        {/* Coupons and Price Details */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg flex-1">
          {/* Coupon Section */}
          <div className="border-b pb-4 mb-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Coupons
            </h3>
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex-1 mr-2 mb-4 sm:mb-0">
                <p className="text-sm sm:text-base">Extra ₹100 OFF</p>
                <p className="text-xs sm:text-sm">
                  Rs. 100 off on minimum purchase of Rs. 599
                </p>
              </div>
              <button className="bg-pink-500 text-white text-xs sm:text-sm px-3 py-2 rounded">
                APPLY COUPON
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2">SORRYDE3PMNRNW</div>
          </div>

          {/* Price Details Section */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Price Details ({quantity} Item{quantity > 1 && "s"})
            </h3>
            <div className="flex justify-between mb-1">
              <span>Total MRP</span>
              <div className="flex justify-between line-through mb-1">
                <span>₹98,000</span>
              </div>
            </div>
            <div className="flex justify-between mb-1">
              <span>Discount on MRP</span>
              <span className="text-green-500">-₹14,000</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Platform Fee</span>
              <span>₹20</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Shipping Fee</span>
              <span>FREE</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total Amount</span>
              <span>₹{totalPrice + 20}</span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
            <div>
              <span className="text-xs sm:text-sm">Genuine Products</span>
              <span className="text-xs sm:text-sm ml-4">
                Contactless Delivery
              </span>
            </div>
            <div>
              <span className="text-xs sm:text-sm">Secure Payments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          className="bg-pink-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg sm:text-xl md:text-2xl mr-4 w-64"
          onClick={handlePlaceOrder}
        >
          PLACE ORDER
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg sm:text-xl md:text-2xl mt-4"
          onClick={handleGoBack}
        >
          BACK
        </button>
      </div>

      {/* Popup Form */}
      <PopupForm
        isOpen={isPopupOpen}
        onClose={closePopup}
        onUpdate={updateAddress}
      />
    </div>
  );
};

export default ProductPage;
