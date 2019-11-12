import React, { useState, useEffect } from 'react';
import '../styles/switchToggle.css';

export const SwitchToggle = (props) => {
  const [isChecked, setIsChecked] = useState(props.isChecked);

  const toggleCheckBox = () => setIsChecked(!isChecked);

  return (
    <div className="wrapper">
      <label>
        <input type="checkbox" onChange={toggleCheckBox} checked={isChecked}/>
        <div className="switch">
          <span className="controller"></span>
        </div>
      </label>
    </div>
  );
};
