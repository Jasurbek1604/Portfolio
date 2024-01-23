import React from "react";
import ModeProvider from "./ModeContenxt";

const Context = ({ children }) => {
  return <ModeProvider>{children}</ModeProvider>;
};
export default Context;
