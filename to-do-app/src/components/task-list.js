import React, { useEffect, useState } from 'react';
import { Table } from 'evergreen-ui';
import { firestore, loggedIn$ } from '../firebase/firebase';

const tasksRef = firestore.collection('/tasks');

const TaskList = () => {
    const [tasks, setTasks] = useState([
        {
            id: 0,
            author: 'Guest 0',
            content: 'Content 0',
            created_date: '25-09-2019',
            deadline_date: '25-10-2019',
            name: 'Task 0'
        }
    ]);
    const creatData = () => {
        firestore
            .collection('tasks')
            .doc('0SiZceRPf0bQ5fMLU3qU')
            .set(
                {
                    id: 0,
                    author: 'Guest 0',
                    content: 'Content 0',
                    created_date: '25-09-2019',
                    deadline_date: '25-10-2019',
                    name: 'Task 0'
                }
            );
    };
    return (
        <Table>
            <Table.Head>
                <Table.SearchHeaderCell
                    onChange={e => alert('hihi ne')}
                />
                <Table.TextHeaderCell>
                    Content
                </Table.TextHeaderCell>
                <Table.TextHeaderCell>
                    Created Date
                </Table.TextHeaderCell>
                <Table.TextHeaderCell>
                    Deadline Date
                </Table.TextHeaderCell>
            </Table.Head>
            <Table.Body height={240}>
                {tasks.map(task => (
                    <Table.Row key={task.id} isSelectable onSelect={creatData}>
                        <Table.TextCell>{task.name}</Table.TextCell>
                        <Table.TextCell>{task.content}</Table.TextCell>
                        <Table.TextCell isNumber>{task.created_date}</Table.TextCell>
                        <Table.TextCell>{task.deadline_date}</Table.TextCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}

export default TaskList;