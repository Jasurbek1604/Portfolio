import styled from "styled-components";

export const Container = styled.div`
  margin: 60px auto;
  max-width: 1200px;
  width: 90%;
`;

export const Title = styled.div`
  font-family: "Sometype Mono", monospace;
  font-weight: 700;
  text-align: center;
  font-size: ${({ mini }) => (mini ? "30px" : "40px")};
  margin: ${({ mini }) => (mini ? "70px 0" : "20px 0 60px")};
`;

export const Carts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 1040px) {
    gap: 30px;
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin: 20px;
  }
`;

export const Mini = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
