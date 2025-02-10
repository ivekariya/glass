import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = () => {
    const options = {
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    }
    return (
        <>
            <OwlCarousel className='owl-theme poster' loop margin={10} nav {...options}>
                <div className='item'>
                    <div className="poster-main">
                        <div className="poster-main-inner">
                            <img src="assets/img/sample-1.jpg" alt="" />
                            <div className="container container-move">
                                <div className="text">
                                    <h2>
                                        Eyeglass Frames
                                        <strong>Men Collection</strong>
                                        <p>
                                            Get Upto 50% <span>Off</span>
                                        </p>
                                    </h2>
                                    <a href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="poster-main">
                        <div className="poster-main-inner">
                            <img src="assets/img/sample-2.jpg" alt="" />
                            <div className="container container-move">
                                <div className="text text-2">
                                    <h2>
                                        Glasses For
                                        <strong>Men & Women</strong>
                                        <p>
                                            Get Upto 30% <span>Off</span>
                                        </p>
                                    </h2>
                                    <a href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="poster-main">
                        <div className="poster-main-inner">
                            <img src="assets/img/sample-3.jpg" alt="" />
                            <div className="container container-move">
                                <div className="text">
                                    <h2>
                                        Selection Glasses
                                        <strong>Designer Styles</strong>
                                        <p>
                                            Get Upto 20% <span>Off</span>
                                        </p>
                                    </h2>
                                    <a href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>

        </>

    );
}
export default Banner;