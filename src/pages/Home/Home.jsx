import React from "react";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import Container from "../../components/UI/Container";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Container>
        <Hero />
        <About />
      </Container>
      <Projects />
      <Container>
        <Contact />
      </Container>
    </div>
  );
}

export default Home;
