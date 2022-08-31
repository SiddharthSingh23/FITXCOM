import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png';
import whiteTick from "../../assets/whiteTick.png";
import { motion } from "framer-motion";

export const Programs = () => {
    return (
        <div className="Programs" id='programs'>

            {/* programs header */}
            <div className="programs-header">
                <span>
                    Explore our
                    <span className="stroke-text"> Programs </span>
                </span>
            </div>


            {/* programs-categories */}
            <div className="prgoram-categories">
                {programsData.map((program) => (
                    <motion.div
                        onClick={()=> window.open(program.link)}
                        whileHover={{ background: 'var(--planCard)', cursor: 'pointer' }}
                        transition={{ type: 'spring' }}
                        className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="features">
                            {program.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
