import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import home from "../../assets/home.svg?react";
import about from "../../assets/about.svg?react";
import contact from "../../assets/contact.svg?react";
import projects from "../../assets/projects.svg?react";

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
  display: flex;
  align-items: center;
  gap: 5px;
  path {
    stroke: ${({ mode }) =>
      mode === "light" ? "var(--dark)" : "var(--light)"};
  }
  circle {
    stroke: ${({ mode }) =>
      mode === "light" ? "var(--dark)" : "var(--light)"};
  }
  &.active {
    transform: translateX(10px);
    color: red;
    path {
      stroke: red;
    }
    circle {
      stroke: red;
    }
  }
  &:hover {
    color: red;
    path {
      stroke: red;
    }
    circle {
      stroke: red;
    }
  }
`;

export const Icons = styled.div``;

const iconStyle = css`
  width: 20px;
  height: 20px;
`;

Icons.Home = styled(home)`
  ${iconStyle};
`;

Icons.About = styled(about)`
  ${iconStyle}
`;

Icons.Contact = styled(contact)`
  ${iconStyle}
`;

Icons.Projects = styled(projects)`
  ${iconStyle}
`;
