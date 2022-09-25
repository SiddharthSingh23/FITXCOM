import React from 'react'
import './About.css'
import { aboutData } from "../../data/aboutData";

export default function About() {
    return (
        <div className="About" id='about'>
            <span className="about-head">ABOUT <span className="stroke-text">US</span></span>
            {aboutData.map((abt) => (
                <div className="about-box">
                    <div className="a-left">
                        <h1 className="name">{abt.name}</h1>

                        <p className="info">{abt.info}</p>
                    </div>

                    <div className="a-right">
                        <img src={abt.image} alt="" className="a-photo" />
                    </div>
                </div>))}
        </div>
    )
}
