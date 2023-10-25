import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Projects from "./components/Projects";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Resume from "./components/Resume";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <Navbar value={[isOpen, setIsOpen]} />
      <div
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: isOpen && "translateY(200px)",
        }}
      >
        <Body />
        <About />
        <Projects />
        <Resume />
        <Technologies />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
