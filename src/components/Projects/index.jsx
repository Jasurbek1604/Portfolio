import React from "react";
import { projects, miniProjects } from "../../utils/projects";
import { Container, Title, Carts, Mini } from "./style";
import Cart from "../Cart";

const Projects = () => {
  return (
    <Container>
      <Title id="projects">Projects</Title>
      <Carts>
        {projects.map((item) => (
          <Cart style={{ height: "400px" }} key={item.id} value={item} />
        ))}
      </Carts>
      <Title mini>Mini Projects</Title>
      <Mini>
        {miniProjects.map((item) => (
          <Cart key={item.id} mini value={item} />
        ))}
      </Mini>
    </Container>
  );
};

export default Projects;
