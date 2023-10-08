import React from "react";
import Nav from './components/nav/Nav.jsx'
import Hero from './components/hero/Hero.jsx'
import Section from "./components/section/Section.jsx";
import Events from "./components/events/Events.jsx";
import Faq from "./components/faq/Faq.jsx";
import Partners from "./components/partners/Partners.jsx";
import Carbon from "./components/carbon/carbon.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Section />
      <Events />
      <Partners />
      <Faq />
      <Carbon />
      <Footer />
    </>
  );
}

export default App;
