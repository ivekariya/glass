import React, { useState } from 'react';
import $ from 'jquery';
import { PlusOutlined } from '@ant-design/icons';
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { } from 'antd';
import { GoTriangleDown } from "react-icons/go";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Checkbox } from 'antd';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {

    const { Option } = Select;
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    dayjs.extend(customParseFormat);
    const dateFormat = 'YYYY-MM-DD';

    return (
        <>
            <div className="header-main">
                <div className="header-main-inner">
                    <div className="header-top">
                        <div className="container">
                            <div className="header-top-inner">
                                <div className="left-block">
                                    <div className="crrency-selector">
                                        <div className="drop-down" id='crrency'>
                                            <button type="button">
                                                <span className="usd">USD $</span>
                                                <i className="fa-solid fa-caret-down"></i>
                                            </button>
                                            <ul className="dropdown-menu" id='menu'>
                                                <li>
                                                    <a title="Euro" rel="nofollow" href="#" className="item">EUR €</a>
                                                </li>
                                                <li className="current">
                                                    <a title="US Dollar" rel="nofollow" href="#" className="item">USD $</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="language-selector">
                                        <div className="drop-down language" id='language'>
                                            <button type="button">
                                                <span className="usd" >English</span>
                                                <i className="fa-solid fa-caret-down"></i>
                                            </button>
                                            <ul className="dropdown-menu" id='menu-1'>
                                                <li>
                                                    <a title="Euro" rel="nofollow" href="#" className="item">
                                                       <img src="assets/img/1.jpg" alt="" /> English</a>
                                                </li>
                                                <li className="current">
                                                    <a title="US Dollar" rel="nofollow" href="#" className="item">
                                                    <img src="assets/img/2.jpg" alt="" />   Español
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-block">
                                    <div className="user-info">
                                        <div className="info">
                                            <a className="login link" href="#">
                                                <span className="user-singin"></span>
                                                <span className="lnk">Sign In</span>
                                            </a>
                                            <a className="register link" href="#">
                                                <span className="user-singin"></span>
                                                <span className="lnk">
                                                    <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                                                        Creat an Account
                                                    </Button>
                                                    <Drawer
                                                        title="Create an account"
                                                        width={720}
                                                        onClose={onClose}
                                                        open={open}
                                                        styles={{
                                                            body: {
                                                                paddingBottom: 80,
                                                            },
                                                        }}
                                                        extra={
                                                            <Space>
                                                                <Button onClick={onClose}>Cancel</Button>
                                                                <Button onClick={onClose} type="primary">
                                                                    Submit
                                                                </Button>
                                                            </Space>
                                                        }
                                                    >
                                                        <div className="create-account-page">
                                                            <p>Already have an account? <a href="https://demo4techies.com/prestashop/glasses/en/login">Log in instead!</a></p>
                                                            <form action="" method='get'>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className='lable'><label htmlFor="">Social title </label></td>
                                                                        <td className='input'><input type="radio" name="Mr." className="radio" /><span>Mr.</span>
                                                                            <input type="radio" name="Mrs." className="radio" /><span>Mrs.</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='lable'><label htmlFor="">First name </label></td>
                                                                        <td className='input'><input type="text" name="" className="text" />
                                                                            <span className="form-comment">
                                                                                Only letters and the dot (.) character,<br />followed by a space, are allowed.
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='lable'><label htmlFor="">Last name </label></td>
                                                                        <td className='input'><input type="text" name="" className="text" />
                                                                            <span className="form-comment">
                                                                                Only letters and the dot (.) character, <br /> followed by a space, are allowed.
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='lable'><label htmlFor="">Email </label></td>
                                                                        <td className='input'><input type="text" name="" className="text" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='lable'><label htmlFor="">Password </label></td>
                                                                        <td className='input'>
                                                                            <Input.Password />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='lable'><label htmlFor="">Birthdate </label></td>
                                                                        <td className='input'>
                                                                            <DatePicker
                                                                                defaultValue={dayjs('2019-09-03', dateFormat)}
                                                                                minDate={dayjs('2019-08-01', dateFormat)}
                                                                                maxDate={dayjs('2020-10-31', dateFormat)}
                                                                            />
                                                                            <span className="optional">Optional</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='lable'></td>
                                                                        <td className='check'>
                                                                            <Checkbox onChange={onChange}>Receive offers from our partners</Checkbox>
                                                                            <Checkbox onChange={onChange}>Customer data privacy<br /></Checkbox>
                                                                            <em>The personal data you provide is used to answer queries, process orders or allow access to specific information. You have the right to modify and delete all the personal information found in the "My Account" page.</em>
                                                                            <Checkbox onChange={onChange}>Sign up for our newsletter</Checkbox>
                                                                            <Checkbox onChange={onChange}>I agree to the terms and conditions and the privacy policy</Checkbox>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </form>
                                                        </div>
                                                    </Drawer>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="cart">
                                        <div className="cart-info">
                                            <span className="cart-icon">
                                                <div className="icon"><BsFillHandbagFill /></div>
                                                <span className="lnk">My Cart </span>
                                                <p>0</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="container">
                            <div className="header-bottom-inner">
                                <div className="logo-media">
                                    <div className="menu-media">
                                        <div className="icon" id='bar'><FaBars /></div>
                                    </div>
                                    <div className="logo">
                                        <Link to="/">
                                            <img src="assets/img/logo-1643975052.png" alt="" />
                                        </Link>
                                    </div>
                                    <div className="info-icons">
                                        <div className="user-info">
                                            <div className="icon user">
                                                <a href="#"><FaUser /></a>
                                            </div>
                                            <div className="icon user-plus">
                                                <a href="#"><FaUserPlus /></a>
                                            </div>
                                        </div>
                                        <div className="icon cart">
                                            <a href="#"><BsFillHandbagFill /></a>
                                        </div>
                                    </div>
                                    <div className="menu-wrapper">
                                        <ul className="menu-top">
                                            <li className="head"><a href="/"><span>Home</span></a></li>
                                            <li className="head"><a href="#"><span>Shop <FaAngleDown /></span></a>
                                                <ul className="sub-menu-1">
                                                    <li className="title"><a href="#">Fashion <FaAngleDown /></a>
                                                        <ul className="submenu-inner-1 inner">
                                                            <li><a href="#">Men</a></li>
                                                            <li><a href="#">Children</a></li>
                                                            <li><a href="#">Women</a></li>
                                                            <li><a href="#">Accessories</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="title"><a href="#">Jewellery <FaAngleDown /></a>
                                                        <ul className="submenu-inner-2 inner">
                                                            <li><a href="#">Rings</a></li>
                                                            <li><a href="#">Bracelet</a></li>
                                                            <li><a href="#">Nacklaces</a></li>
                                                            <li><a href="#">Wedding Banda</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="title"><a href="#">Furniture <FaAngleDown /></a>
                                                        <ul className="submenu-inner-3 inner">
                                                            <li><a href="#">Living Room</a></li>
                                                            <li><a href="#">Kitchen</a></li>
                                                            <li><a href="#">Office</a></li>
                                                            <li><a href="#">Home Decore</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="title"><a href="#">Autoparts <FaAngleDown /></a>
                                                        <ul className="submenu-inner-4 inner">
                                                            <li><a href="#">Engine Parts</a></li>
                                                            <li><a href="#">Exhust parts</a></li>
                                                            <li><a href="#">Body Parts</a></li>
                                                            <li><a href="#">Brake Parts</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="head"><a href="#"><span>Electronics</span></a>
                                                <ul className="sub-menu-2">
                                                    <li className="title"><a href="#">Mobile <FaAngleDown /></a>
                                                        <ul className="submenu-inner-1 inner">
                                                            <li><a href="#">Apple</a></li>
                                                            <li><a href="#">BlackBarry</a></li>
                                                            <li><a href="#">Onepluse</a></li>
                                                            <li><a href="#">Sony</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="title"><a href="#">Camera <FaAngleDown /></a>
                                                        <ul className="submenu-inner-2 inner">
                                                            <li><a href="#">Lenses</a></li>
                                                            <li><a href="#">DSLR</a></li>
                                                            <li><a href="#">Tripods</a></li>
                                                            <li><a href="#">Accessories</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="head"><a href="#"><span>Sports & Books <FaAngleDown /></span></a>
                                                <ul className="sub-menu-3">
                                                    <li className="title"><a href="#">Sports
                                                        <FaAngleDown /></a>
                                                        <ul className="submenu-inner-1 inner">
                                                            <li><a href="#">Cricket</a></li>
                                                            <li><a href="#">Badminton</a></li>
                                                            <li><a href="#">Football</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="title"><a href="#">Books
                                                        <FaAngleDown />
                                                    </a>
                                                        <ul className="submenu-inner-2 inner">
                                                            <li><a href="#">Academics</a></li>
                                                            <li><a href="#">Literature</a></li>
                                                            <li><a href="#">Business</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="head"><a href="#"><span>Sale</span></a></li>
                                            <li className="head"><a href="/contact"><span>Contact Us</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="block-right">
                                    <div className="search" id='search'>
                                        <span>
                                            <FaSearch />
                                        </span>
                                        <div className="search-toggle" id='search-toggle'>
                                            <form action="" method='post'>
                                                <input type="text" placeholder='Search entire store hear'/>
                                                <button type='button'><FaSearch /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="main-menu">
                                        <ul className="menu">
                                            <li className="head"><Link to="/"><span>Home</span></Link></li>
                                            <li className="head"><Link to="/Shop"><span>Shop</span></Link>
                                                <ul className="sub-menu-1">
                                                    <li className="title"><a href="#">Fashion <FaAngleDown /></a>
                                                        <ul className="submenu-inner-1 inner">
                                                            <li><a href="#">Men</a></li>
                                                            <li><a href="#">Children</a></li>
                                                            <li><a href="#">Women</a></li>
                                                            <li><a href="#">Accessories</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="title"><a href="#">Jewellery <FaAngleDown /></a>
                                                        <ul className="submenu-inner-2 inner">
                                                            <li><a href="#">Rings</a></li>
                                                            <li><a href="#">Bracelet</a></li>
                                                            <li><a href="#">Nacklaces</a></li>
                                                            <li><a href="#">Wedding Banda</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="title"><a href="#">Furniture <FaAngleDown /></a>
                                                        <ul className="submenu-inner-3 inner">
                                                            <li><a href="#">Living Room</a></li>
                                                            <li><a href="#">Kitchen</a></li>
                                                            <li><a href="#">Office</a></li>
                                                            <li><a href="#">Home Decore</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="title"><a href="#">Autoparts <FaAngleDown /></a>
                                                        <ul className="submenu-inner-4 inner">
                                                            <li><a href="#">Engine Parts</a></li>
                                                            <li><a href="#">Exhust parts</a></li>
                                                            <li><a href="#">Body Parts</a></li>
                                                            <li><a href="#">Brake Parts</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="head"><a href="#"><span>Electronics</span></a>
                                                <ul className="sub-menu-2">
                                                    <li className="title"><a href="#">Mobile <FaAngleDown /></a>
                                                        <ul className="submenu-inner-1 inner">
                                                            <li><a href="#">Apple</a></li>
                                                            <li><a href="#">BlackBarry</a></li>
                                                            <li><a href="#">Onepluse</a></li>
                                                            <li><a href="#">Sony</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="title"><a href="#">Camera <FaAngleDown /></a>
                                                        <ul className="submenu-inner-2 inner">
                                                            <li><a href="#">Lenses</a></li>
                                                            <li><a href="#">DSLR</a></li>
                                                            <li><a href="#">Tripods</a></li>
                                                            <li><a href="#">Accessories</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="head"><a href="#"><span>Sports & Books</span></a>
                                                <ul className="sub-menu-3">
                                                    <li className="title"><a href="#">Sports
                                                        <FaAngleDown /></a>
                                                        <ul className="submenu-inner-1 inner">
                                                            <li><a href="#">Cricket</a></li>
                                                            <li><a href="#">Badminton</a></li>
                                                            <li><a href="#">Football</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="title"><a href="#">Books
                                                        <FaAngleDown />
                                                    </a>
                                                        <ul className="submenu-inner-2 inner">
                                                            <li><a href="#">Academics</a></li>
                                                            <li><a href="#">Literature</a></li>
                                                            <li><a href="#">Business</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="head"><a href="#"><span>Sale</span></a></li>
                                            <li className="head"><Link to="/Contact"><span>Contact Us</span></Link></li>
                                        </ul>
                                    </div>
                                    <div className="search-block">
                                        <div className="search-main">
                                            <form action="" method='get'>
                                                <input type="text" placeholder='Search entire store here' />
                                                <button type='button'><FaSearch /></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Header;