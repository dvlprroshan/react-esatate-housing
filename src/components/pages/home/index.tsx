import React from "react";
import Navbar from "@/com_g/Navbar";
import HomeTopSection from "./HomeTopSection";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Fotter from "@/com_g/Fotter";

const Home = () => (
  <React.Fragment>
    <div id="topmost"></div>
    <Navbar activePageMenu="home" />
    <HomeTopSection />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Fotter />
  </React.Fragment>
);
export default Home;
