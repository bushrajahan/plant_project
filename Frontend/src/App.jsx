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
import GiftPages from "./pages/GiftPages";

import CarePages from "./pages/CarePages";
import AccessPages from "./pages/AccessPages";
import Footer from "./components/Footer/Footer";


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
        <Route path="/gift" element={<GiftPages/>}/>
        <Route path = '/care'  element={<CarePages/>}/>

        <Route path="/cart" element={<CartPages/>}/>
        <Route path="/access" element={<AccessPages/>}/>

  
      </Routes>
      <Footer/>
    </Router>
    </CartProvider>
  );
}


export default App;
