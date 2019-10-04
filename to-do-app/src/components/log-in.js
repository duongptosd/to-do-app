import React from 'react';
import { Button, Heading, TextInputField, Pane } from 'evergreen-ui';

const LogIn = () => {
    return (
        <Pane
            display="flex"
            flexDirection="column"
            width="50%"
            background="redTint"
            marginX="auto"
            height="100%"
            padding="3%">
            <Pane
                display="flex"
                justifyContent="center">
                <Heading margin={20} >Log in</Heading>
            </Pane>
            <form
                flex={1}
                onSubmit={() => alert('fuck everyone')}>
                <Pane>
                    <TextInputField
                        label="Email"
                        placeholder="Email"
                        name="email"
                        onChange={() => alert('username')}
                        value="Email"
                        required 
                    />
                </Pane>
                <Pane>
                    <TextInputField
                        label="Password"
                        placeholder="Password"
                        name="password"
                        onChange={() => alert('password')}
                        value="Password"
                        required
                    />
                </Pane>
            </form>
            <Pane
                display="flex"
                justifyContent="center"
                marginY={30}>
                <Button height={30} marginRight={16} intent="success">
                    Sign up
                </Button>
                <Button
                    height={30}
                    appearance="primary"
                    marginRight={16}
                    intent="success">
                    Log in
                </Button>
            </Pane>
        </Pane>
    );
};

export default LogIn;
