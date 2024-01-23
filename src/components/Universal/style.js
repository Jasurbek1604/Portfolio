import styled, { keyframes } from "styled-components";
import setting from "../../assets/setting.svg?react";

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
  width: 150px;
  padding: 20px;
  text-align: center;
  right: 0;
  transform: ${({ $click }) =>
    $click === "true" ? "translateX(100%)" : "translateX(0)"};
  border-radius: 0px 0 0 5px;
  z-index: 99;
`;
