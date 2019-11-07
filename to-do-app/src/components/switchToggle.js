import React from 'react';
import { Wrapper, Label, Line, Radio, TogglePoint } from './switchToggle.css';

export const SwitchToggle = () => {
  return (
    <Wrapper>
      <Label>
        <Line>
          <TogglePoint></TogglePoint>
        </Line>
      </Label>
      <Radio type='checkbox' />
    </Wrapper>
  );
};
