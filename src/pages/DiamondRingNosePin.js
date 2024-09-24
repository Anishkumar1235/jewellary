import React from 'react';
import img1 from '../assets/Dring1.jpg'
import img2 from '../assets/Dring2.jpg'
import img3 from '../assets/Dring3.avif'
import img4 from '../assets/Dring4.webp'
import img5 from '../assets/Dring5.jpeg'
import img6 from '../assets/Dring6.png'
import img7 from '../assets/Dring7.jpg'
import img8 from '../assets/Dring8.jpg'
import img9 from '../assets/Dring9.png'
import img10 from '../assets/Dring10.webp'
import img11 from '../assets/Dring11.jpeg'
import img12 from '../assets/Dring12.jpg'
import img13 from '../assets/Dring13.webp'
import img14 from '../assets/Dring14.jpg'
import img15 from '../assets/Dring15.webp'
import img16 from '../assets/Dring16.jpg'
import img17 from '../assets/Dring17.webp'
import img18 from '../assets/Dring18.webp'
import img19 from '../assets/Dring19.jpg'
import img20 from '../assets/Dring20.jpg'
import img21 from '../assets/Dring21.jpg'
import img22 from '../assets/Dring22.webp'
import img23 from '../assets/Dring23.jpg'
import img24 from '../assets/Dring24.webp'
import img25 from '../assets/Dring25.webp'
import img26 from '../assets/Dring26.webp'
import img27 from '../assets/Dring27.webp'
import img28 from '../assets/Dring28.webp'
import img29 from '../assets/Dring29.webp'
import img30 from '../assets/Dring30.jpg'
import img31 from '../assets/Dring31.jpg'
import img32 from '../assets/Dring32.jpeg'
const DiamondRingNosePin = () => {
  return (
    <div className="p-4">

      <h1 className="text-4xl font-bold mt-16 text-center">Diamond Ring/ NosePin</h1>
      <p className='text-3xl font-bold mt-8 text-center'>Explore our exquisite collection of diamond jewellery.</p>
    
      
      {/* Offer Banner */}
      <div className="mt-5">
        <img src="https://www.lialijewellery.com/pub/media/wysiwyg/diamond/Diamond-Main_banner.jpg" alt="Offer Banner" className="w-full h-80 rounded-lg shadow-md mt-35"/>
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
      <p className="text-gray-700">From: ₹<b>1099.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>1299.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>899.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>1099.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>799.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>699.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>899.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>299.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>499.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>699.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>999.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>899.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>999.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>499.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>399.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>499.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>699.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>699.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>599.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>799.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>1099.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>1499.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>1799.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>1899.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>1999.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>699.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>399.99</b></p>
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
      <p className="text-gray-700">From: ₹<b>1099.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img31} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold mb-2">Mens Chain</h3>
            <div className="flex items-center mb-2">
        {/* Rating Stars */}
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-400">★</span>
        <span className="text-gray-400">★</span>
      </div>
      <p className="text-gray-700">From: ₹<b>1299.99</b></p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600">Buy Now</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={img32} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
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

export default DiamondRingNosePin;
