import React from "react";

const Category_item = (props) => {
    return (
        <>
            <div className="item">
                <div className="item-inner">
                    <div className="lable">
                        <a href="#"><span>{props.lable}</span></a>
                    </div>
                    <div className="img">
                        <a href="#">
                            <img src={props.image}alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category_item;