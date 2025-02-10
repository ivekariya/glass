import React from "react";
import Category_item from "./Category-item";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Category = () => {
    const options = {
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            431: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    }
    return (
        <>
            <div className="category-main">
                <div className="container">
                    <div className="category-main-inner">
                        <div className="title">
                            <span>
                                Shop by Category
                            </span>
                        </div>
                        <div className="content">
                            <OwlCarousel className='owl-theme category' loop margin={10} {...options}>
                                <Category_item lable="Men" image="assets/img/11_thumb.jpg" />
                                <Category_item lable="Womens" image="assets/img/12_thumb.jpg" />
                                <Category_item lable="Childrens" image="assets/img/13_thumb.jpg" />
                                <Category_item lable="Accessories" image="assets/img/11_thumb.jpg" />
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;