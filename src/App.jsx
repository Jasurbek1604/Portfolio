import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Projects from "./components/Projects";
import About from "./components/About";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <Navbar value={[isOpen, setIsOpen]} />
      <div
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: isOpen && "translateY(150px)",
        }}
      >
        <Body />
        {/* <About /> */}
        <Projects />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
