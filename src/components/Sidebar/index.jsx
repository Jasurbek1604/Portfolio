import React from "react";
import { Container, Link } from "./style";
import { UseModeContext } from "../../context/ModeContenxt";
import Logo from "../Logo";

const Sidebar = () => {
  const [mode] = UseModeContext();
  return (
    <Container mode={mode}>
      <Logo />
      <div className="nav">
        <div className="nav__item">
          <Link mode={mode} to="/">
            Main
          </Link>
        </div>
        <div className="nav__item">
          <Link mode={mode} to="/about">
            About
          </Link>
        </div>
        <div className="nav__item">
          <Link mode={mode} to="/projects">
            Projects
          </Link>
        </div>
        <div className="nav__item">
          <Link mode={mode} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
