import styled, { css } from "styled-components";

const flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  height: calc(100vh - 80px);
  ${flex}
  gap: 50px;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    height: 100%;
    padding: 50px 0;
  }
`;

export const Left = styled.div`
  ${flex};
  flex-direction: column;
  align-items: flex-start;
`;
export const Title = styled.div`
  font-family: "Sometype Mono", monospace;
  font-weight: 700;
  font-size: 4.5rem;
  @media (max-width: 1000px) {
    font-size: 3.5rem;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;
export const SubTitle = styled.div`
  font-family: "Sometype Mono", monospace;
  font-weight: 600;
  font-size: 2rem;
  margin: 20px 0;
  @media (max-width: 600px) {
    margin: 10px 0;
  }
`;
export const Desc = styled.div`
  font-family: "Sometype Mono", monospace;
  font-weight: 400;
  font-size: 1.2rem;
`;
export const Right = styled.div``;
export const Img = styled.img`
  width: 450px;
  height: 445px;
  border-radius: 50%;
  box-shadow: 0 0 15px #fff;
  @media (max-width: 600px) {
    width: 300px;
    height: 290px;
  }
`;
