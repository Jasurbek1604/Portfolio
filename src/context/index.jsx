import React from "react";
import ModeProvider from "./ModeContenxt";
import LangProvider from "./LangContext";
import ColorProvider from "./ColorContext";

const Context = ({ children }) => {
  return (
    <ModeProvider>
      <LangProvider>
        <ColorProvider>{children}</ColorProvider>
      </LangProvider>
    </ModeProvider>
  );
};
export default Context;
