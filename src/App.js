import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import About from "./Components/About/About";
import Product from "./Components/Product/Product";
import PrivateRoute from "./Components/PrivateRoute";
import Error from "./Components/Error/Error";

import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/about"
          element={
            <PrivateRoute isAuth={isAuth}>
              <About />
            </PrivateRoute>
          }
        />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
