import React from 'react';
import img1 from '../assets/Neck1.jpg'
import img2 from '../assets/Neck2.jpg'
import img3 from '../assets/Neck3.jpg'
import img4 from '../assets/Neck4.jpg'
import img5 from '../assets/Neck5.jpeg'
import img6 from '../assets/Neck6.jpg'
import img7 from '../assets/Neck7.jpeg'
import img8 from '../assets/Neck8.jpeg'
import img9 from '../assets/Neck9.jpg'
import img10 from '../assets/Neck10.jpg'
import img11 from '../assets/Neck11.jpg'
import img12 from '../assets/Neck12.jpg'
import img13 from '../assets/Neck13.jpg'
import img14 from '../assets/Neck14.jpg'
import img15 from '../assets/Neck15.jpg'
import img16 from '../assets/Neck16.jpg'
import img17 from '../assets/Neck17.webp'
import img18 from '../assets/Neck18.jpeg'
import img19 from '../assets/Neck19.jpg'
import img20 from '../assets/Neck20.jpg'
import img21 from '../assets/Neck21.jpg'
import img22 from '../assets/Neck22.jpg'
import img23 from '../assets/Neck23.jpg'
import img24 from '../assets/Neck24.jpg'
import img25 from '../assets/Neck25.jpeg'
import img26 from '../assets/Neck26.jpg'
import img27 from '../assets/Neck27.jpeg'
import img28 from '../assets/Neck28.jpg'
import img29 from '../assets/Neck29.jpg'
import img30 from '../assets/Neck30.jpg'


const LadiesNecklace = () => {
  return (
    <div className="p-4">

      
      <h1 className="text-4xl font-bold mt-16 text-center">Ladies Necklace</h1>
      <p className='text-3xl font-bold mt-8 text-center'>Explore our exquisite collection of Gold jewellery.</p>

      
      {/* Offer Banner */}
      <div className="mt-5">
        <img src="https://sencowebfiles.s3.ap-south-1.amazonaws.com/contents/banner/XfL8bBdN5y4b7hlnfVv0UMYqHgevX1C63tX0B1fO.jpeg" alt="Offer Banner" className="w-full h-80 rounded-lg shadow-md mt-35"/>
      </div>
      


      {/* Featured Products */}
      <div className="mt-2">
        <h2 className="text-3xl font-bold mb-4 mt-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img1} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Diamond Ring</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>899.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img2} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Gold Necklace</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>599.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img3} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Silver Bracelet</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>799.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img4} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Emerald Earrings</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>999.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
        </div>
      </div>

       {/* Featured Products */}
       <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img5} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Gold Ring</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>399.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img6} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Gold Earring</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>599.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img7} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Gold Chain</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>499.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img8} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Gold Bangle</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>899.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img9} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Gold Mangalsutra</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>1099.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img10} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Gold Ring</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>1199.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img11} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Silver Chain</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>899.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img12} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Silver Bangle</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>1399.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
        </div>
      </div>

      
      {/* Offer Banner */}
      <div className="mt-8">
        <img src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2022/store-offer/diwali-offer/odisha/topbannerLP.jpg" alt="Offer Banner" className="w-full h-80 rounded-lg shadow-md"/>
      </div>

       {/* Featured Products */}
       <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img13} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Gold Ring</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>1699.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img14} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Gold Earring</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>1599.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img15} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Gold Chain</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>1899.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img16} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Gold Bangle</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>1999.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
        </div>
      </div>

       {/* Featured Products */}
       <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img17} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Gold Mangalsutra</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>1799.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img18} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Gold Ring</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>1099.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img19} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Silver Chain</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>399.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img20} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Silver Bangle</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>499.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
        </div>
      </div>

      
       {/* Featured Products */}
       <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img21} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Diamond Rings</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>899.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img22} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Diamond Earrings</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>699.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img23} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Mens Chain</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>899.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img24} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Mens Bangle</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>699.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
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
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img25} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Gold Mangalsutra</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>999.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img26} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Gold Ring</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>1399.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img27} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Silver Chain</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>1599.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img28} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Silver Bangle</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>1899.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
        </div>
      </div>

       {/* Featured Products */}
       <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img29} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Diamond Rings</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>799.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img30} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Diamond Earrings</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>999.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img13} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Mens Chain</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>399.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img7} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Mens Bangle</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>899.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
        </div>
      </div>


      {/* Call to Action */}
      <div className="mt-8 p-6 bg-pink-100 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-4">Stay updated with our latest collections and exclusive offers.</p>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-pink-600">Subscribe Now</button>
      </div>
    </div>
  );
};

export default LadiesNecklace;