import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import Category from "./category";
import Promotion from "./Promotion";
import Items from "./Product";
import Testimonial from "./Testimonial";
import Brands from "./Brands";

const Body = () => {
    return (
        <>
            <Banner />
            <Services />
            <Category/>
            <Promotion />
            <Items />
            <Testimonial />
            <Brands/>
        </>
    );
}
export default Body;