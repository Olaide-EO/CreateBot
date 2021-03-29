import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import rightgridchathead from "../../../assets/images/home/rightgridchathead.svg";

const RightGrid = () => {
    const history = useHistory();
    const handleStartWizzard = () => history.push("/create-bot")
  return (
    <Container>
      <StartWizzardCard>
        <p className="home-rightgrid-startwizzardtitle">Welcome</p>
        <p className="home-rightgrid-starwizzarddescription">
          It is super easy to create a bot for your website, click the button
          below to get started
        </p>
        <Button onClick={handleStartWizzard}>
            Create ChatBot
        </Button>
        <div className="home-rightgrid-chathead">
          <img src={rightgridchathead} alt="chathead" />
        </div>
      </StartWizzardCard>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  text-align: center;
  /* display: flex;
justify-content: center; */
`;

const StartWizzardCard = styled.div`
  width: 368px;
  height: 272px;
  background: #e6efff;
  border-radius: 50px;
  margin-top: 150px;
  margin-left: 100px;
  /* margin-right: auto; */
  padding: 35px;
  position: relative;
  .home-rightgrid-startwizzardtitle {
    text-align: center;
    font-family: DmSans;
    font-size: 25px;
    line-height: 25px;
    text-align: center;
    color: #324532;
  }
  .home-rightgrid-starwizzarddescription {
    margin-top: 20px;
    font-family: Poppins;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    color: #324532;
  }
  .home-rightgrid-chathead{
      position: absolute;
      right: 0px;
      bottom: 30px;
      transform: translate(90%,0%);
  }
`;

const Button = styled.button`
padding: 21px 26px;
width: 205px;
height: 61px;
background: #5956e9;
border-radius: 20px;
border: none;
outline: none;
font-family: DMSans;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.01em;
color: #FFFFFF;
margin-top: 30px;
cursor: pointer;
display: inline-block;
&:focus{
    outline: none;
}
`;

export default RightGrid;
