import React from "react";
import ModeProvider from "./ModeContenxt";
import LangProvider from "./LangContext";
import ColorProvider from "./ColorContext";
import AboutProvider from "./AboutContext";
import ContactProvider from "./ContactContext";

const Context = ({ children }) => {
  return (
    <ModeProvider>
      <LangProvider>
        <ColorProvider>
          <AboutProvider>
            <ContactProvider>{children}</ContactProvider>
          </AboutProvider>
        </ColorProvider>
      </LangProvider>
    </ModeProvider>
  );
};
export default Context;
