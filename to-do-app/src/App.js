import React from 'react';
import { Pane } from 'evergreen-ui';

import './App.css';
import MainView from './views/main.views';

function App() {
  return (
    <Pane
      background="purpleTint"
      border="muted"
      marginX="10%"
      marginY="2%"
      height="100%">
      <MainView />
    </Pane>
  );
}

export default App;
