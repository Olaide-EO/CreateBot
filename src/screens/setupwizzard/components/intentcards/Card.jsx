import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const IntentCard = ({ intent, selectedIntents, setSelectedIntents }) => {
  const intentAdded = selectedIntents.includes(intent.id);

  const handleIntentSelection = (id) => {
    const newState = JSON.parse(JSON.stringify(selectedIntents));
    if (intentAdded) {
      const index = newState.indexOf(id);
      if (index > -1) {
        newState.splice(index, 1);
        setSelectedIntents(newState);
        return;
      }
    }
    newState.push(id);
    setSelectedIntents(newState);
  };
  return (
    <Container onClick={() => handleIntentSelection(intent.id)}>
      <CardBackground />
      <CardContainer intentAdded={intentAdded}>
        <CardHeader>{intent?.name}</CardHeader>
        <CardBody>{intent?.description}</CardBody>
        <CardFooter>{intent?.trainingData?.expressions[0]?.text}</CardFooter>
      </CardContainer>
      {!intentAdded && (
        <div className="wizzard-card-showonhover">
          <p className="">Click to Add</p>
        </div>
      )}
      {intentAdded && (
        <div className="wizzard-card-intentadded">
          <p className="">Intent Added</p>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 240px;
  height: 300px;
  margin-top: 50px;
  position: relative;
  cursor: pointer;
  .wizzard-card-showonhover,
  .wizzard-card-intentadded {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 10%;
    background-color: #e6efff;
    padding: 20px;
    border-radius: 5px;
    z-index: 10;
    text-align: center;
    padding-bottom: 20px;
    p {
      font-family: Poppins;
      font-weight: 500;
      font-size: 15px;
      line-height: 0px;
      letter-spacing: -0.02em;
      color: #030235;
    }
  }
  .wizzard-card-showonhover {
    display: none;
  }
  &:hover {
    /* opacity: 0.7; */
    .wizzard-card-showonhover {
      display: block;
    }
  }
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  z-index: 5;
  position: relative;
  border: 2px solid #e6efff;
  text-align: center;
  padding: 30px 20px 0px 20px;
`;

const CardBackground = styled.div`
  width: 240px;
  height: 300px;
  background: #e6efff;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: -10px;
  left: -10px;
  z-index: 2;
`;

const CardHeader = styled.p`
  font-family: DMSans;
  font-weight: 500;
  font-size: 28px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #030235;
`;

const CardBody = styled.div`
  margin-top: 30px;
  font-family: Poppins;
  font-weight: 300;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.7);
`;

const CardFooter = styled.div`
  margin-top: 30px;
  font-family: DMSans;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #030235;
`;

IntentCard.propTypes = {
  intent: PropTypes.object.isRequired,
  selectedIntents: PropTypes.object,
  setSelectedIntents: PropTypes.func,
};

export default IntentCard;
