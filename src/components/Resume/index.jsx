import React from "react";
import pdf from "../../assets/resume.pdf";
import jpg from "../../assets/resume.jpg";
import { Container, Title, Div, Img } from "./style";

const Resume = () => {
  return (
    <Container>
      <Title id="resume">Resume</Title>
      <Div>
        <a href={pdf} target="blank">
          <Img src={jpg} alt="" />
        </a>
      </Div>
    </Container>
  );
};

export default Resume;
