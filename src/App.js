import "./App.css";
import Breadcrum from "./Components/Breadcrum/Breadcrum";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import React, { useState } from "react";


function App() {


  return (
    <div className="App">

      <Navbar />
      <Breadcrum />
      <Products />
      <Footer />

    </div>
  );
}

export default App;
