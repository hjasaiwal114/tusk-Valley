import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { testidata } from "../export";

const Clients = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return <section id=""></section>;
};

export default Clients;
