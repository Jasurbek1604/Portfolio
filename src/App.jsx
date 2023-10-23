import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <Navbar value={[isOpen, setIsOpen]} />
      <div
        style={{
          transform: isOpen && "translateY(150px)",
        }}
      >
        <Body />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
