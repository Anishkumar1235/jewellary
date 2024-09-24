import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Diamond from './pages/Diamond';
import Gold from './pages/Gold';
import Silver from './pages/Silver';
import GoldRingsMens from './pages/GoldRingsMens';
import LadiesNecklace from './pages/LadiesNecklace';
import GoldChainMangalsutra from './pages/GoldChainMangalsutra';
import GoldBracelet from './pages/GoldBracelet';
import DiamondRingNosePin from './pages/DiamondRingNosePin';
import SilverItems from './pages/SilverItems';
import ForgotPassword from './pages/ForgotPassword';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/diamond" element={<Diamond />} />
            <Route path="/products/gold" element={<Gold />} />
            <Route path="/products/silver" element={<Silver />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/gold-rings-mens" element={<GoldRingsMens />} />
            <Route path="/categories/ladies-necklace" element={<LadiesNecklace />} />
            <Route path="/categories/gold-chain-mangalsutra" element={<GoldChainMangalsutra />} />
            <Route path="/categories/gold-bracelet" element={<GoldBracelet />} />
            <Route path="/categories/diamond-ring-nose-pin" element={<DiamondRingNosePin />} />
            <Route path="/categories/silver-items" element={<SilverItems />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
