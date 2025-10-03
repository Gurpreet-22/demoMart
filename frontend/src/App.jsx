// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";


import Cart from "./Component/Cart";
import Card from "./Component/Card";
import Navbar from "./Component/Navbar";

const App = () => {


  return (
    <Router>
 
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

    </Router>
  );
};

const MainLayout = ({ children, onCategorySelect }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/cart" && <Navbar onCategorySelect={onCategorySelect} />}
      {children}
    </>
  );
};

export default App;
