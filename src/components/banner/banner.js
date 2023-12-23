import React, { useRef } from "react";
import Slider from "react-slick";
import './banner.css'
import bannerImage from "../../assets/images/bannerthumb.png"

const BannerSlider = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div>
            <Slider {...settings} ref={sliderRef}>

                <div className="banner_slider">
                    <div className="container">
                        <div className="banner_wrapper">
                            <div className="banner_content">
                                <h1 className="banner_heading">Grab Upto <span>50% Off</span> On
                                    Selected Product</h1>
                                <p className="banner_text">Get authentic and sustainable electronic delivery at your door. Elevate Your Tech Life. Discover the Future of Electronics. Shop Smarter 🚀</p>
                                <div className="banner_btn">
                                    <a href="#link">Buy Now</a>
                                </div>
                            </div>
                            <div className="banner_thumb">
                                <img src={bannerImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="banner_slider">
                    <div className="container">
                        <div className="banner_wrapper">
                            <div className="banner_content">
                                <h1 className="banner_heading">Grab Upto <span>50% Off</span> On
                                    Selected Product</h1>
                                <p className="banner_text">Get authentic and sustainable electronic delivery at your door. Elevate Your Tech Life. Discover the Future of Electronics. Shop Smarter 🚀</p>
                                <div className="banner_btn">
                                    <a href="#link">Buy Now</a>
                                </div>
                            </div>
                            <div className="banner_thumb">
                                <img src={bannerImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
        
            </Slider>
        </div>
    );
};

export default BannerSlider;
