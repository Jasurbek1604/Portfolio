import styled from "styled-components";

export const Container = styled.div`
  transition: 0.3s;
  border: 1px solid #fff;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px #fff;
  &:hover {
    transform: scale(1.01);
  }
`;

export const A = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Img = styled.img`
  width: 100%;
  height: 52%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const Title = styled.div`
  padding: 10px;
  font-size: 1.5rem;
  font-family: "Sometype Mono", monospace;
  font-weight: 700;
`;
export const P = styled.div`
  padding: 0 10px 10px 10px;
  font-family: "Sometype Mono", monospace;
  font-weight: 400;
  font-size: 1rem;
`;
