import styled from "styled-components";

export const Container = styled.div`
  transition: 0.3s;
  border: 1px solid #fff;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px #fff;
  min-height: ${({ mini }) => (mini ? "300px" : "400px")};
  &:hover {
    transform: scale(1.01);
  }
  @media (max-width:800px){
    min-height: ${({ mini }) => (mini && "250px")};
  }
`;

export const A = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Img = styled.img`
  width: 100%;
  height: ${({ mini }) => (mini ? "170px" : "220px")};
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  @media (max-width:800px){
    min-height: ${({ mini }) => (mini && "120px")};
  }
`;

export const Title = styled.div`
  padding: ${({ mini }) => (mini ? "20px" : "10px")};
  font-size: ${({ mini }) => (mini ? "1.3rem" : "1.5rem")};
  font-family: "Sometype Mono", monospace;
  font-weight: 700;
  text-align: ${({ mini }) => mini && "center"};
  @media (max-width:800px){
    padding: ${({ mini }) => (mini && "10px")};
  }
`;
export const P = styled.div`
  padding: 0 10px 10px 10px;
  font-family: "Sometype Mono", monospace;
  font-weight: 400;
  font-size: 1rem;
`;
