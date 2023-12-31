import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import bar from "../../assets/bar.svg";
import { Container, Links, Link, Button } from "./style.js";
import AOS from "aos";

const Navbar = ({ value }) => {
  const [isOpen, setIsOpen] = value;

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <Container data-aos="fade-down" data-aos-duration="1000">
      <Logo />
      {window.innerWidth > 930 ? (
        <>
          <Links>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#resume">Resume</Link>
            <Link href="#technologies">Technologies</Link>
          </Links>
          <Button href="https://t.me/Jasurbek_Otelbayev" target="blank">
            Contact me
          </Button>
        </>
      ) : (
        <>
          {isOpen && (
            <Links>
              <Link href="#about">About</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#resume">Resume</Link>
              <Link href="#technologies">Technologies</Link>
              <Button href="https://t.me/Jasurbek_Otelbayev" target="blank">
                Contact me
              </Button>
            </Links>
          )}
          <Button burger="true" onClick={() => setIsOpen(!isOpen)}>
            <img src={bar} width={20} height={20} />
          </Button>
        </>
      )}
    </Container>
  );
};

export default Navbar;
