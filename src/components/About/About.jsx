import React from "react";
import "./About.css";
import image1 from '../../assets/1.jpg';

export const About = () => {
    return (
        <div className="About" id="about">
            {/* about header */}
            <div className="about-header">
                <span>
                    ABOUT OUR
                    <span className="stroke-text"> FOUNDER </span>
                </span>
            </div>

            <div className="info">
                <img src={image1} alt="" className="about-img" />
                <div className="about-info">
                    <h2>Vaibhav Sharma</h2>
                    <span>
                        Vaibhav is a certified nutritionist, entrepreneur, athlete and podcaster. He founded the FITXCOMMUNITY with the sole purpose of bringing together fitness enthusiasts and connect personal trainers to their clients with the help of different platforms.
                        He saw how people used to face problems in the area of transforming their bodies, whether it be weight loss or gain. He used to build personal relationships with his clients, work to reach goals surrounding all aspects of mental, physical, and social health, and provide support in order to reach those goals. It was later he discovered that this knowledge should reach more people and influence them to work upon themselves in the field of fitness.

                    </span>
                </div>
            </div>
        </div>
    );
};