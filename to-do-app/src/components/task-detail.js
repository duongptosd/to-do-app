import React from 'react';
import { Card, Heading, Icon, Pane, Text } from 'evergreen-ui';

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
            <Pane display="flex" alignItems="center" marginRight={40}>
                <Icon icon="comment" color="success" marginRight={10} />
                <Text>20</Text>
            </Pane>
            <Pane display="flex" alignItems="center" marginRight={40}>
                <Icon icon="heart" color="success" marginRight={10} />
                <Text>20</Text>
            </Pane>
            <Pane display="flex" alignItems="center" marginRight={40}>
                <Icon icon="refresh" color="success" marginRight={10} />
                <Text>20</Text>
            </Pane>
            <Pane display="flex" alignItems="center" marginRight={40}>
                <Icon icon="info-sign" color="success" marginRight={10} />
            </Pane>
            <CardContent />
        </Pane>
    );
}

const CardContent = () => {
    return (
        <Pane width={600} height={450} border="default" borderColor="dark" borderRadius="1%">
            Alohadance
        </Pane>
    );
}

export default TaskDetail;