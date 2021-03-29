import React, { useState } from "react";
import Joyride, { ACTIONS, EVENTS, STATUS } from "react-joyride";
import PropTypes from "prop-types";
import {
  tooltipFirstStyle,
} from "./Styles";

import rightgridchathead from "../../../../assets/images/home/rightgridchathead.svg";
import { StartWizzardCard, Button } from "./Styles";

const TourGuide = ({ setShowTourguide, showTourGuide }) => {
  const [stepIndex, setStepIndex] = useState(0);

  const handleJoyRideCallBack = (data) => {
    const { action, index, status, type } = data;
    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      setStepIndex(index + (action === ACTIONS.PREV ? -1 : 1));
    } else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setShowTourguide(false);
    }
    if (action === "close") {
      setShowTourguide(false);
    }
    const el = document.querySelector(".react-joyride__spotlight");
    if (el && index === 1) {
      el.style.width = "241px";
      el.style.height = "70px";
      el.style.marginTop = "5px";
    } else if (el && index > 1) {
      el.style.width = "241px";
      el.style.height = "47px";
      el.style.marginTop = "10px";
    }
  };

  const steps = [
    {
      content: (
        <StartWizzardCard>
          <p className="home-rightgrid-startwizzardtitle">Welcome</p>
          <p className="home-rightgrid-starwizzarddescription">
            We offer a list of already pretrained intents as part of your bot
            creation process
          </p>
          <Button onClick={() => setStepIndex((prev) => prev + 1)}>
            Continue
          </Button>
          <div className="home-rightgrid-chathead">
            <img src={rightgridchathead} alt="chathead" />
          </div>
        </StartWizzardCard>
      ),
      target: "body",
      placement: "center",
      disableBeacon: true,
      showSkipButton: true,
      styles: {
        tooltip: {
          ...tooltipFirstStyle,
        },
        tooltipFooter: {
          display: "none"
        },
        buttonNext: {
          display: "none",
        },

        buttonSkip: {
          display: "none",
        },
        buttonClose: {
          display: "none",
        },
      },
    },
    {
      content: (
        <StartWizzardCard>
          <p className="home-rightgrid-startwizzardtitle">It Is Super Easy</p>
          <p className="home-rightgrid-starwizzarddescription">
            Train your bot, by selecting one or more intents on the cards below
          </p>
          <Button onClick={() => setShowTourguide(false)}>
            Start Training
          </Button>
          <div className="home-rightgrid-chathead-left">
            <img src={rightgridchathead} alt="chathead" />
          </div>
        </StartWizzardCard>
      ),
      target: "body",
      placement: "center",
      disableBeacon: true,
      showSkipButton: true,
      styles: {
        tooltip: {
          ...tooltipFirstStyle,
        },
        tooltipFooter: {
          display: "none"
        },
        buttonNext: {
          display: "none",
        },

        buttonSkip: {
          display: "none",
        },
        buttonClose: {
          display: "none",
        },
      },
    },
  ];
  // eslint-disable-next-line no-unused-vars
  const [stepsState, setStepState] = useState(steps);

  return (
    <Joyride
      steps={stepsState}
      run={showTourGuide}
      continuous={true}
      styles={{
        options: {
          zIndex: 10000,
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.781)",
        },
        beaconInner: {
          backgroundColor: "#0765FF",
        },
        beaconOuter: {
          backgroundColor: "rgb(7, 101, 255, 0.2)",
          border: "2px solid #0765FF",
        },
        beacon: {
          outline: "none",
        },
      }}
      disableCloseOnEsc={true}
      stepIndex={stepIndex}
      callback={handleJoyRideCallBack}
    />
  );
};

TourGuide.propTypes = {
  showTourGuide: PropTypes.bool.isRequired,
  setShowTourguide: PropTypes.func.isRequired,
};

export default TourGuide;
