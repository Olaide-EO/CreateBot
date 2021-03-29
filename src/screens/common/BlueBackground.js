import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const BlueBackground = ({ width, height }) => (
  <Background width={width} height={height} />
);

const Background = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "80%")};
  background-color: #5956e9;
  border-radius: 0px 15% 95% 0% / 0px 50% 95% 50%;
  position: absolute;
  top: -10px;
  left: 0;
  z-index: 1;
`;

BlueBackground.propTypes = {
    width: propTypes.string,
    height: propTypes.string
}

export default BlueBackground;
