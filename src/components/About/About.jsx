import React from "react";
import "./About.css";
import { aboutData } from "../../data/aboutData";

export const About = () => {
    return (
        <div className="About" id='about'>

            {/* about header */}
            <div className="about-header">
                <span>
                    About
                    <span className="stroke-text"> Us </span>
                </span>
            </div>

            {/* about-categories */}
            <div className="about-categories">
                {aboutData.map((about) => (
                    <div className="category">
                        <div className="about-img">
                            <img src={about.image} alt=""/>
                            {about.image2}
                        </div>
                        <span>{about.name}</span>
                        <span>{about.detail}</span>
                        {about.abc}
                    </div>
                ))}
            </div>
        </div>
    );
};
