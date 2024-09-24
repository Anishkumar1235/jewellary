// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import PaymentPage from "./pages/PaymentPage";
import About from "./pages/About";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Diamond from "./pages/Diamond";
import Gold from "./pages/Gold";
import Silver from "./pages/Silver";
import GoldRingsMens from "./pages/GoldRingsMens";
import LadiesNecklace from "./pages/LadiesNecklace";
import GoldChainMangalsutra from "./pages/GoldChainMangalsutra";
import GoldBracelet from "./pages/GoldBracelet";
import DiamondRingNosePin from "./pages/DiamondRingNosePin";
import SilverItems from "./pages/SilverItems";
import ForgotPassword from "./pages/ForgotPassword";
import Logout from "../src/Logout";

const AppRoutes = () => {
  const location = useLocation();

  // List of paths where Sidebar should not be shown
  const noSidebarPaths = ["/login", "/forgot-password"];

  return (
    <div className="flex">
      {!noSidebarPaths.includes(location.pathname) && <Sidebar />}
      <div className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/diamond" element={<Diamond />} />
          <Route path="/products/gold" element={<Gold />} />
          <Route path="/products/silver" element={<Silver />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/categories/gold-rings-mens"
            element={<GoldRingsMens />}
          />
          <Route
            path="/categories/ladies-necklace"
            element={<LadiesNecklace />}
          />
          <Route
            path="/categories/gold-chain-mangalsutra"
            element={<GoldChainMangalsutra />}
          />
          <Route path="/categories/gold-bracelet" element={<GoldBracelet />} />
          <Route
            path="/categories/diamond-ring-nose-pin"
            element={<DiamondRingNosePin />}
          />
          <Route path="/categories/silver-items" element={<SilverItems />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
