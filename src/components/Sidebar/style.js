import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  border-right: ${({ mode }) =>
    mode === "light"
      ? "1px solid rgba(0, 0, 0, 0.3)"
      : "1px solid rgba(255, 255, 255, 0.3)"};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ mode }) => (mode === "dark" ? "#151515" : "#fdf9ff")};
  .nav {
    height: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    &__item {
      border-bottom: ${({ mode }) =>
        mode === "light"
          ? "1px solid rgba(0, 0, 0, 0.3)"
          : "1px solid rgba(255, 255, 255, 0.3)"};
      cursor: pointer;
    }
  }
`;

export const Link = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: ${({ mode }) => (mode === "light" ? "var(--dark)" : "var(--light)")};
  padding: 5px 0;
  margin: 5px 0;
  transition: 0.3s;
  &.active {
    transform: translateX(10px);
    color: red;
  }
  &:hover {
    color: red;
  }
`;
