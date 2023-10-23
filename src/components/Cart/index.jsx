import React from "react";
import { Container, Img, A, Title, P } from "./style";

const Cart = ({ value }) => {
  const { title, link, description, img } = value;
  return (
    <Container>
      <A href={link} target="blank">
        <Img src={img} />
        <Title>{title}</Title>
        <P>{description}</P>
      </A>
    </Container>
  );
};

export default Cart;
