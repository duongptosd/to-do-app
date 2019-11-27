import React from 'react';
import '../styles/playerCard.css';
import 'font-awesome/css/font-awesome.min.css';

export const PlayerCard = () => (
    <div className="wrapper">
        <div className="pane">
            <div className="top-pane">
                <div className="top-buttons">
                    <button>
                        <i className="fa fa-camera" />
                    </button>
                    <button>
                        <i className="fa fa-user" />
                    </button>
                    <button>
                        <i className="fa fa-heart" />
                    </button>
                </div>
                <div className="top-text">
                    <div className="top-info">
                        <div className="top-name">Dendi, 29</div>
                        <i className="fa fa-check-circle" />
                    </div>
                    <div className="top-title">Dota 2 Player</div>
                </div>
                <div className="top-like">
                    <div className="top-polygon">
                        <i className="fa fa-heart" />
                    </div>
                </div>
            </div>
            <div className="bottom-pane">
                <div className="bottom-desc"></div>
                <div>
                    <button>
                        <i className="fa fa-user"></i>
                        <div>5'6</div>
                    </button>
                    <button>
                        <i className="fa fa-user" />
                        <div>Married</div>
                    </button>
                    <button>
                        <i className="fa fa-user" />
                        <div>Gemini</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
);