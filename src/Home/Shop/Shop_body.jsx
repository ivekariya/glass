import React from "react";
import { FaPlus } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

const Shop_body = () => {

    return (

        <>
            <div class="shop-main">
                <div class="container">
                    <div class="shop-main-inner">
                        <div class="path">
                            <ul>
                                <li><a href="glass.html"><span>Home</span></a></li>
                                <li><a href="contact-us.html"><span>Shop</span></a></li>
                            </ul>
                        </div>
                        <div class="shop-content">
                            <div class="block-left">
                                <div class="shop-menu">
                                    <div className="head"><a href="#"><span>Shop</span></a></div>
                                    <ul className="sub-1">
                                        <li className="title"><a href="#">Fashion <div className="icon" data-id="#shop1"><div className="plus" id="plus1"><FaPlus /></div><div className="minus" id="minus1"><FaMinus /></div></div></a>
                                            <ul className="sxub-inner-1 inner" id="shop1">
                                                <li><a href="#">Men</a></li>
                                                <li><a href="#">Children</a></li>
                                                <li><a href="#">Women</a></li>
                                                <li><a href="#">Accessories</a></li>
                                            </ul>
                                        </li>
                                        <li className="title"><a href="#">Jewellery <div className="icon" data-id="#shop2"><div className="plus" id="plus2"><FaPlus /></div><div className="minus" id="minus2"><FaMinus /></div></div></a>
                                            <ul className="sub-inner-2 inner" id="shop2">
                                                <li><a href="#">Rings</a></li>
                                                <li><a href="#">Bracelet</a></li>
                                                <li><a href="#">Nacklaces</a></li>
                                                <li><a href="#">Wedding Banda</a></li>
                                            </ul>
                                        </li>
                                        <li className="title"><a href="#">Furniture <div className="icon" data-id="#shop3"><div className="plus" id="plus3"><FaPlus /></div><div className="minus" id="minus3"><FaMinus /></div></div></a>
                                            <ul className="sub-inner-3 inner" id="shop3">
                                                <li><a href="#">Living Room</a></li>
                                                <li><a href="#">Kitchen</a></li>
                                                <li><a href="#">Office</a></li>
                                                <li><a href="#">Home Decore</a></li>
                                            </ul>
                                        </li>
                                        <li className="title"><a href="#">Autoparts <div className="icon" data-id="#shop4"><div className="plus" id="plus4"><FaPlus /></div><div className="minus" id="minus4"><FaMinus /></div></div></a>
                                            <ul className="sub-inner-4 inner" id="shop4">
                                                <li><a href="#">Engine Parts</a></li>
                                                <li><a href="#">Exhust parts</a></li>
                                                <li><a href="#">Body Parts</a></li>
                                                <li><a href="#">Brake Parts</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="advertising-block">
                                    <a href="#">
                                        <img src="assets/img/advertising.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="block-right">
                                <div className="block-right-inner">
                                    <div className="card-block">
                                        <div className="card-inner">
                                            <div className="card-cover">
                                                <img src="assets/img/Shop.png" alt="" />
                                            </div>
                                            <div className="card-content">
                                                <h1 class="h1">Shop</h1>
                                                <div id="category-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-block">
                                        <div className="product-list">
                                            <div className="disply-count">
                                                <div className="disply-mode">
                                                    <span className="grid"><IoGrid /></span>
                                                    <span className="list"><FaThList /></span>
                                                </div>
                                                <div className="totle-product">
                                                    <p>There are 12 products.</p>
                                                </div>
                                            </div>
                                            <div className="short-by">
                                                <div className="content">Sort by:</div>
                                                <div className="order">

                                                    <button class="btn-unstyle select-title" rel="nofollow" id="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Relevance <GoTriangleDown />
                                                    </button>
                                                    <div class="dropdown-menu" id="dropdown-toggle">
                                                        <a rel="nofollow" href="#" class="select-list js-search-link">
                                                            Best sellers
                                                        </a>
                                                        <a rel="nofollow" href="#" class="select-list current js-search-link">
                                                            Relevance
                                                        </a>
                                                        <a rel="nofollow" href="#" class="select-list js-search-link">
                                                            Name, A to Z
                                                        </a>
                                                        <a rel="nofollow" href="#" class="select-list js-search-link">
                                                            Name, Z to A
                                                        </a>
                                                        <a rel="nofollow" href="#" class="select-list js-search-link">
                                                            Price, low to high
                                                        </a>
                                                        <a rel="nofollow" href="#" class="select-list js-search-link">
                                                            Price, high to low
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="products-main">
                                            <div class="products-main-inner">
                                                <div class="containt">
                                                    <div class="item">
                                                        <div class="item-inner">
                                                            <div class="image">
                                                                <a href="#">
                                                                    <img src="assets/img/vincent-chase-online-glasses.jpg" alt="" />
                                                                    <ul class="products-flags">
                                                                        <li class="product-flag on-sale">On sale!</li>
                                                                        <li class="product-flag discount">-12%</li>
                                                                    </ul>
                                                                    <div class="hover">
                                                                        <div class="icon">
                                                                            <div class="icon-1">
                                                                                <a href="#"><FaEye /></a>
                                                                            </div>
                                                                            <div class="icon-2">
                                                                                <a href="#"><FaShoppingCart /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="text">
                                                                <h3><a href="#">Vincent Chase Online...</a></h3>
                                                                <span class="price">$87.12</span>
                                                                <span class="reguler-price">$99.00</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <div class="item-inner">
                                                            <div class="image">
                                                                <a href="#">
                                                                    <img src="assets/img/tortoise-full-rim-round-sunglasses.jpg" alt="" />
                                                                    <ul class="products-flags">
                                                                        <li class="product-flag discount single">-18%</li>
                                                                    </ul>
                                                                    <div class="hover">
                                                                        <div class="icon">
                                                                            <div class="icon-1">
                                                                                <a href="#"><FaEye /></a>
                                                                            </div>
                                                                            <div class="icon-2">
                                                                                <a href="#"><FaShoppingCart /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="text">
                                                                <h3><a href="#">Tortoise Full Rim...</a></h3>
                                                                <span class="price">$163.18</span>
                                                                <span class="reguler-price">$199.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <div class="item-inner">
                                                            <div class="image">
                                                                <a href="#">
                                                                    <img src="assets/img/full-rim-round-eyeglasses.jpg" alt="" />
                                                                    <ul class="products-flags">
                                                                        <li class="product-flag on-sale">On sale!</li>
                                                                        <li class="product-flag discount">-25%</li>
                                                                    </ul>
                                                                    <div class="hover">
                                                                        <div class="icon">
                                                                            <div class="icon-1">
                                                                                <a href="#"><FaEye /></a>
                                                                            </div>
                                                                            <div class="icon-2">
                                                                                <a href="#"><FaShoppingCart /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="text">
                                                                <h3><a href="#">Full Rim Round Eyeglasses</a></h3>
                                                                <span class="price">$224.25</span>
                                                                <span class="reguler-price">$299.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <div class="item-inner">
                                                            <div class="image">
                                                                <a href="#">
                                                                    <img src="assets/img/leopard-print-glasses.jpg" alt="" />
                                                                    <ul class="products-flags">
                                                                        <li class="product-flag discount single">-10%</li>
                                                                    </ul>
                                                                    <div class="hover">
                                                                        <div class="icon">
                                                                            <div class="icon-1">
                                                                                <a href="#"><FaEye /></a>
                                                                            </div>
                                                                            <div class="icon-2">
                                                                                <a href="#"><FaShoppingCart /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="text">
                                                                <h3><a href="#">leopard Print Glasses</a></h3>
                                                                <span class="price">$224.10</span>
                                                                <span class="reguler-price">$249.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <div class="item-inner">
                                                            <div class="image">
                                                                <a href="#">
                                                                    <img src="assets/img/black-square-men-eyeglasses.jpg" alt="" />
                                                                    <ul class="products-flags">
                                                                        <li class="product-flag on-sale">On sale!</li>
                                                                        <li class="product-flag discount">-30%</li>
                                                                    </ul>
                                                                    <div class="hover">
                                                                        <div class="icon">
                                                                            <div class="icon-1">
                                                                                <a href="#"><FaEye /></a>
                                                                            </div>
                                                                            <div class="icon-2">
                                                                                <a href="#"><FaShoppingCart /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="text">
                                                                <h3><a href="#">Black Square Men...</a></h3>
                                                                <span class="price">$202.30</span>
                                                                <span class="reguler-price">$289.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <div class="item-inner">
                                                            <div class="image">
                                                                <a href="#">
                                                                    <img src="assets/img/vincent-chase-essentials-glasses.jpg" alt="" />
                                                                    <ul class="products-flags">
                                                                        <li class="product-flag discount single">-15%</li>
                                                                    </ul>
                                                                    <div class="hover">
                                                                        <div class="icon">
                                                                            <div class="icon-1">
                                                                                <a href="#"><FaEye /></a>
                                                                            </div>
                                                                            <div class="icon-2">
                                                                                <a href="#"><FaShoppingCart /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="text">
                                                                <h3><a href="#">Vincent Chase...</a></h3>
                                                                <span class="price">$237.15</span>
                                                                <span class="reguler-price">$279.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <div class="item-inner">
                                                            <div class="image">
                                                                <a href="#">
                                                                    <img src="assets/img/gun-metal-round-rimmed-eyeglasses.jpg" alt="" />
                                                                    <ul class="products-flags">
                                                                        <li class="product-flag discount single">-18%</li>
                                                                    </ul>
                                                                    <div class="hover">
                                                                        <div class="icon">
                                                                            <div class="icon-1">
                                                                                <a href="#"><FaEye /></a>
                                                                            </div>
                                                                            <div class="icon-2">
                                                                                <a href="#"><FaShoppingCart /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="text">
                                                                <h3><a href="#">Gun metal Round Rimmed...</a></h3>
                                                                <span class="price">$286.18</span>
                                                                <span class="reguler-price">$349.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <div class="item-inner">
                                                            <div class="image">
                                                                <a href="#">
                                                                    <img src="assets/img/wizard-quality-round-frame-glasses.jpg" alt="" />
                                                                    <ul class="products-flags">
                                                                        <li class="product-flag on-sale">On sale!</li>
                                                                        <li class="product-flag discount">-10%</li>
                                                                    </ul>
                                                                    <div class="hover">
                                                                        <div class="icon">
                                                                            <div class="icon-1">
                                                                                <a href="#"><FaEye /></a>
                                                                            </div>
                                                                            <div class="icon-2">
                                                                                <a href="#"><FaShoppingCart /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="text">
                                                                <h3><a href="#">Wizard Quality Round...</a></h3>
                                                                <span class="price">$286.18</span>
                                                                <span class="reguler-price">$399.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <div class="item-inner">
                                                            <div class="image">
                                                                <a href="#">
                                                                    <img src="assets/img/black-full-rim-eyeglasses.jpg" alt="" />
                                                                    <ul class="products-flags">
                                                                        <li class="product-flag discount single">-12%</li>
                                                                    </ul>
                                                                    <div class="hover">
                                                                        <div class="icon">
                                                                            <div class="icon-1">
                                                                                <a href="#"><FaEye /></a>
                                                                            </div>
                                                                            <div class="icon-2">
                                                                                <a href="#"><FaShoppingCart /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="text">
                                                                <h3><a href="#">Black Full Rim Eyeglasses</a></h3>
                                                                <span class="price">$342.32</span>
                                                                <span class="reguler-price">$389.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <div class="item-inner">
                                                            <div class="image">
                                                                <a href="#">
                                                                    <img src="assets/img/black-square-rimmed-eyeglasses.jpg" alt="" />
                                                                    <ul class="products-flags">
                                                                        <li class="product-flag on-sale">On sale!</li>
                                                                        <li class="product-flag discount">-20%</li>
                                                                    </ul>
                                                                    <div class="hover">
                                                                        <div class="icon">
                                                                            <div class="icon-1">
                                                                                <a href="#"><FaEye /></a>
                                                                            </div>
                                                                            <div class="icon-2">
                                                                                <a href="#"><FaShoppingCart /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="text">
                                                                <h3><a href="#">Black Square Rimmed...</a></h3>
                                                                <span class="price">$303.20</span>
                                                                <span class="reguler-price">$379.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <div class="item-inner">
                                                            <div class="image">
                                                                <a href="#">
                                                                    <img src="assets/img/full-rim-acetate-round-eyeglasses.jpg" alt="" />
                                                                    <ul class="products-flags">
                                                                        <li class="product-flag discount single">-15%</li>
                                                                    </ul>
                                                                    <div class="hover">
                                                                        <div class="icon">
                                                                            <div class="icon-1">
                                                                                <a href="#"><FaEye /></a>
                                                                            </div>
                                                                            <div class="icon-2">
                                                                                <a href="#"><FaShoppingCart /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="text">
                                                                <h3><a href="#">Full Rim Acetate Round...</a></h3>
                                                                <span class="price">$271.15</span>
                                                                <span class="reguler-price">$319.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <div class="item-inner">
                                                            <div class="image">
                                                                <a href="#">
                                                                    <img src="assets/img/budweiser-round-sunglasses.jpg" alt="" />
                                                                    <ul class="products-flags">
                                                                        <li class="product-flag discount single">-18%</li>
                                                                    </ul>
                                                                    <div class="hover">
                                                                        <div class="icon">
                                                                            <div class="icon-1">
                                                                                <a href="#"><FaEye /></a>
                                                                            </div>
                                                                            <div class="icon-2">
                                                                                <a href="#"><FaShoppingCart /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="text">
                                                                <h3><a href="#">Budweiser Round...</a></h3>
                                                                <span class="price">$294.38</span>
                                                                <span class="reguler-price">$359.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pgination">
                                            <div className="summary"> Regular price $359.00</div>
                                        </div>
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
export default Shop_body;