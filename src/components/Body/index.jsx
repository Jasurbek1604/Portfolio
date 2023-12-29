import React from "react";
import jasco from "../../assets/jasco.jpg";
import { Container, Left, Right, Title, SubTitle, Desc, Img } from "./style";

const Body = () => {
  return (
    <Container data-aos="fade-up" data-aos-duration="1000">
      <Left>
        <Title>Jasurbek O'telbayev</Title>
        <SubTitle>Frontend Developer</SubTitle>
        <Desc>
          Junior Plus Web Developer specializing in front-end development.
          Experienced with all stages of development cycle for dynamic web
          projects. Wellversed in JavaScript and ReactJS. Strong background in
          management and leadership.
        </Desc>
      </Left>
      <Right>
        {" "}
        <Img src={jasco} />{" "}
      </Right>
    </Container>
  );
};

export default Body;
