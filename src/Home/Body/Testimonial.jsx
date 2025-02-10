import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Testimonial = () => {
    const options = {
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
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
            <div className="testimonial-main">
                <div className="container">
                    <div className="testimonial-main-inner">
                        <div className="title">
                            <span>Testimonials</span>
                        </div>
                        <div className="row">
                            <div className="testimonial-block">
                                <div className="content-left">
                                    <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
                                        <div className="item">
                                            <div className="item-inner">
                                                <div className="content">
                                                    <img src="assets/img/client1.jpg" alt="" />
                                                    <div className="profile">
                                                        <div className="icon"><FaQuoteLeft /></div>
                                                        <h4>Joh Doe -</h4>
                                                        <p>( Jr. Web Designer )</p>
                                                    </div>
                                                </div>
                                                <div className="info">
                                                    <p>"Lorem ipsum dolor sit amet, consecttur adi- pisicing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                        quis nostrud exercitation."</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-inner">
                                                <div className="content">
                                                    <img src="assets/img/client2.jpg" alt="" />
                                                    <div className="profile">
                                                        <div className="icon"><FaQuoteLeft /></div>
                                                        <h4>Wed Censtoriya -</h4>
                                                        <p>( Sr. Service Manager )</p>
                                                    </div>
                                                </div>
                                                <div className="info">
                                                    <p>"Lorem ipsum dolor sit amet, consecttur adi- pisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                                <div className="content-right">
                                    <a href="#">
                                        <img src="assets/img/testimonial.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Testimonial;