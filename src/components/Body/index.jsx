import React from "react";
import jasco from "../../assets/jasco.jpg";
import { Container, Left, Right, Title, SubTitle, Desc, Img } from "./style";

const Body = () => {
  return (
    <Container>
      <Left>
        <Title>Jasurbek O'telbayev</Title>
        <SubTitle>Frontend Developer</SubTitle>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
          nesciunt culpa nisi harum, recusandae magni placeat odit accusantium
          mollitia omnis quibusdam repudiandae dolorem voluptates quo blanditiis
          quisquam voluptatibus, consequuntur ex eum! Dicta voluptas, accusamus
          porro eveniet adipisci saepe quidem reprehenderit, tempore, deserunt
          fugiat aut autem cum vero minus magnam natus.
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
