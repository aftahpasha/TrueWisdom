import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomepageTrueWisdomPurpleBGWhite from "./pages/HomepageTrueWisdomPurpleBGWhite.jsx";
import SignIn from "./pages/SignIn.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageTrueWisdomPurpleBGWhite />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
