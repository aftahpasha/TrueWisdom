import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomepageTrueWisdomPurpleBGWhite from "./pages/HomepageTrueWisdomPurpleBGWhite.jsx";
import SignIn from "./pages/SignIn.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageTrueWisdomPurpleBGWhite />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
