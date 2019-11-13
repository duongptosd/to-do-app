import React from 'react';
import '../styles/socialCard.css'
import 'font-awesome/css/font-awesome.min.css';

export const SocialCard = (props) => {
    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="top">
                    <div className="social-buttons">
                        <button>
                            <i className="fa fa-camera"></i>
                        </button>
                        <button>
                            <i className="fa fa-heart"></i>
                        </button>
                        <button>
                            <i className="fa fa-user"></i>
                        </button>
                    </div>
                    <div className="text">
                        <div className="wrapper-name">
                            <div className="name">{props.name}, {props.age}</div>
                            <i className="fa fa-check-circle"></i>
                        </div>
                        <div className="title">{props.title}</div>
                    </div>
                    <button className="like">
                        <div className="hexagon">
                            <i className="fa fa-heart"></i>
                        </div>
                    </button>
                </div>
                <div className="bottom">
                    <div className="desc">{props.description}</div>
                    <div className="buttons">
                        <button className="height">
                            <i className="fa fa-user"></i>
                            <div className="personal-info">{props.height}</div>
                        </button>
                        <button className="marriage">
                            <i className="fa fa-user"></i>
                            <div className="personal-info">{props.marriage}</div>
                        </button>
                        <button className="zodiac-sign">
                            <i className="fa fa-user"></i>
                            <div className="personal-info">{props.zodiacSign}</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
