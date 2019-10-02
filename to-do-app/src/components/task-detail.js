import React from 'react';
import { Heading, Pane, Text } from 'evergreen-ui';

const TaskDetail = () => (
    <Pane>
        <Heading marginTop="default">Task name</Heading>
        <Text marginTop={12}>Abc</Text>
        <Heading marginTop="default">Deadline</Heading>
        <Text marginTop={12}>Abc</Text>
        <Heading marginTop="default">Content</Heading>
        <Text marginTop={12}>Abc</Text>
    </Pane>
);

export default TaskDetail;