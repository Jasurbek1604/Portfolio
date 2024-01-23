import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { UseModeContext } from "../../context/ModeContenxt";
import Sidebar from "../Sidebar";
import { Container, Content, Setting, SiteSetting, Wrap, Mode } from "./style";
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
    bg: mode === "light" ? "#f2f2fc" : "rgba(0,0,0,1)",
    color: mode === "light" ? "var(--dark)" : "var(--light)",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Content>
          <Outlet />
          <SiteSetting mode={mode} $click={click.toString()}>
            <Wrap onClick={() => setClick(!click)}>
              <Setting />
            </Wrap>
            <button
              style={{ background: mode === "light" && "lightgray" }}
              onClick={() => {
                setMode("light");
                localStorage.setItem("mode", "light");
              }}
            >
              <Mode.Light />
            </button>
            <button
              style={{ background: mode === "dark" && "lightgray" }}
              onClick={() => {
                setMode("dark");
                localStorage.setItem("mode", "dark");
              }}
            >
              <Mode.Dark />
            </button>
          </SiteSetting>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default Universal;
