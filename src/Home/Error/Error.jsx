import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return(

    <>
        <div class="error-main">
            <div class="container">
                <div class="error-main-inner">
                    <div class="path">
                        <ul>
                            <li><a href="glass.html"><span>Home</span></a></li>
                            <li><a href="contact-us.html"><span>Impact 404 Not Found</span></a></li>
                        </ul>
                    </div>
                    <div class="content">
                        <div class="msg">
                            <span>404</span>
                            <p>we are sorry, but the page you requested was not found</p>
                            <div class="button">
                                <Link to="/" class="home">gO home</Link>
                                <Link to="/Contact" class="contect">CONTACT US</Link>
                            </div>
                            {/* <div class="icon">
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-solid fa-envelope"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                                <i class="fa-brands fa-youtube"></i>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Error;