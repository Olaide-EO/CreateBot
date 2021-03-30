import styled, { css } from 'styled-components/macro';

type GridContainerProps = {
  isLeftGrid?: boolean;
};

export const GridContainer = styled.div<GridContainerProps>`
  width: 50%;
  height: 100%;
  background: #ffffff;
  position: relative;
  ${(props) =>
    props.isLeftGrid &&
    css`
      padding: 30px 50px 50px 50px;
      z-index: 10;
      .home__left-grid {
        margin-top: 150px;
        position: relative;
        width: 100%;
        .home__left-grid--pinkball {
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
    `}
`;

export const Caption = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: -0.045em;
  color: #ffffff;
  position: relative;
  z-index: 10;
`;

export const Description = styled.p`
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

export const ChatBotImage = styled.img`
  width: 65%;
  position: absolute;
  z-index: 2;
  height: 50%;
  bottom: 0px;
  left: 50px;
`;

export const StartCard = styled.div`
  width: 368px;
  height: 272px;
  background: #e6efff;
  border-radius: 50px;
  margin-top: 150px;
  margin-left: 100px;
  padding: 35px;
  position: relative;
  text-align: center;
  .home__right-grid--title {
    font-size: 30px;
    font-weight: 600;
    line-height: 25px;
    color: #324532;
  }
  .home__right-grid--description {
    margin-top: 20px;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    color: #324532;
  }
  .home__right-grid--chathead {
    position: absolute;
    right: 0px;
    bottom: 30px;
    transform: translate(90%, 0%);
  }
`;
