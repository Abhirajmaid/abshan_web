import React from "react";
import { Logo, TopAd } from "../components";
import { Hero } from "../components/home";

const Home = () => {
  return (
    <>
      <div className=" overflow-hidden ">
        <div id="moving_bg"></div>
        <TopAd />
        <Logo />
        <Hero />
      </div>
    </>
  );
};

export default Home;
