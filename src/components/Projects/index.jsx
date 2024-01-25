import React, { useEffect, useState } from "react";
import Title from "../Title";
import { NavLink, useLocation } from "react-router-dom";
import { Container, Link } from "./style";
import { UseModeContext } from "../../context/ModeContenxt";
import { useColorContext } from "../../context/ColorContext";
import { useReplace } from "../../hooks/useReplace";
import { useProjectContext } from "../../context/ProjectContext";
import { projects } from "../../utils/projects";

const Projects = () => {
  const [mode] = UseModeContext();
  const [color] = useColorContext();
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("project");
  const value = useProjectContext();

  const [data, setData] = useState(projects);

  useEffect(() => {
    if (query !== "all") {
      const res = projects.filter((e) => e.tech === query);
      setData(res);
    } else {
      setData(projects);
    }
  }, [query]);

  return (
    <div className="container">
      <div className="wrapper">
        <Container mode={mode} color={color}>
          <Title>{value?.title}</Title>
          <div className="nav" data-aos="zoom-in">
            <div className="nav__item">
              <Link
                color={color}
                active={query === "all" ? "true" : "false"}
                to={`${location.pathname}${useReplace("project", "all")}`}
              >
                {value?.all}
              </Link>
            </div>
            <div className="nav__item">
              <Link
                color={color}
                active={query === "html&css" ? "true" : "false"}
                to={`${location.pathname}${useReplace("project", "html&css")}`}
              >
                HTML & CSS
              </Link>
            </div>
            <div className="nav__item">
              <Link
                color={color}
                active={query === "react" ? "true" : "false"}
                to={`${location.pathname}${useReplace("project", "react")}`}
              >
                React
              </Link>
            </div>
            <div className="nav__item">
              <Link
                color={color}
                active={query === "react&ts" ? "true" : "false"}
                to={`${location.pathname}${useReplace("project", "react&ts")}`}
              >
                React & TypeScript
              </Link>
            </div>
          </div>
          <div className="grid" data-aos="fade-down">
            {data.map(({ id, title, img, link }) => (
              <div key={id} className="grid__item">
                <img src={img} className="grid__item__img" alt="" />
                <div className="grid__item__bottom">
                  {title && (
                    <div className="grid__item__bottom__title">{title}</div>
                  )}
                  <NavLink
                    target="_blank"
                    to={link}
                    className="grid__item__bottom__link"
                  >
                    {value?.link}
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
