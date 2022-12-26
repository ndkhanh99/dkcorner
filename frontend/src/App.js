import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/home-component/Navbar";
import HomePage from "./components/pages/Home";
import CompanyPage from "./components/pages/Company";
import AboutPage from "./components/pages/About";
import ProductPage from "./components/pages/Product";
import ContactPage from "./components/pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
