import React from "react";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

export const Hero = () => {
    const transition = { duration: 3, type: "spring" };
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero">
            <div className="left-h">
                {/* the best ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? "178px" : '238px' }}
                        whileInView={{ left: "8px" }}
                        transition={{ ...transition, type: "tween" }}
                    ></motion.div>
                    <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>
                {/* Hero text */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and
                            live up your life to fullest
                        </span>
                    </div>
                </div>

                {/* experience figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={5} start={0} delay={1} preFix="+" />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={120} start={50} delay={4} preFix="+" />
                        </span>
                        <span>Members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={7} start={0} delay={1} preFix="+" />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* hero buttons */}
                <div className="hero-buttons">
                    <a className="btn" target="_blank" rel="noreferrer"
                        href="https://surveyheart.com/form/62f1ef8ebc9d6c2191d291b5">
                        Free Appointment
                    </a>
                    <a className="btn" target="_blank" rel="noreferrer"
                        href="https://surveyheart.com/form/62f1f52d25cc4221724a6320">
                        Join Us
                    </a>
                </div>
            </div>

            {/* Right Side */}
            <div className="right-h">

                {/* heart rate */}
                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "30rem" }}
                    transition={transition}
                    className="heart-rate"
                >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* calories */}
                <motion.div
                    initial={{ right: "52rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories"
                >
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};