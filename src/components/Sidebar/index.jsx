import React from "react";
import { Container } from "./style";
import { UseModeContext } from "../../context/ModeContenxt";

const Sidebar = () => {
  const [mode] = UseModeContext();
  return (
    <Container mode={mode}>
      <h1>Sidebar</h1>
    </Container>
  );
};

export default Sidebar;
