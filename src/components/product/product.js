import React from 'react';
import { HiHeart, HiStar, HiOutlineStar } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import productImg from '../../assets/images/product/image18.png'
import './product.css'

const Product = () => {
    return (
        
        <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className='product'>
                <div className="product_top">
                    <span className='wish_icon'><HiHeart /></span>
                    
                    <div className="product_image">
                        <img src={productImg} alt="" />
                    </div>
                    <div className="product_content">
                        <div className="flex-between">
                            <h5 className="product_title">Airpods Max</h5>
                            <h5 className="product_price"> <small className='save_price'>(-25%)</small> <sup>&</sup> 999 <sup>.00</sup></h5>
                        </div>
                        <p className="product_desc">A perfect balance of high-fidelity audio!</p>
                        <div className="flex-center product_rating_wrap">
                            <div className="product_rating">
                                <ul className='flex-center'>
                                    <li><HiStar /></li>
                                    <li><HiStar /></li>
                                    <li><HiStar /></li>
                                    <li><HiStar /></li>
                                    <li><HiOutlineStar /></li>
                                </ul>
                            </div>
                            <p className="rating_count">(121)</p>
                        </div>

                        <div className="flex-between">
                            <a className='product_share' href="https://web.whatsapp.com/send?text=The text to share" target='blank'><FaWhatsapp /></a>

                            <div className="product_btn">
                                <a href="./product.js">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;