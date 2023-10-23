import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  width: 90%;
  @media (max-width: 1000px) {
    height: auto;
  }
`;

export const Title = styled.div`
  font-family: "Sometype Mono", monospace;
  font-weight: 700;
  text-align: center;
  font-size: 40px;
  margin: 20px 0 60px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Left = styled.div``;

export const Img = styled.img`
  border-radius: 50%;
  width: 500px;
  height: 500px;
  box-shadow: 0 0 20px #fff;
  @media (max-width: 1000px) {
    width: 450px;
    height: 450px;
  }
  @media (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
`;
export const Right = styled.div``;
export const P = styled.div`
  font-family: "Sometype Mono", monospace;
  font-size: 2rem;
  font-weight: 700;
`;
export const SubTitle = styled.div`
  font-family: "Sometype Mono", monospace;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 20px 0;
  @media (max-width: 600px) {
    margin: 10px 0;
  }
`;
export const Desc = styled.div`
  font-family: "Sometype Mono", monospace;
  font-weight: 400;
  font-size: 1rem;
`;
