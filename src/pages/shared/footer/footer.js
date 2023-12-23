import React from 'react';
import './footer.css';
import logo from '../../../assets/images/logo.png'
import stripe from '../../../assets/images/payment/stripe.png'
import paypal from '../../../assets/images/payment/paypal.png'
import gpay from '../../../assets/images/payment/gpay.png'
import pay from '../../../assets/images/payment/pay.png'
import master from '../../../assets/images/payment/master.png'
import visa from '../../../assets/images/payment/visa.png'
import amazon from '../../../assets/images/payment/amazon.png'

const Footer = () => {
    return (
        <div className='footer_section'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-12">
                        <div className="footer_item">
                            <a href='./footer.js' className="footer_logo">
                                <img src={logo} alt="" />
                            </a>
                            <p className="footer_desc">
                                Shop Smart, Shop Easy: Your One-Stop E-commerce Destination. Connecting Shoppers to the World, One Click at a Time.
                            </p>

                            <h4 className='footer_item_title'>Accepted Payments</h4>

                            <div className="payment_wrapper">
                                <div className="payment_image">
                                    <img src={stripe} alt="paymentImage" />
                                </div>
                                <div className="payment_image">
                                    <img src={paypal} alt="paymentImage" />
                                </div>
                                <div className="payment_image">
                                    
                                    <img src={gpay} alt="paymentImage" />
                                </div>
                                <div className="payment_image">
                                    
                                    <img src={pay} alt="paymentImage" />
                                </div>
                                <div className="payment_image">
                                    
                                    <img src={master} alt="paymentImage" />
                                </div>
                                <div className="payment_image">
                                    
                                    <img src={visa} alt="paymentImage" />
                                </div>
                                <div className="payment_image">
                                    
                                    <img src={amazon} alt="paymentImage" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12">
                        <div className="footer_nav">
                            <h4 className='footer_item_title'>Department</h4>
                            <ul className="footer_nav_list">
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Smartphones and Accessories</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Computers and Laptops</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Audio and Headphones</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Cameras and Photography</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Home Appliances</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Gaming and Entertainment</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Drones and Robotics</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Software and Apps</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Power and Charging</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-12">
                        <div className='footer_nav'>
                            <h4 className='footer_item_title'>About Us</h4>
                            <ul className='footer_nav_list'>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>News & Blogs</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Affiliates & Partners</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Brands</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Ideas & Guide</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-xl-2 col-lg-4 col-md-12">
                        <div className='footer_nav'>
                            <h4 className='footer_item_title'>Services</h4>
                            <ul className='footer_nav_list'>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Gift Card</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Mobile App</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Shipping & Delivery</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Order Pickup</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Account Signup</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-4 col-md-12">
                        <div className='footer_nav'>
                            <h4 className='footer_item_title'>Help</h4>
                            <ul className='footer_nav_list'>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Track Order</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Return Policy</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Contact Us</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Feedback</a>
                                </li>
                                <li className='footer_nav_item'>
                                    <a href="" className='footer_nav_link'>Security & Fraud</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;