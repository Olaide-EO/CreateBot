import { FC } from 'react';

import { BlueBackground } from '../styles.common';
import { GridContainer, Caption, Description, ChatBotImage } from './styles';

const LeftGrid: FC<any> = () => (
  <GridContainer isLeftGrid>
    <BlueBackground>
      <img src="/images/logo.svg" alt="brand" />
    </BlueBackground>
    <div className="home__left-grid">
      <div className="home__left-grid--pinkball" />
      <Caption>
        The world most <br />
        powerful chat bot plug
      </Caption>
      <Description>
        Create your own chatbot within seconds, <br />
        with our chatbot creation wizard
      </Description>
    </div>
    <ChatBotImage src="/images/left-grid-chat-bot.svg" alt="chatbot" />
  </GridContainer>
);

export default LeftGrid;
