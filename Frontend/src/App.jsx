import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from './pages/Register'
// Importing components
import Navbar from "./components/Navbar/Navbar";
import PlantPages from "./pages/PlantPages";
import { CartProvider } from "./components/Cart/CartContext";
import CartPages from "./pages/CartPages";



function App() {
  return (
    <CartProvider>
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
         <Route path="/register" element={<Register />} />
    
        <Route path="/plants" element={<PlantPages/>}/>
        <Route path="/cart" element={<CartPages/>}/>

  
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
