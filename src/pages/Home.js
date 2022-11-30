import React from "react";
import Card from "./Card";
import Planet from "./Planet";
import Payment  from "./Payment";
import Prepaid from "./Prepaid";
import Footer from "./Footer";
const Home = () => {

  return (
    <>
      <Planet/>
      <Card/>
      <Payment/>
      <Prepaid/>
      <Footer/>
    </>
  );
};

export default Home;