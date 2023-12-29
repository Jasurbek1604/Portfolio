import React from "react";
import jasco from "../../assets/jasco1.jpg";
import {
  Container,
  Title,
  Content,
  Left,
  Img,
  Right,
  P,
  SubTitle,
  Desc,
} from "./style";

const About = () => {
  return (
    <Container data-aos="fade-left" data-aos-duration="1000">
      <Title id="about">About</Title>
      <Content>
        <Left>
          <Img src={jasco} alt="jasco" />
        </Left>
        <Right>
          <P>Lorem ipsum dolor sit amet.</P>
          <SubTitle>Lorem ipsum dolor sit amet consectetur.</SubTitle>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            veniam, ad perferendis deleniti vero est. Ipsum odit totam sapiente
            similique.
          </Desc>
        </Right>
      </Content>
    </Container>
  );
};

export default About;
