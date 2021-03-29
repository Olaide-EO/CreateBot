import React, { useState } from "react";
import styled from "styled-components";
import intents from "../../../../constants/intents";
import IntentCard from "./Card";


const IntentCards = () => {
  const [selectedIntents, setSelectedIntents] = useState([]);

  return (
    <Container className="tourguide-intent-cards">
      {intents.map((intent, index) => {
        return (
          <IntentCard
            selectedIntents={selectedIntents}
            setSelectedIntents={setSelectedIntents}
            intent={intent}
            key={index}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  position: relative;
  z-index: 20;
  margin-top: 0px;
  height: 300px;

  margin-top: 200px;
  margin-bottom: 200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  justify-items: center;

  @media screen and (max-width: 1440px) and (min-width: 520px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }

  @media screen and (max-width: 539px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 361px) {
    justify-content: center;
  }
`;


export default IntentCards;
