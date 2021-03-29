import React, { useState } from "react";
import styled from "styled-components";
import BlueBackground from "../common/BlueBackground";
import Logo from "../common/Logo";
import IntentCards from "./components/intentcards";
import TourGuide from "./components/tourguide/TourGuide";
import ContinueButton from "./components/common/ContinueButton";

const Wizzard = () => {
  const [showTourGuide, setShowTourGuide] = useState(true);
  return (
    <Container>
      <TourGuide
        showTourGuide={showTourGuide}
        setShowTourguide={setShowTourGuide}
      />
      <BlueBackground width="50%" />
      <Logo />
      <ContinueButton />
      <IntentCards />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
`;

const Footer = styled.div`
  height: 200px;
`;

export default Wizzard;
