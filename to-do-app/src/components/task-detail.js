import React from 'react';
import { Heading, Icon, Pane, Text } from 'evergreen-ui';

const TaskDetail = () => (
    <Pane>
        <Heading marginTop="default">Task name</Heading>
        <Text marginTop={12}>Abc</Text>
        <Heading marginTop="default">Deadline</Heading>
        <Text marginTop={12}>Abc</Text>
        <Heading marginTop="default">Content</Heading>
        <Text marginTop={12}>Abc</Text>
        <TaskSocial />
    </Pane>
);

const TaskSocial = () => {
    return (
        <Pane
            display="flex"
            justifyContent="flex-start">
            <Pane display="flex" alignItems="center">
                <Icon icon="comment" color="success" marginRight={20} />
                <Text>20</Text>
            </Pane>
            <Pane display="flex" alignItems="center">
                <Icon icon="heart" color="success" marginRight={20} />
                <Text>20</Text>
            </Pane>
            <Pane display="flex" alignItems="center">
                <Icon icon="refresh" color="success" marginRight={20} />
                <Text>20</Text>
            </Pane>
            <Icon icon="info-sign" color="success" marginRight={20} />
        </Pane>
    );
}

export default TaskDetail;