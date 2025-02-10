import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { RiGiftFill } from "react-icons/ri";
import { FaRotate } from "react-icons/fa6";

const Services = () => {
    return (
        <>
            <div className="service-section">
                <div className="container">
                    <div className="service-section-inner">
                        <div className="item">
                            <div className="item-inner">
                                <div className="icon"><FaPaperPlane /></div>
                                <div className="containt">
                                    <strong>Free Delivery</strong>
                                    <p>Order Over $99</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-inner">
                                <div className="icon"><RiGiftFill /></div>
                                <div className="containt">
                                    <strong>Gift Voucher</strong>
                                    <p>Order Over $99</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-inner">
                                <div className="icon"><FaRotate /></div>
                                <div className="containt">
                                    <strong>Easy Return</strong>
                                    <p>Order Over $99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;