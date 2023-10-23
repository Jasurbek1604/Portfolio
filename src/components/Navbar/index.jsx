import React, { useState } from "react";
import Logo from "../Logo";
import bar from "../../assets/bar.svg";
import { Container, Links, Link, Button } from "./style.js";

const Navbar = ({ value }) => {
  const [isOpen, setIsOpen] = value;
  return (
    <Container>
      <Logo />
      {window.innerWidth > 800 ? (
        <>
          <Links>
            <Link href="">About</Link>
            <Link href="">Projects</Link>
            <Link href=""></Link>
          </Links>
          <Button href="https://t.me/Jasurbek_Otelbayev" target="blank">
            Contact me
          </Button>
        </>
      ) : (
        <>
          {isOpen && (
            <Links>
              <Link href="">About</Link>
              <Link href="">Projects</Link>
              <Link href="">About</Link>
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
