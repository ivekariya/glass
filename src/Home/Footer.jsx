import React from "react";
import $ from 'jquery';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
const Footer = () => {
   
    function getItem(label, key, children, type) {
        return {
            key,
            children,
            label,
            type,
        };
    }
    const items = [
        getItem(' Contact Us', 'sub1', [
            getItem('Glasses 1-2 U 5th, Suit 124 Los angeles United States', '1'),
            getItem('Phone: (123) 4567-890', '2'),
            getItem('admin@gmail.com', '3'),
        ]),
        getItem('Products', 'sub2', [
            getItem('Prices drop', '4'),
            getItem('New products', '5'),
            getItem('Best sales', '6'),
            getItem('Stores', '7'),
            getItem('My account', '8'),
        ]),
        // {
        //     type: 'divider',
        // },
        getItem('Our company', 'sub4', [
            getItem('Delivery', '9'),
            getItem('Legal Notice', '10'),
            getItem('About us', '11'),
            getItem('Secure payment', '12'),
            getItem('Sitemap', '13'),
        ]),
    ];
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <>
            <div className="footer-main">
                <div className="footer-main-inner">
                    <div className="footer-top">
                        <div className="container">
                            <div className="footer-top-inner">
                                <div className="top">
                                    <div className="heading">
                                        <p id="block-newsletter-label" className="col-xs-12">Sign Up For Newsletter</p>
                                    </div>
                                </div>
                                <div className="info-block">
                                    <form action="" method="get">
                                        <div className="info">
                                            <div className="email">
                                                <input type="email" name="email" placeholder="enter your email..." />
                                            </div>
                                            <div className="sub">
                                                <input type="submit" value="subscribe" />
                                                <input type="submit" value="ok" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="footer-middel-main">
                            <div className="container">
                                <div className="footer-middel-inner">
                                    <div className="item">
                                        <div className="item-inner">
                                            <h3>
                                                Contact Us
                                            </h3>
                                            <ul>
                                                <li className="content">
                                                    <span>Glasses<br />1-2 U 5th, Suit 124 Los angeles<br />United States</span>
                                                </li>
                                                <li className="content">
                                                    <span>
                                                        Phone: <a href="tel:(123) 4567-890">(123) 4567-890</a>
                                                    </span>
                                                </li>
                                                <li className="content email">
                                                    <span>
                                                        <a href="mailto:admin@gmail.com" className="dropdown">admin@gmail.com</a>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="link">
                                        <div className="item">
                                            <div className="item-inner">
                                                <h3>
                                                    Products
                                                </h3>
                                                <ul>

                                                    <li>
                                                        <a href="#" title="Our special products">
                                                            Prices drop
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Our new products">
                                                            New products
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Our best sales">
                                                            Best sales
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">
                                                            Stores
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">
                                                            My account
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-inner">
                                                <h3>
                                                    Our company
                                                </h3>
                                                <ul>

                                                    <li>
                                                        <a href="#" title="Our terms and conditions of delivery">
                                                            Delivery
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Legal notice">
                                                            Legal Notice
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link to="/About" title="Learn more about us">
                                                            About us
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Our secure payment method">
                                                            Secure payment
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title=" Lost ? Find what your are looking for">
                                                            Sitemap
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-midel-inner-media">
                                    <Menu
                                        onClick={onClick}
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        mode="inline"
                                        items={items}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="container">
                                <div className="footer-bottom-inner">
                                    <p className="copyright">
                                        <a href="#">
                                            © 2024 - Ecommerce software by PrestaShop™
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="scrollTop">
                <span>
                    Top
                </span>
            </a>
        </>
    );
}
export default Footer;