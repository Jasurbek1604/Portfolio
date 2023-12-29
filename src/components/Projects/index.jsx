import React from "react";
import { projects, miniProjects } from "../../utils/projects";
import { Container, Title, Carts, Mini } from "./style";
import Cart from "../Cart";

const Projects = () => {
  return (
    <Container>
      <div data-aos="fade-right" data-aos-duration="1000">
        <Title id="projects">Projects</Title>
        <Carts>
          {projects.map((item) => (
            <Cart style={{ height: "400px" }} key={item.id} value={item} />
          ))}
        </Carts>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000">
        <Title mini>Mini Projects</Title>
        <Mini>
          {miniProjects.map((item) => (
            <Cart key={item.id} mini value={item} />
          ))}
        </Mini>
      </div>
    </Container>
  );
};

export default Projects;
