import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import github from "../../assets/github.svg?react";
import email from "../../assets/email.svg?react";
import instagram from "../../assets/instagram.svg?react";
import phone from "../../assets/phone.svg?react";
import twitter from "../../assets/twitter.svg?react";
import telegram from "../../assets/telegram.svg?react";
import youtube from "../../assets/youtube.svg?react";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  .title {
    font-weight: 700;
    font-size: 30px;
    margin: 15px 0;
  }
  .desc {
    font-weight: 400;
    font-size: 18px;
  }
  .links {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 20px;
  }
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: ${({ color }) => `5px solid ${color}`};
`;

export const Icons = styled.div``;

const iconStyle = css`
  width: 25px;
  height: 25px;
  background: ${({ color }) => color};
  padding: 5px;
  border-radius: 12px;
  box-sizing: content-box;
`;

Icons.Github = styled(github)`
  ${iconStyle}
`;

Icons.Email = styled(email)`
  ${iconStyle}
`;

Icons.Instagram = styled(instagram)`
  ${iconStyle}
`;

Icons.Phone = styled(phone)`
  ${iconStyle}
`;
Icons.Twitter = styled(twitter)`
  ${iconStyle}
`;
Icons.Telegram = styled(telegram)`
  ${iconStyle}
`;

Icons.Youtube = styled(youtube)`
  ${iconStyle}
`;

export const Link = styled(NavLink)``;
