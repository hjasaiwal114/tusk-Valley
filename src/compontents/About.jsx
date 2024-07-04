import React, { useEffect } from "react";
import about from "../assets/about.png";
import { FaChevronCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="about"
      className="w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-28"
    >
      <div>
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={about}
          alt=""
          className="lg:w-[1000px] lg:h-[550px]"
        />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="flex flex-col justify-center items-start gap-4"
      >
        <h1 className="text-lime-500 font-ubuntu text-[19px] font-semibold">
          WHO WE ARE
        </h1>
        <h1 className="text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[60px] font-ubuntu">
          Tusker Valley Consultants
        </h1>
        <p className="font-ubuntu text-[18px] text-slate-700">
          Tusker Valley Consultants is a renowned marketing consultancy in
          India, specializing in digital marketing, FMCG consulting, restaurant
          consulting, and healthcare ventures. With an experience of more than 2
          decades, we have assisted a number of West African FMCG firms,
          restaurant startups, done healthcare collaborations, digital marketing
          and more.
        </p>
        <div className="flex flex-col justify-center items-start gap-4">
          <p className="text-black flex justify-center items-center gap-4 font-ubuntu">
            <FaChevronCircleRight className="text-limegreen text-xl" />
            Position the company as a one-stop solution for medical coding and
            marketing needs in the healthcare industry.
          </p>
          <p className="text-black flex justify-center items-center gap-4 font-ubuntu">
            <FaChevronCircleRight className="text-limegreen text-xl" />
            We are committed to excellence, integrity, and client satisfaction,
          </p>
          <p className="text-black flex justify-center items-center gap-4 font-ubuntu">
            <FaChevronCircleRight className="text-limegreen text-xl" />
            Crafting personalized strategies to meet the unique marketing needs
            of each client with precision and creativity.
          </p>
        </div>
        <button className="bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-black hover:text-white transition duration-300 ease-in-out">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default About;
