import React from "react";
import code from "../../assets/code-solid.svg";
import telegram from "../../assets/telegram.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import github from "../../assets/github.svg";
import {
  Container,
  Wrapper,
  Logo,
  Links,
  Img,
  Name,
  Link,
  Media,
} from "./style.js";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={code} />
          <Name>Jasurbek O'telbayev</Name>
        </Logo>
        <Links>
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
