import React from "react";
import styled from "styled-components";
import code from "../../assets/code-solid.svg";

const Logos = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-decoration: none;
  color: #fff;
`;

const Img = styled.img`
  height: 50px;
  width: 50px;
`;

const Name = styled.div`
  text-transform: uppercase;
  font-family: "Bebas Neue", sans-serif;
  font-size: 25px;
  width: 50px;
  line-height: 20px;
`;

const Logo = () => {
  return (
    <Logos href="#">
      <Img src={code} />
      <Name>Jasurbek O'telbayev</Name>
    </Logos>
  );
};

export default Logo;
