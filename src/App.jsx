import React from "react";
import Header from "./compontents/Headers";
import Hero from "./compontents/Hero";
import Services from "./compontents/Services";
import About from "./compontents/About";
import Counter from "./compontents/Counter";
import Pricing from "./compontents/Pricing";
import Clients from "./compontents/Clients";
import Contact from "./compontents/Contact";
import Team from "./compontents/Team";
import Footer from "./compontents/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Counter />
      <Pricing />
      <Clients />
      <Contact />
      <Team />
      <Footer />
    </>
  );
};

export default App;
