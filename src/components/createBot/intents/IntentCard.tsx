import { FC, useState, useEffect } from 'react';

import { Intent } from '../CreateBot';
import {
  IntentCardContainer,
  CardFooter,
  CardBody,
  CardHeader,
} from '../styles';

type IntentCardProps = {
  intent: Intent;
  isAllSelected: boolean;
};

const IntentCard: FC<IntentCardProps> = ({ intent, isAllSelected }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    setIsSelected(isAllSelected);
  }, [isAllSelected]);

  const handleIntentSelection = () => setIsSelected(!isSelected);

  return (
    <IntentCardContainer onClick={handleIntentSelection}>
      <CardHeader>
        <h3>{intent?.name}</h3>
        <h6>{intent?.description}</h6>
        <input type="checkbox" checked={isSelected} />
      </CardHeader>
      <CardBody>
        <div>
          {intent?.trainingData?.expressions?.map((expression) => (
            <div>
              <img src="/images/user-expression.svg" alt="user expression" />
              <span key={expression?.id}>{expression.text}</span>
            </div>
          ))}
        </div>
        <div>
          <span>Total: {intent?.trainingData?.expressionCount}</span>
          <span>Show More</span>
        </div>
      </CardBody>
      <CardFooter>
        <img src="/images/bot.svg" alt="bot" />
        <span>{intent?.reply?.text}</span>
      </CardFooter>
      <div className="card__tooltip--hidden">
        <p>{`${isSelected ? 'click to remove' : 'click to add'}`}</p>
      </div>
    </IntentCardContainer>
  );
};

export default IntentCard;
