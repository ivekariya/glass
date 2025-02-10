import React from "react";

const Product_item2 = (props) => {
    return (
        <>
            <div className="item">
                <div className="item-inner">
                    <div className="image">
                        <a href="#">
                            <img src={props.image} alt="" />
                        </a>
                        <ul className="products-flags">
                            <li className="product-flag discount single">{props.discount}%</li>
                        </ul>
                        <div className="hover">
                            <div className="icon">
                                <div className="icon-1">
                                    <a href="#"><i className="fa-solid fa-eye"></i></a>
                                </div>
                                <div className="icon-2">
                                    <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text">
                        <h3><a href="#">Vincent Chase Online...</a></h3>
                        <span className="price">${props.price}</span>
                        <span className="reguler-price">${props.reguler}</span>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Product_item2;