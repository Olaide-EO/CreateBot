import styled from "styled-components";

export const tooltipFirstStyle = {
    width: 368,
    height: 272,
    borderRadius: 0,
    background: "transparent"
  };

export const StartWizzardCard = styled.div`
  width: 368px;
  height: 272px;
  background: #e6efff;
  border-radius: 50px;
 
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
  .home-rightgrid-chathead-left{
      position: absolute;
      left: 0px;
      top: 0px;
      transform: translate(-90%, 0%);
  }
`;

export const Button = styled.button`
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
