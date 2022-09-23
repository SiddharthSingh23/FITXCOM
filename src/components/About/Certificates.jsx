import React from 'react'
import './Certificates.css'
import c1 from "../../assets/certificates/c1.png"
import c2 from "../../assets/certificates/c2.png"
import c3 from "../../assets/certificates/c3.png"
import c4 from "../../assets/certificates/c4.png"
import c5 from "../../assets/certificates/c5.jpg"
import c6 from "../../assets/certificates/c6.jpg"

export const Certificates = () => {
    return (
        <div className='Certificates'>

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={c1} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={c2} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={c3} alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={c4} alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={c5} alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={c6} alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    <span >Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                    <span >Next</span>
                </a>
            </div>

            {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/c1.png" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/logo2.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/logo.png" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div> */}
        </div>
    )
}
