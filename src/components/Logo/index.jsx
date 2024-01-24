import React from "react";
import code from "../../assets/code-solid.svg?react";
import styled from "styled-components";
import { UseModeContext } from "../../context/ModeContenxt";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .name {
    text-transform: uppercase;
    letter-spacing: 0;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    gap: 0;
    font-size: 18px;
    line-height: 17px;
    user-select: none;
  }
`;

const Icon1 = styled(code)`
  width: 40px;
  height: 40px;
  fill: ${({ mode }) => (mode === "light" ? "var(--dark)" : "var(--light)")};
`;

const Logo = () => {
  const [mode] = UseModeContext();
  return (
    <Container>
      <Icon1 mode={mode} />
      <div className="name">
        <div>Jasurbek</div>
        <div>O'telbayev</div>
      </div>
    </Container>
  );
};

export default Logo;
