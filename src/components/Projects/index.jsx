import React from "react";
import { projects } from "../../utils/projects";
import { Container, Title, Carts } from "./style";
import Cart from "../Cart";

const Projects = () => {
  return (
    <Container>
      <Title id="projects">Projects</Title>
      <Carts>
        {projects.map((item) => (
          <Cart value={item} />
        ))}
      </Carts>
    </Container>
  );
};

export default Projects;
