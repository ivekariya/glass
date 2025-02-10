import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Product_page = () => {
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
                items: 3
            },
            1000: {
                items: 4
            }
        }
    }
    return (
        <>
            <div className="product-page">
                <div className="container">
                    <div className="product-page-inner">
                        <div className="path">
                            <ul>
                                <li><a href="glass.html"><span>Home</span></a></li>
                                <li><a href="contact-us.html"><span> Tortoise Full Rim Round Sunglasses </span></a></li>
                            </ul>
                        </div>
                        <div className="contant-top">
                            <div className="left-block">
                                <div className="product-img">
                                    <a href="#">
                                        <img src="assets/img/tortoise-full-rim-round-sunglasses.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="other-products">
                                    <div className="products-inner">
                                        <OwlCarousel className='owl-theme product' loop margin={10} nav {...options}>
                                            <div className="item current">
                                                <a href="#">
                                                    <img src="assets/img/tortoise-full-rim-round-sunglasses.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="item">
                                                <a href="#">
                                                    <img src="assets/img/vincent-chase-essentials-glasses.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="item">
                                                <a href="#">
                                                    <img src="assets/img/full-rim-round-eyeglasses.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="item">
                                                <a href="#">
                                                    <img src="assets/img/leopard-print-glasses.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="item">
                                                <a href="#">
                                                    <img src="assets/img/black-square-men-eyeglasses.jpg" alt="" />
                                                </a>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                            <div className="right-block">
                                <div className="heading">Tortoise Full Rim Round Sunglasses</div>
                                <div className="product-price">
                                    <div className="reguler-price">$199.00</div>
                                    <div className="current-price">
                                        <span className="price">$163.18</span>
                                        <span className="discount">Save 18%</span>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <div className="product-desc">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><ul><li>Ut enim ad minima veniam, quis nostrum exercitationem.</li><li>Nnisi ut aliquid ex ea commodi consequatur.</li><li>Quis autem vel eum iure reprehenderit qui in ea voluptate</li><li>Velit esse quam nihil molestiae consequatur, vel illum.</li><li>Dolorem eum fugiat quo voluptas nulla pariatur.</li></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product_page;