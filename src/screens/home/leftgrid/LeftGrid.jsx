import React from "react";
import styled from "styled-components";
import leftgridbot from "../../../assets/images/home/leftgridbot.svg";
import Logo from "../../common/Logo";
import BlueBackground from "../../common/BlueBackground";

const LeftGrid = () => {
  return (
    <Container>
      <BlueBackground />
      <Logo>ultimate.ai</Logo>
      <div className="home-leftgrid-body">
        <div className="home-leftgrid-body-pinkball" />
        <Caption>
          The world most <br />
          powerful chat bot
        </Caption>
        <Description>
          Create your own chatbot within seconds, <br />
          with our chatbot creation wizzard
        </Description>
      </div>
      <ChatBotImage>
        <img src={leftgridbot} alt="chatbot" />
      </ChatBotImage>
    </Container>
  );
};

export default LeftGrid;

const Container = styled.div`
  width: 50%;
  height: 100%;
  background: #ffffff;
  position: relative;
  padding: 30px 50px 50px 50px;
  z-index: 10;
  .home-leftgrid-body {
    margin-top: 150px;
    position: relative;
    width: 100%;
    .home-leftgrid-body-pinkball {
      position: absolute;
      width: 128px;
      height: 128px;
      right: 25%;
      top: 0px;
      background: #fab8c4;
      mix-blend-mode: normal;
      z-index: 2;
      border-radius: 50%;
    }
  }
`;

const Caption = styled.p`
  font-family: DMSans;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: -0.045em;
  color: #ffffff;
  position: relative;
  z-index: 10;
`;

const Description = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.025em;
  color: #ffffff;
  opacity: 0.7;
  position: relative;
  z-index: 10;
  margin-top: 20px;
`;

const ChatBotImage = styled.div`
  width: 65%;
  position: absolute;
  z-index: 2;
  height: 50%;
  bottom: 0px;
  left: 50px;
  img {
    width: 100%;
    height: 100%;
  }
`;
