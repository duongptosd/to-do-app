import React from 'react';
import { Pane } from 'evergreen-ui';

import TaskDetail from '../components/task-detail';
import TaskForm from '../components/task-form';
import TaskList from '../components/task-list';

const MainView = () => {
    return (
        <Pane
            display="flex"
            height="100%">
            <Pane
                padding={20}
                background="greenTint"
                border="muted"
                flex={2}>
                <TaskList />
            </Pane>
            <Pane
                display="flex"
                flexDirection="column"
                flex={3}>
                <Pane
                    padding={20}
                    flex={2}
                    background="orangeTint"
                    border="muted">
                    <TaskForm />
                </Pane>
                <Pane
                    padding={20}
                    flex={3}
                    background="redTint"
                    border="muted">
                    <TaskDetail />
                </Pane>
            </Pane>
        </Pane>
    );
}

export default MainView;