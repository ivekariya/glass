import React from "react";

const Promotion = () => {
    return (
        <>
            <div className="promotion-main">
                <div className="container">
                    <div className="promotion-main-inner">
                        <div className="item">
                            <div className="item-inner">
                                <a href="#"><img src="assets/img/add-1.jpg" alt="" /></a>
                                <div className="text">
                                    <h2>Perfect <span>opticals</span></h2>
                                    <p>For Kids</p>
                                </div>
                            </div>
                        </div>
                        <div className="item-2">
                            <div className="item-above">
                                <div className="item-above-inner inner">
                                    <a href="#">
                                        <img src="assets/img/add-2.jpg" alt="" />
                                    </a>
                                    <div className="text">
                                        <h2>Looking <span>Good</span></h2>
                                        <p>Do not Miss!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item-below">
                                <div className="item-below-inner inner">
                                    <a href="#">
                                        <img src="assets/img/add-3.jpg" alt="" />
                                    </a>
                                    <div className="text">
                                        <h2>New <span>Sunglasses</span></h2>
                                        <p>Shop with Us</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="item">
                            <div className="item-inner">
                                <a href="#"><img src="assets/img/add-4.jpg" alt="" /></a>
                                <div className="text">
                                    <h2><span>Professional</span> Look</h2>
                                    <p>For Women</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Promotion;