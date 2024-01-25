import React from "react";
import ModeProvider from "./ModeContenxt";
import LangProvider from "./LangContext";
import ColorProvider from "./ColorContext";
import AboutProvider from "./AboutContext";

const Context = ({ children }) => {
  return (
    <ModeProvider>
      <LangProvider>
        <ColorProvider>
          <AboutProvider>{children}</AboutProvider>
        </ColorProvider>
      </LangProvider>
    </ModeProvider>
  );
};
export default Context;
