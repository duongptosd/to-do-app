import React from 'react';
import { Button, Heading, Icon, Pane, Text } from 'evergreen-ui';
import { CardBody } from './infoCard';
import { DropDown } from './dropDown';
import { useModal } from '../hooks/useModal';

const TaskDetail = () => {
    const { isShowing, toggle } = useModal();
    return (
        <>
            <Heading marginTop="default">Task name</Heading>
            <Text marginTop={12}>Abc</Text>
            <Heading marginTop="default">Deadline</Heading>
            <Text marginTop={12}>Abc</Text>
            <Heading marginTop="default">Content</Heading>
            <Text marginTop={12}>Abc</Text>
            <TaskSocial />
            <Pane>
                <Button onClick={toggle}>Create Modal</Button>
                <DropDown isShowing={isShowing} toggle={toggle} >
                    <TaskSocial />
                </DropDown>
            </Pane>
        </>
    );
}

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

export default TaskDetail;