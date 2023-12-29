import styled, { css } from "styled-components";

const flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  ${flex};
  justify-content: space-between;
  height: 80px;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;
`;

export const Links = styled.div`
  ${flex};
  gap: 25px;
  @media (max-width: 930px) {
    flex-direction: column;
    gap: 15px;
    align-items: center;
    position: absolute;
    top: 70px;
    padding: 20px 40px;
    left: 0;
    width: 100%;
  }
`;

export const Link = styled.a`
  transition: 0.3s;
  text-decoration: none;
  font-size: 1.3rem;
  font-family: "Sometype Mono", monospace;
  font-weight: 600;
  background: #f6f8f9;
  background: radial-gradient(
    circle farthest-corner at center center,
    #f6f8f9 0%,
    #e5ebee 30%,
    #d7dee3 60%,
    #f5f7f9 100%
  );
  background: transparent;
  &:hover {
    text-shadow: 0 1px 5px #f5f7f9;
  }
`;
export const Button = styled.a`
  font-family: "Sometype Mono", monospace;
  font-weight: 600;
  border: none;
  background-image: linear-gradient(
    to right,
    #16222a 0%,
    #3a6073 51%,
    #16222a 100%
  );
  cursor: pointer;
  padding: 15px 35px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: ${({ burger }) => (burger ? "5px" : "10px")};
  display: block;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 930px) {
    padding: 8px 20px;
    box-shadow: 0 0 10px #eee;
    padding: ${({ burger }) => burger && "8px 13px 6px"};
  }
`;
