import React from 'react';
import ReactDOM from 'react-dom';
import { Heading, Pane, Button } from 'evergreen-ui';

import '../styles/dropdown.css'

export const DropDown = (props) => props.isShowing ? ReactDOM.createPortal(
    <>
        <Pane className="modal-overlay" />
        <Pane className="modal-wrapper">
            <Pane className="modal">
                <Pane className="modal-header">
                    <Heading size={600} >Modal</Heading>
                    <Button onClick={props.toggle} className="close-button">
                        <span aria-hidden="true">&times;</span>
                    </Button>
                </Pane>
                <Pane className="modal-body">
                    {props.children}
                </Pane>
            </Pane>
        </Pane>
    </>, document.body
) : null;
