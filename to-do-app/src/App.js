import React, { useState, useEffect } from 'react';
import { Button, Pane, Dialog } from 'evergreen-ui';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import MainView from './views/main.views';
import TaskForm from './components/task-form';
import LogIn from './components/log-in';

function App() {
  const [state, setState] = useState({
    isShown: false,
    isLoading: true
  });

  const fakeAsync = () => new Promise((resolve) => setTimeout(() => resolve(), 300000));

  useEffect(async () => {
    await fakeAsync();
    setState(
      { isLoading: false }
    )
  }, []);

  return (
    state.isLoading ? <LoadingSpinner /> :
    <Router>
      <Switch>
        <Route path='/login'>
          <LogIn />
        </Route>
        <Route path='/'>
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
        </Route>
      </Switch>
    </Router>
  );
}

const LoadingSpinner = () => {
  return (
    <svg class="loading-spinner" height="100%" width="100%" viewBox="0 0 100 100">
        <rect className="cube cube1" x={48} y={48} width={1} height={1} />
        <rect className="cube cube2" x={49} y={48} width={1} height={1} />
        <rect className="cube cube3" x={50} y={48} width={1} height={1} />
        <rect className="cube cube4" x={51} y={48} width={1} height={1} />
        <rect className="cube cube5" x={48} y={49} width={1} height={1} />
        <rect className="cube cube6" x={49} y={49} width={1} height={1} />
        <rect className="cube cube7" x={50} y={49} width={1} height={1} />
        <rect className="cube cube8" x={51} y={49} width={1} height={1} />
        <rect className="cube cube9" x={48} y={50} width={1} height={1} />
        <rect className="cube cube10" x={49} y={50} width={1} height={1} />
        <rect className="cube cube11" x={50} y={50} width={1} height={1} />
        <rect className="cube cube12" x={51} y={50} width={1} height={1} />
        <rect className="cube cube13" x={48} y={51} width={1} height={1} />
        <rect className="cube cube14" x={49} y={51} width={1} height={1} />
        <rect className="cube cube15" x={50} y={51} width={1} height={1} />
        <rect className="cube cube16" x={51} y={51} width={1} height={1} />
    </svg>
  );
}

export default App;
