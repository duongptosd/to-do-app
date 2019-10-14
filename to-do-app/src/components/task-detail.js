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
            <CardBody />
        </Pane>
    );
}

const CardBody = () => {
    return (
        <Pane
            width={600}
            height={450}
            border="default"
            borderColor="dark"
            borderRadius="1%">
            <CardContent />
            <BlockColor text="DEV" />
        </Pane>
    );
}

const CardContent = () => {
    return (
        <Pane
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            backgroundColor="white"
            height="30%"
            padding="5%">
            <Heading size={500}>Learning React? Start Small</Heading>
            <Text size={400}>Can't pry yoursef away from the tutorials? The cure is to make tiny little experiment apps.</Text>
            <Text size={400} color="#DADCDE">dev.to</Text>
        </Pane>
    );
}

const CardInfo = () => {
    return (
        <Pane
            display="flex"
            flexDirection="column">
            <Pane
                display="flex">
            </Pane>
        </Pane>
    );
}

const BlockColor = (props) => {
    return (
        <Pane
            width={60}
            height={60}
            display="flex"
            color="white"
            justifyContent="center"
            alignItems="center"
            backgroundColor="black">
            <Text color="white">{props.text}</Text>
        </Pane>
    );
}

export default TaskDetail;