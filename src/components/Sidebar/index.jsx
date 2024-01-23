import React from "react";
import { Container, Link, Icons } from "./style";
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
            <Icons.Home /> Main
          </Link>
        </div>
        <div className="nav__item">
          <Link mode={mode} to="/about">
            <Icons.About /> About
          </Link>
        </div>
        <div className="nav__item">
          <Link mode={mode} to="/projects">
            <Icons.Projects /> Projects
          </Link>
        </div>
        <div className="nav__item">
          <Link mode={mode} to="/contact">
            <Icons.Contact /> Contact
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
