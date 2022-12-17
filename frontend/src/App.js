import React from "react";
import Cards from "./components/Cards";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newmessage from "./components/Newmessage";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Product />
      <Newmessage />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
