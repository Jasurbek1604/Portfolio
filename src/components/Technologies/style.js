import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 60px auto;
`;

export const Title = styled.div`
  font-family: "Sometype Mono", monospace;
  font-weight: 700;
  text-align: center;
  font-size: 40px;
  margin: 20px 0 60px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 50px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
