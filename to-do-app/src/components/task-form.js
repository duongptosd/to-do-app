import React from 'react';
import { Pane, TextInputField, Button } from 'evergreen-ui';
import useSignUpForm from '../hooks/form-hook';


const TaskForm = () => {
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm();
    return (
        <form onSubmit={handleSubmit}>
            <Pane>
                <TextInputField
                    label="Task name"
                    placeholder="Task name"
                    name="firstName"
                    onChange={handleInputChange}
                    value={inputs.firstName}
                    required 
                />
            </Pane>
            <Pane>
                <TextInputField
                    label="Content"
                    placeholder="Task detail"
                    name="firstName"
                    onChange={handleInputChange}
                    value={inputs.firstName}
                    required 
                />
            </Pane>
            <Pane>
                <TextInputField
                    label="Deadline date"
                    placeholder="Deadline date"
                    name="firstName"
                    onChange={handleInputChange}
                    value={inputs.firstName}
                    required 
                />
            </Pane>
        </form>
    );
}

export default TaskForm;