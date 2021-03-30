import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { GridContainer, StartCard } from './styles';
import { StyledButton } from '../styles.common';

const RightGrid: FC<any> = () => {
  const history = useHistory();
  const handleNavigate = () => history.push('/create-bot');

  return (
    <GridContainer>
      <StartCard>
        <p className="home__right-grid--title">Welcome</p>
        <p className="home__right-grid--description">
          It is super easy to create a bot for your website, click the button
          below to get started
        </p>
        <StyledButton onClick={handleNavigate}>Create ChatBot</StyledButton>
        <div className="home__right-grid--chathead">
          <img src="/images/right-grid-chat-head.svg" alt="profile" />
        </div>
      </StartCard>
    </GridContainer>
  );
};

export default RightGrid;
