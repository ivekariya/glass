import React from "react";
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Items = () => {
    return (
        <>
            <div className="products-main">
                <div className="container">
                    <div className="products-main-inner">
                        <div className="title">
                            <span>Our Products</span>
                        </div>
                        <div className="containt">
                            <div className="item">
                                <div className="item-inner">
                                    <div className="image">
                                        <Link to="/Product">
                                            <img src="assets/img/vincent-chase-online-glasses.jpg" alt="" />

                                            <ul className="products-flags">
                                                <li className="product-flag on-sale">On sale!</li>
                                                <li className="product-flag discount">-12%</li>
                                            </ul>

                                            <div className="hover">
                                                <div className="icon">
                                                    <div className="icon-1">
                                                        <a href="#"><FaEye /></a>
                                                    </div>
                                                    <div className="icon-2">
                                                        <a href="#"><FaShoppingCart /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="text">
                                        <h3><a href="#">Vincent Chase Online...</a></h3>
                                        <span className="price">$87.12</span>
                                        <span className="reguler-price">$99.00</span>
                                    </div>

                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="image">
                                        <Link to="/Product">
                                            <img src="assets/img/tortoise-full-rim-round-sunglasses.jpg" alt="" />

                                            <ul className="products-flags">
                                                <li className="product-flag discount single">-18%</li>
                                            </ul>

                                            <div className="hover">
                                                <div className="icon">
                                                    <div className="icon-1">
                                                        <a href="#"><FaEye /></a>
                                                    </div>
                                                    <div className="icon-2">
                                                        <a href="#"><FaShoppingCart /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="text">
                                        <h3><a href="#">Tortoise Full Rim...</a></h3>
                                        <span className="price">$163.18</span>
                                        <span className="reguler-price">$199.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="image">
                                        <Link to="/Product">
                                            <img src="assets/img/full-rim-round-eyeglasses.jpg" alt="" />

                                            <ul className="products-flags">
                                                <li className="product-flag on-sale">On sale!</li>
                                                <li className="product-flag discount">-25%</li>
                                            </ul>

                                            <div className="hover">
                                                <div className="icon">
                                                    <div className="icon-1">
                                                        <a href="#"><FaEye /></a>
                                                    </div>
                                                    <div className="icon-2">
                                                        <a href="#"><FaShoppingCart /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="text">
                                        <h3><a href="#">Full Rim Round Eyeglasses</a></h3>
                                        <span className="price">$224.25</span>
                                        <span className="reguler-price">$299.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="image">
                                        <Link to="/Product">
                                            <img src="assets/img/leopard-print-glasses.jpg" alt="" />

                                            <ul className="products-flags">
                                                <li className="product-flag discount single">-10%</li>
                                            </ul>

                                            <div className="hover">
                                                <div className="icon">
                                                    <div className="icon-1">
                                                        <a href="#"><FaEye /></a>
                                                    </div>
                                                    <div className="icon-2">
                                                        <a href="#"><FaShoppingCart /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="text">
                                        <h3><a href="#">leopard Print Glasses</a></h3>
                                        <span className="price">$224.10</span>
                                        <span className="reguler-price">$249.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="image">
                                        <Link to="/Product">
                                            <img src="assets/img/black-square-men-eyeglasses.jpg" alt="" />

                                            <ul className="products-flags">
                                                <li className="product-flag on-sale">On sale!</li>
                                                <li className="product-flag discount">-30%</li>
                                            </ul>

                                            <div className="hover">
                                                <div className="icon">
                                                    <div className="icon-1">
                                                        <a href="#"><FaEye /></a>
                                                    </div>
                                                    <div className="icon-2">
                                                        <a href="#"><FaShoppingCart /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="text">
                                        <h3><a href="#">Black Square Men...</a></h3>
                                        <span className="price">$202.30</span>
                                        <span className="reguler-price">$289.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="image">
                                        <Link to="/Product">
                                            <img src="assets/img/vincent-chase-essentials-glasses.jpg" alt="" />

                                            <ul className="products-flags">
                                                <li className="product-flag discount single">-15%</li>
                                            </ul>

                                            <div className="hover">
                                                <div className="icon">
                                                    <div className="icon-1">
                                                        <a href="#"><FaEye /></a>
                                                    </div>
                                                    <div className="icon-2">
                                                        <a href="#"><FaShoppingCart /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="text">
                                        <h3><a href="#">Vincent Chase...</a></h3>
                                        <span className="price">$237.15</span>
                                        <span className="reguler-price">$279.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="image">
                                        <Link to="/Product">
                                            <img src="assets/img/gun-metal-round-rimmed-eyeglasses.jpg" alt="" />

                                            <ul className="products-flags">
                                                <li className="product-flag discount single">-18%</li>
                                            </ul>

                                            <div className="hover">
                                                <div className="icon">
                                                    <div className="icon-1">
                                                        <a href="#"><FaEye /></a>
                                                    </div>
                                                    <div className="icon-2">
                                                        <a href="#"><FaShoppingCart /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="text">
                                        <h3><a href="#">Gun metal Round Rimmed...</a></h3>
                                        <span className="price">$286.18</span>
                                        <span className="reguler-price">$349.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="image">
                                        <Link to="/Product">
                                            <img src="assets/img/wizard-quality-round-frame-glasses.jpg" alt="" />

                                            <ul className="products-flags">
                                                <li className="product-flag on-sale">On sale!</li>
                                                <li className="product-flag discount">-10%</li>
                                            </ul>

                                            <div className="hover">
                                                <div className="icon">
                                                    <div className="icon-1">
                                                        <a href="#"><FaEye /></a>
                                                    </div>
                                                    <div className="icon-2">
                                                        <a href="#"><FaShoppingCart /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="text">
                                        <h3><a href="#">Wizard Quality Round...</a></h3>
                                        <span className="price">$286.18</span>
                                        <span className="reguler-price">$399.00</span>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div >

        </>
    );
}

export default Items;