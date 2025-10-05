import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";

// Importing components
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
