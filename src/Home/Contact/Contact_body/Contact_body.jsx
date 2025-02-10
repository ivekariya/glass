import React from "react";

const Contact_body = () => {
   return (
         <>
            <div className="contact-main">
        <div className="container">
            <div className="contact-main-inner">
                <div className="path">
                    <ul>
                        <li><a href="glass.html"><span>Home</span></a></li>
                        <li><a href="contact-us.html"><span>Contact us</span></a></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="left-block">
                        <div className="contant">
                            <div className="heading">Store information</div>
                            <div className="item">
                                <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
                                <div className="data">
                                    Glasses<br/>1-2 U 5th, Suit 124 Los angeles<br/>United States
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon"><i className="fa-solid fa-phone"></i></div>
                                <div className="data">
                                    Call us:<br/>
                                    <a href="tel:(123) 4567-890">(123) 4567-890</a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                                <div className="data">
                                    Email us:
                                </div>
                                    <a className="email" href="#">admin@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="block-right">
                        <div className="block-right-inner">
                            <div className="form-contant">
                                <form action="" method="post">
                                    <div className="title">
                                        <span>Contact us</span>
                                    </div>
                                    <tbody>
                                        <tr>
                                            <td> <label >Subject</label></td>
                                            <td><select>
                                                    <option defaultValue="2">Customer service</option>
                                                    <option defaultValue="1">Webmaster</option>
                                                </select></td>
                                        </tr>
                                        <tr>
                                            <td><label >Email address</label></td>
                                            <td>
                                                <input className="form-control" name="from" type="email"
                                                    placeholder="your@email.com"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label >Attachment</label></td>
                                            <td>
                                                <div className="attachment">
                                                    <input type="text" className="form-control " placeholder="" disabled=""/>
                                                    <span className="buttonText">Choose file</span>
                                                    {/* <input className="buttonText" type="file" /> */}
                                                </div>
                                                <span className="optional">
                                                    optional
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label >Message</label></td>
                                            <td>
                                                <textarea name="message"
                                                    placeholder="How can we help?" rows="3"></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td className="snd">
                                                <input className="send" type="submit" value="SEND"/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </form>
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

export default Contact_body;
