import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { UseModeContext } from "../../context/ModeContenxt";
import Sidebar from "../Sidebar";
import { Container, Content, Setting, SiteSetting, Wrap } from "./style";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background:${({ theme }) => theme.bg} ;
        color:${({ theme }) => theme.color} ;
    }
    `;
const Universal = () => {
  const [click, setClick] = useState(true);
  const [mode, setMode] = UseModeContext();
  const theme = {
    bg: mode === "light" ? "var(--bgLight)" : "var(--bgDark)",
    color: mode === "light" ? "var(--dark)" : "var(--light)",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Content>
          <Outlet />
          <SiteSetting $click={click.toString()}>
            <Wrap onClick={() => setClick(!click)}>
              <Setting />
            </Wrap>
            <button
              onClick={() => {
                setMode("light");
                localStorage.setItem("mode", "light");
              }}
            >
              light
            </button>
            <button
              onClick={() => {
                setMode("dark");
                localStorage.setItem("mode", "dark");
              }}
            >
              dark
            </button>
          </SiteSetting>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default Universal;
