import React from 'react';
import '../styles/socialCard.css'
import 'font-awesome/css/font-awesome.min.css';

export const SocialCard = () => {
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
                            <div className="name">Dendi, 29</div>
                            <i className="fa fa-check-circle"></i>
                        </div>
                        <div className="title">Dota 2 Player</div>
                    </div>
                    <button className="like">
                        <div className="hexagon">
                            <i className="fa fa-heart"></i>
                        </div>
                    </button>
                </div>
                <div className="bottom">
                    <div className="desc">
                    Danil "Dendi" Ishutin (born December 30, 1989) is a Ukrainian professional Dota 2 and former DotA player. Well known for his solo mid skills, he is regarded as one of the most creative players in the scene today.
                    </div>
                    <div className="buttons">
                        <button className="height">
                            <i className="fa fa-user"></i>
                            <div className="personal-info">5'4</div>
                        </button>
                        <button className="marriage">
                            <i className="fa fa-user"></i>
                            <div className="personal-info">Married</div>
                        </button>
                        <button className="zodiac-sign">
                            <i className="fa fa-user"></i>
                            <div className="personal-info">Gemini</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
