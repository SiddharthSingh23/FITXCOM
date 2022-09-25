import React from 'react'
import './Download.css'
import tick from "../../assets/whiteTick.png"

export default function Download() {
    return (
        <div className="Download" id='download'>
            <div className="left">

                <h1 className="heading">FITXCOM FITNESS TRACKING APP</h1>

                <div className="details">
                    <p className="detail"> <img src={tick} alt="" />
                        DAILY WEIGHT TRACKING</p>

                    <p className="detail"><img src={tick} alt="" />
                        WORKOUT & DIET PLANS</p>

                    <p className="detail"><img src={tick} alt="" />
                        WEEKLY & MONTHLY ANALYSIS</p>
                </div>

                <div>
                    <span onClick={() => window.open("https://play.google.com/store/apps/details?id=com.fitxcom.fitxcom")}
                    className="dbtn">DOWNLOAD APP</span>
                    
                    <span onClick={() => window.open("https://www.instagram.com/fitxcommunity/")}
                        className="fbtn">FOLLOW US</span>
                </div>
            </div>

            <div className="right">
                <img src="/app.png" alt="" className="app-photo" />
            </div>
        </div>
    )
}
