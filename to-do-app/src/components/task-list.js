import React, { useEffect, useState } from 'react';
import { Table } from 'evergreen-ui';
import { collectionData } from 'rxfire/firestore';

import firebase from '../firebase/firebase';

const tasksRef = firebase.collection('tasks');

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        tasksRef
        .get()
        .then(res => {
            const data = res.docs.map(doc => doc.data());
            console.log(data);
        });
    });
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
                    <Table.Row key={task.id} isSelectable onSelect={() => alert(task.name)}>
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