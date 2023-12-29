import React from "react";
import Logo from "../Logo";
import telegram from "../../assets/telegram.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import github from "../../assets/github.svg";
import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import { Container, Wrapper, Links, Link, Media } from "./style.js";

const Footer = () => {
  return (
    <Container data-aos="fade-up" data-aos-duration="1000">
      <Wrapper>
        <Logo />
        <Links>
          <Link href="mailto:jasurbekotlebayev@gmail.com" target="blank">
            <Media src={email} />
          </Link>
          <Link href="tel:+998935960246" target="blank">
            <Media src={phone} />
          </Link>
          <Link href="https://t.me/jasurdev1604" target="blank">
            <Media src={telegram} />
          </Link>
          <Link href="https://github.com/Jasurbek1604" target="blank">
            <Media src={github} />
          </Link>
          <Link
            href="https://www.instagram.com/otelbayev_jasurbek"
            target="blank"
          >
            <Media src={instagram} />
          </Link>
          <Link href="https://twitter.com/Jasurdev1604" target="blank">
            <Media src={twitter} />
          </Link>
        </Links>
      </Wrapper>
    </Container>
  );
};

export default Footer;
