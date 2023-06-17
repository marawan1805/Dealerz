import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetail from "./Pages/ProductDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import Header from "./Components/Header/Header";
import MyCart from "./Pages/MyCart";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:product" element={<ProductDetail />} />
          <Route path="/cart" element={<MyCart/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
