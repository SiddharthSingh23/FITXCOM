import React from 'react'
import './Scroll.css'
import Marquee from "react-fast-marquee";

import i1 from '../../assets/scroll/immunity.png';
import i2 from '../../assets/scroll/kidney.png';
import i3 from '../../assets/scroll/balanced.png';
import i4 from '../../assets/scroll/hormonal.png';
import i5 from '../../assets/scroll/gut.png';
// import i6 from '../../assets/scroll/preventive.png';
import i7 from '../../assets/scroll/diabetes.png';
import i8 from '../../assets/scroll/rejuvination.png';
import i9 from '../../assets/scroll/wellness.png';
import i10 from '../../assets/scroll/thyroid.png';
import i11 from '../../assets/scroll/sports.png';
// import i12 from '../../assets/scroll/satvik.png';
// import i13 from '../../assets/scroll/skin.png';
import i14 from '../../assets/scroll/holistic.png';

export default function Scroll() {
    return (
        <div class="Scroll">

            <Marquee speed={60} gradient={false} pauseOnHover={true} pauseOnClick={true}
                className='edit'>
                <div className="orb">
                    <img src={i1} alt="" />
                    <span className='orb-text'>IMMUNITY</span>
                </div>

                <div className="orb">
                    <img src={i2} alt="" />
                    <span className='orb-text'>KIDNEY</span>
                </div>

                <div className="orb">
                    <img src={i3} alt="" />
                    <span className='orb-text'>BALANCED</span>
                </div>

                <div className="orb">
                    <img src={i4} alt="" />
                    <span className='orb-text'>HORMONAL</span>
                </div>

                <div className="orb">
                    <img src={i5} alt="" />
                    <span className='orb-text'>GUT</span>
                </div>

                <div className="orb">
                    <img src={i7} alt="" />
                    <span className='orb-text'>DIABETES</span>
                </div>

                <div className="orb">
                    <img src={i8} alt="" />
                    <span className='orb-text'>REJUVINATION</span>
                </div>

                <div className="orb">
                    <img src={i9} alt="" />
                    <span className='orb-text'>WELLNESS</span>
                </div>

                <div className="orb">
                    <img src={i10} alt="" />
                    <span className='orb-text'>THYROID</span>
                </div>

                <div className="orb">
                    <img src={i11} alt="" />
                    <span className='orb-text'>SPORTS</span>
                </div>

                <div className="orb">
                    <img src={i14} alt="" />
                    <span className='orb-text'>HOLISTIC</span>
                </div>

                {/* <img src={i2} alt="" className="orb" />
                <img src={i3} alt="" className="orb" />
                <img src={i4} alt="" className="orb" />
                <img src={i5} alt="" className="orb" /> */}
                {/* <img src={i6} alt="" className="orb" /> */}
                {/* <img src={i7} alt="" className="orb" />
                <img src={i8} alt="" className="orb" />
                <img src={i9} alt="" className="orb" />
                <img src={i10} alt="" className="orb" />
                <img src={i11} alt="" className="orb" /> */}
                {/* <img src={i12} alt="" className="orb" /> */}
                {/* <img src={i13} alt="" className="orb" /> */}
                {/* <img src={i14} alt="" className="orb" /> */}
            </Marquee>

        </div>
    )
}
