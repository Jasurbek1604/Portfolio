import React from "react";
import { technologies } from "../../utils/technologies";
import { Container, Title, Wrapper, Img } from "./style";

const Technologies = () => {
  return (
    <Container data-aos="fade-left" data-aos-duration="1000">
      <Title id="technologies">Technologies</Title>
      <Wrapper>
        {technologies.map((tech) => (
          <Img src={tech.img} key={tech.id} alt="logo tech" />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Technologies;
