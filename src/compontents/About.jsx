import React, { useEffect } from "react";
import about from "../assets/about.png";
import { FaChevronCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos.dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return <div>About</div>;
};

export default About;
