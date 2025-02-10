import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact_US from './Home/Contact/Contact-us';
import Footer from './Home/Footer';
import Header from './Home/Header';
import About_us from './Home/About_us/Abouy_us';
import Shop from './Home/Shop/Shop';
import Error from './Home/Error/Error';
import Product_page from './Home/Shop/Product_page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact_US />} />
        <Route path="/About" element={<About_us />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Product" element={<Product_page />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

