import { FC, useState } from 'react';

import { IntentsState } from '../CreateBot';
import IntentCard from './IntentCard';
import { CheckBoxWrapper, IntentListContainer } from '../styles';

type IntentListProps = {
  intents: IntentsState;
};

const IntentList: FC<IntentListProps> = ({ intents }) => {
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  const handleSelectAll = () => setIsAllSelected(!isAllSelected);

  return (
    <IntentListContainer>
      <CheckBoxWrapper>
        <span>Select All</span>
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={handleSelectAll}
        />
      </CheckBoxWrapper>
      {intents.map((intent) => (
        <IntentCard
          key={intent?.id}
          intent={intent}
          isAllSelected={isAllSelected}
        />
      ))}
    </IntentListContainer>
  );
};

export default IntentList;
