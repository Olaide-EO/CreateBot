import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  BlueBackground,
  StyledButton,
  WrapperContainer,
} from '../styles.common';
import IntentList from './intents/IntentList';

export type Intent = {
  id: string;
  name: string;
  description: string;
  trainingData: {
    expressionCount: number;
    expressions: Array<{ id: string; text: string }>;
  };
  reply: {
    id: string;
    text: string;
  };
};
export type IntentsState = Intent[];

const CreateBot: FC<any> = () => {
  const [intents, setIntents] = useState<IntentsState>([]);
  const JSON_DATA_URL = '/data/api_data.json';

  useEffect(() => {
    const loadIntents = async () => {
      const data = await (await fetch(JSON_DATA_URL)).json();
      setIntents(data.intents);
    };
    loadIntents();
  }, []);

  return (
    <WrapperContainer>
      <BlueBackground width="50%">
        <Link to="/">
          <img src="/images/logo.svg" alt="brand" />
        </Link>
      </BlueBackground>
      <StyledButton isPositioned>Continue</StyledButton>
      <IntentList intents={intents} />
    </WrapperContainer>
  );
};

export default CreateBot;
