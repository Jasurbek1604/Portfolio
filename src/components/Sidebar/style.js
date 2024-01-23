import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  border-right: ${({ mode }) =>
    mode === "light" ? "1px solid var(--dark)" : "1px solid var(--light)"};
  height: 100vh;
`;
