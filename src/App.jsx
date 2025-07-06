import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ProjectCard from "./ProjectCard.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import "./index.css";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <ProjectCard />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
