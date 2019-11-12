import React from 'react';
import { Pane, Button } from 'evergreen-ui';
import '../styles/socialCard.css'
import 'font-awesome/css/font-awesome.min.css';

export const SocialCard = () => {
    return (
        <Pane className="card-wrapper">
            <Pane className="card">
                <Pane className="top">
                    <Pane className="social-buttons">
                        <button>
                            <i className="fa fa-camera"></i>
                        </button>
                        <button>
                            <i className="fa fa-camera"></i>
                        </button>
                        <button>
                            <i className="fa fa-camera"></i>
                        </button>
                    </Pane>
                    <Pane className="text">
                        <Pane className="wrapper-name">
                            <Pane className="name">Morgan, 22</Pane>
                            <i className="fa fa-heart"></i>
                        </Pane>
                        <Pane className="title">DotA Player</Pane>
                    </Pane>
                    <button className="like">
                        <Pane className="hexagon">
                            <i className="fa fa-user"></i>
                        </Pane>
                    </button>
                </Pane>
                <Pane className="bottom">
                    <Pane className="desc">
                        What does a hero truly need? Anti-mage needs Battle Fury, Axe needs Blink Dagger, while Daedalus is the core item for Kunkka.
                    </Pane>
                    <Pane className="buttons">
                        <button className="height">
                            <i className="fa fa-user"></i>
                            <Pane>5'4</Pane>
                        </button>
                        <button className="marriage">
                            <i className="fa fa-user"></i>
                            <Pane>Married</Pane>
                        </button>
                        <button className="zodiac-sign">
                            <i className="fa fa-user"></i>
                            <Pane>Gemini</Pane>
                        </button>
                    </Pane>
                </Pane>
            </Pane>
        </Pane>
    );
}
