import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import services from "./pages/services";
import Contact from "./pages/contact";
import Services from "./pages/services";


import Category from "./pages/Category";
import Shop from "./pages/Shop";
import About from "./pages/About";

function App() {
  return (
    <Router>   {/* Everything must be inside Router */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About/>} />
        <Route path="/category" element={<Category></Category>} />
        <Route path="/shop" element={<Shop></Shop> }/>
        <Route path="/service" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>


      </Routes>
    </Router>
  );
}

export default App;
