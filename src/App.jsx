import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomepageTrueWisdomPurpleBGWhite from "./pages/HomepageTrueWisdomPurpleBGWhite.jsx";
import SignIn from "./pages/SignIn.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Checkout from "./pages/Checkout.jsx";
import CheckoutAddress from "./pages/CheckoutAddress.jsx";
import Dashboard from "./pages/Dashboard/Index.jsx";
import BuyNewPackage from "./pages/Dashboard/BuyNewPackage.jsx";
import Setting from "./pages/Dashboard/Setting.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageTrueWisdomPurpleBGWhite />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/buy-new-package" element={<BuyNewPackage />} />
        <Route path="/dashboard/setting" element={<Setting />} />
        <Route path="/checkout-address" element={<CheckoutAddress />} />
      </Routes>
    </Router>
  );
};

export default App;