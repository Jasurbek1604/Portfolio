import React from "react";
import { Container, Img, A, Title, P } from "./style";

const Cart = ({ value, mini }) => {
  const { title, link, description, img } = value;
  return (
    <Container mini={mini}>
      <A href={link} target="blank">
        <Img mini={mini} src={img} />
        <Title mini={mini}>{title}</Title>
        <P>{description}</P>
      </A>
    </Container>
  );
};

export default Cart;
