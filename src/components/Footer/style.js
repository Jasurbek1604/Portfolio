import styled, { css } from "styled-components";

const Center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background-color: black;
  height: 300px;
  width: 100%;
  ${Center}
`;

export const Wrapper = styled.div`
  height: 100px;
  width: 80%;
  ${Center};
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: stretch;
  gap: 5px;
  ${Center};
`;

export const Img = styled.img`
  height: 50px;
  width: 50px;
`;

export const Name = styled.div`
  text-transform: uppercase;
  font-family: "Bebas Neue", sans-serif;
  font-size: 25px;
  width: 50px;
  line-height: 20px;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Link = styled.a`
  width: 35px;
  height: 35px;
  background-color: #fff;
  border-radius: 50%;
`;
export const Media = styled.img`
  margin: 7px;
`;
