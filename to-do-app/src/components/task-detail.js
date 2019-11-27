import React from 'react';
import { Button, Heading, Icon, Pane, Text } from 'evergreen-ui';
import { CardBody } from './infoCard';
import { DropDown } from './dropDown';
import { SwitchToggle } from './switchToggle';
import { SocialCard } from './socialCard';
import { useModal } from '../hooks/useModal';

const TaskDetail = () => {
    const description = 'Danil "Dendi" Ishutin (born December 30, 1989) is a Ukrainian professional Dota 2 and former DotA player. Well known for his solo mid skills, he is regarded as one of the most creative players in the scene today.';
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
            <SocialCard
                name="Dendi"
                age={29}
                title="Dota 2 Player"
                description={description}
                height="5'4"
                marriage="Married"
                zodiacSign="Gemini"
            />
            <SocialCard
                name="Fear"
                age={35}
                title="Dota 2 Player"
                description={description}
                height="5'4"
                marriage="Married"
                zodiacSign="Gemini"
            />
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