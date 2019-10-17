import React from 'react';
import { Heading, Pane, Text } from 'evergreen-ui';

export const CardBody = () => {
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
            <CardContent
                title="Learning React? Start Small"
                content="Can't pry yoursef away from the tutorials? The cure is to make tiny little experiment apps."
                page="dev.to"/>
        </Pane>
    );
}

export const CardContent = (props) => {
    return (
        <Pane
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            backgroundColor="white"
            height="30%"
            padding="5%">
            <Heading size={500}>{props.title}</Heading>
            <Text size={400}>{props.content}</Text>
            <Text size={400} color="#DADCDE">{props.page}</Text>
        </Pane>
    );
}

export const CardInfo = () => {
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

export const BlockColor = (props) => {
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

export const AuthorInfo = (props) => {
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
