import React from 'react';
import { Pane } from 'evergreen-ui';

import TaskDetail from '../components/task-detail';
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
                flex={3}>
                <TaskList />
            </Pane>
            <Pane
                padding={20}
                flex={2}
                background="redTint"
                flex={3}
                border="muted">
                <TaskDetail />
            </Pane>
        </Pane>
    );
}

export default MainView;