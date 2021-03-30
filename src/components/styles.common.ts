import styled, { css } from 'styled-components/macro';

export const WrapperContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
`;

type BlueBackgroundProps = {
  width?: string;
  height?: string;
};

export const BlueBackground = styled.div<BlueBackgroundProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '80%')};
  background-color: #5956e9;
  border-radius: 0px 15% 95% 0% / 0px 50% 95% 50%;
  position: absolute;
  top: -10px;
  left: 0;
  z-index: 1;
  img {
    margin-top: 22px;
    margin-left: 52px;
  }
`;

type StyledButtonProps = {
  isPositioned?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 21px 26px;
  width: 205px;
  height: 61px;
  background: #5956e9;
  border-radius: 20px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 600;
  font-family: inherit;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-top: 30px;
  cursor: pointer;
  display: inline-block;
  ${(props) =>
    props.isPositioned &&
    css`
      position: absolute;
      right: 50px;
      top: -16px;
    `}
  &:focus {
    outline: none;
  }
`;
