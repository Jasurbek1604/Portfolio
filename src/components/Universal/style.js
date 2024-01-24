import styled, { keyframes } from "styled-components";
import setting from "../../assets/setting.svg?react";
import dark from "../../assets/dark-mode.svg?react";
import light from "../../assets/light-mode.svg?react";

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 35px;
  background: #fff;
  transform: translateX(-100%);
  padding: 5px;
  border-radius: 5px 0 0 5px;
  border-right: 1px solid gainsboro;
  cursor: pointer;
`;

const anim = keyframes`
  from {
    transform: rotate(0deg);
  }to {
    transform: rotate(360deg);
  }
`;

export const Setting = styled(setting)`
  animation: ${anim} linear 2s infinite;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  height: 100vh;
  width: calc(100% - 300px);
`;

export const SiteSetting = styled.div`
  transition: 0.5s;
  position: absolute;
  background: #fff;
  width: 210px;
  padding: 20px;
  text-align: center;
  top: 0;
  right: 0;
  transform: ${({ $click }) =>
    $click === "true" ? "translateX(100%)" : "translateX(0)"};
  border-radius: 0px 0 0 5px;
  z-index: 99;
  button {
    background: transparent;
    border: 1px solid gainsboro;
    border-radius: 4px;
    padding: 3px;
    margin: 5px;
    &:hover {
      background: gainsboro;
    }
    &:active {
      opacity: 0.5;
    }
  }
  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    padding: 10px 0;
    margin: 10px 0;
    border-top: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
    div {
      display: flex;
      flex-direction: column-reverse;
    }
    label,
    input {
      cursor: pointer;
    }
    label {
      font-size: 16px;
      color: var(--dark);
    }
  }
  .colors {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    .circle {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      cursor: pointer;
    }
    .red {
      background: var(--red);
    }
    .blue {
      background: var(--blue);
    }
    .green {
      background: var(--green);
    }
    .orange {
      background: var(--orange);
    }
    .yellow {
      background: var(--yellow);
    }
  }
`;

export const Mode = styled.div``;

Mode.Dark = styled(dark)`
  width: 20px;
  height: 20px;
`;
Mode.Light = styled(light)`
  width: 20px;
  height: 20px;
`;
