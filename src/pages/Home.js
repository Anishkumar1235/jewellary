import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // Ensure you import useState
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import img1 from "../assets/Home1.webp";
import img2 from "../assets/Home2.webp";
import img3 from "../assets/Home3.webp";
import img4 from "../assets/Home4.webp";
import img5 from "../assets/Home5.jpg";
import img6 from "../assets/Home6.jpg";
import img7 from "../assets/Gold9.jpg";
import img8 from "../assets/Home8.webp";
import img9 from "../assets/Gold9.jpg";
import img10 from "../assets/Home10.jpeg";
import img11 from "../assets/Home11.jpg";
import img12 from "../assets/Home12.webp";
import img13 from "../assets/Neck4.jpg";
import img14 from "../assets/Neck5.jpeg";
import img15 from "../assets/mangal3.png";
import img16 from "../assets/mangal4.jpg";
import img17 from "../assets/mangal5.jpg";
import img18 from "../assets/mangal6.jpg";
import img19 from "../assets/mangal7.jpg";
import img20 from "../assets/mangal8.webp";
import img21 from "../assets/mangal9.webp";
import img22 from "../assets/mangal10.jpg";
import img23 from "../assets/Neck6.jpg";
import img24 from "../assets/Neck7.jpeg";
import img25 from "../assets/Neck8.jpeg";
import img26 from "../assets/Neck9.jpg";
import img27 from "../assets/Neck10.jpg";
import img28 from "../assets/Gold19.webp";
import img29 from "../assets/Gold21.jpg";
import img30 from "../assets/Gold20.jpg";
import img31 from "../assets/Dring5.jpeg";
import img32 from "../assets/Dring6.png";
import img33 from "../assets/logo2.avif";

const Home = () => {
  const navigate = useNavigate();

  const handleBuyNow = (productId, img) => {
    navigate(`/product/${productId}`, { state: { img } }); // Use backticks here
  };

  const [cart, setCart] = useState([]); // Define the cart state

  const handleAddToCart = (productId, img) => {
    const newProduct = {
      id: productId,
      image: img, // Use the passed 'img' here
    };
    setCart((prevCart) => [...prevCart, newProduct]); // Add the product to the cart
    console.log("Product added to cart:", newProduct);
  };

  return (
    <div className="p-8">
      {/* Hero Section */}
      <div className="bg-pink-500 text-white p-8 rounded-lg shadow-lg mt-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Manish Jewellers</h1>
        <p className="mb-4">
          Discover the finest collection of jewelry, designed to add a touch of
          elegance to your style.
        </p>
        <button className="bg-white text-pink-500 px-6 py-2 rounded-md font-semibold hover:bg-gray-300">
          Shop Now
        </button>
      </div>

      {/* Featured Products */}
      <div className="mt-14">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Product 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img1}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Ring</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(1, img1)}
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>

          {/* Product 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img2}
              alt="Product 2"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Necklace</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>1499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(2, img2)}
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>

          {/* Product 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img3}
              alt="Product 3"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Silver Bracelet</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>2099.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(3, img3)}
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>

          {/* Product 4 */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img4}
              alt="Product 4"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Emerald Earrings</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img4)}
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      {/* Featured Products */}
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img5}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Ring</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img5)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img6}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Earring</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img6)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img7}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Chain</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img7)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img8}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Bangle</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img8)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img9}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Mangalsutra</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img9)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img10}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Ring</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img10)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img11}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Silver Chain</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img11)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img12}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Silver Bangle</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img12)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Offer Banner */}
      <div className="mt-8">
        <img
          src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2022/store-offer/diwali-offer/odisha/topbannerLP.jpg"
          alt="Offer Banner"
          className="w-full h-80 rounded-lg shadow-md"
        />
      </div>

      {/* Featured Products */}
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img13}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Ring</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img13)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img14}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Earring</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img14)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img15}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Chain</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img15)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img16}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Bangle</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img16)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img17}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Mangalsutra</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img17)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img18}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Ring</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img18)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img19}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Silver Chain</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img19)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img20}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Silver Bangle</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img20)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img21}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Diamond Rings</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img21)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img22}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Diamond Earrings</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img22)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img23}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Mens Chain</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img23)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img24}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Mens Bangle</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img24)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Offer Banner */}
      <div className="mt-8 flex justify-center">
        <img
          src="https://www.siriusjewels.com/uploads/blogs/copy_1WhatsApp%20Image%202022-04-23%20at%204.49.54%20PM.jpeg"
          alt="Offer Banner"
          className="w-300 h-80 rounded-lg shadow-md"
        />
      </div>

      {/* Featured Products */}
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img25}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Mangalsutra</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img25)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img26}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gold Ring</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img26)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img27}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Silver Chain</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img27)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img28}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Silver Bangle</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img28)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img29}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Diamond Rings</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img29)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img30}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Diamond Earrings</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img30)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img31}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Mens Chain</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img31)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-pink-200">
            <img
              src={img32}
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Mens Bangle</h3>
            <div className="flex items-center mb-2">
              {/* Rating Stars */}
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <p className="text-gray-700">
              From: ₹<b>499.99</b>
            </p>
            <button
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              onClick={() => handleBuyNow(4, img32)} // Pass the product ID
            >
              Buy Now
            </button>
            <button
              className="mt-2 border border-pink-500 text-yellow-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600 ml-2"
              onClick={() => handleAddToCart(1, img1)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-8 mt-40 rounded-[30px]">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between">
          {/* Logo Section */}
          <div className="mb-6 sm:mb-4">
            <img src={img33} alt="Manish Jewellers Logo" className="h-16" />
            <h2 className="text-lg font-semibold">Manish Jewellers</h2>
          </div>

          {/* Browse Links */}
          <div className="mb-6 sm:mb-4">
            <h3 className="font-semibold mb-2">Browse</h3>
            <ul>
              <li className="mb-1">
                <a href="/home" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-400">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contacts" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="mb-6 sm:mb-4">
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  T's & C's
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6 sm:mb-4">
            <h3 className="font-semibold mb-2">Fancy a chat?</h3>
            <ul>
              <li className="mb-1">
                <a href="tel:+917209767445" className="hover:text-gray-400">
                  📞 +917209767445, 9334054080
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="mailto:rajeshswarnkar5080@gmail.com"
                  className="hover:text-gray-400"
                >
                  📧 rajeshswarnkar5080@gmail.com
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-400">
                  📸 @Manishjewellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  💻 @Manish_Jewellers_creative
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-center text-gray-400">© 2024 Manish Jewellers</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
