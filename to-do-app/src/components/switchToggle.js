import React from 'react';
import '../styles/switchToggle.css';

export const SwitchToggle = () => {
  return (
    <div className='wrapper'>
      <input id="switch1" type='checkbox' />
      <label for="switch1" className='switch'>
        <div className='line'>
          <span className='toggle'></span>
        </div>
      </label>
    </div>
  );
};
