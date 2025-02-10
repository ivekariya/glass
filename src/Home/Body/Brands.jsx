import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Brands = () => {
    const options = {
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            431:{
                items: 3
            },
            641: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    }
    return (
        <>
            <div className="brand-section-main">
                <div className="container">
                    <div className="brand-section-main-inner">
                        <ul className="owl-carousel owl-theme brand">
                            <OwlCarousel className='owl-theme' loop margin={10} {...options}>
                                <li className="item"><a href="#"><img src="assets/img/3.png" alt="" /></a></li>
                                <li className="item"><a href="#"><img src="assets/img/4.png" alt="" /></a></li>
                                <li className="item"><a href="#"><img src="assets/img/5.png" alt="" /></a></li>
                                <li className="item"><a href="#"><img src="assets/img/6.png" alt="" /></a></li>
                                <li className="item"><a href="#"><img src="assets/img/7.png" alt="" /></a></li>
                            </OwlCarousel>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Brands;