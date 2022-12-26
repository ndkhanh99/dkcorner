import React from "react";
import Cards from "../home-component/Cards";
import Content from "../home-component/Content";
import Footer from "../home-component/Footer";
import Newmessage from "../home-component/Newmessage";
import Product from "../home-component/Product";

function Home() {
    return (
        <div>
            <Content />
            <Product />
            <Newmessage />
            <Cards />
            <Footer />
        </div>
    )
}
export default Home;