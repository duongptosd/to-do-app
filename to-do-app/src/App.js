import React, { useState } from 'react';
import { Button, Pane, Dialog } from 'evergreen-ui';

import './App.css';
import MainView from './views/main.views';
import TaskForm from './components/task-form';

function App() {
  const [state, setState] = useState({
    isShown: false,
    isLoading: false
  });
  return (
    <Pane
      background="purpleTint"
      border="muted"
      marginX="10%"
      marginY="3%"
      height="100%"
      display="flex"
      flexDirection="column">
      <Pane
        background="orangeTint"
        paddingX={20}
        paddingY={40}>
        <Button onClick={() => setState({ isShown: true })}>Create new task</Button>
      </Pane>
      <Dialog
        isShown={state.isShown}
        title="Create new task"
        onCloseComplete={() => setState({ isShown: false, isLoading: false })}
        isConfirmLoading={state.isLoading}
        onConfirm={() => setState({ isLoading: true })}
        confirmLabel={state.isLoading ? 'Creating...' : 'Create'}
      >
        <TaskForm />
      </Dialog>
      <MainView />
    </Pane>
  );
}

export default App;
