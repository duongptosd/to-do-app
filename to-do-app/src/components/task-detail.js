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
            display="flex"
            flexDirection="column"
            width={600}
            height={450}
            border="default"
            borderColor="dark"
            borderRadius="1%">
            <CardInfo />
            <CardContent />
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
            borderTopLeftRadius="1%"
            borderTopRightRadius="1%"
            flex={1}
            padding={5}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            backgroundColor="#FFA003">
            <BlockColor height={60} width={60} text="DEV" />
            <Pane textAlign="center">
                <Heading size={900} color="white">Learning React? Start small</Heading>
            </Pane>
            <AuthorInfo flex={1} name="Cristiano" />
        </Pane>
    );
}

const BlockColor = (props) => {
    return (
        <Pane
            height={props.height}
            width={props.width}
            display="flex"
            color="white"
            justifyContent="center"
            alignItems="center"
            backgroundColor="black">
            <Text color="white">{props.text}</Text>
        </Pane>
    );
}

const AuthorInfo = (props) => {
    return (
        <Pane
            padding={5}
            alignSelf="flex-end"
            width={200}
            height={50}
            backgroundColor="white"
            display="flex"
            alignItems="center">
            <Pane flex={1} textAlign="center">
                <Heading color="#FFA003">{props.name}</Heading>
            </Pane>
            <Pane >
                <BlockColor height={40} width={40} text="CR7" />
            </Pane>
        </Pane>
    );
}

export default TaskDetail;