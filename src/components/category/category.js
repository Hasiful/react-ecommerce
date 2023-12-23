import React, { useRef } from "react";
import './category.css'
import Slider from "react-slick";
import SectionTitle from '../sectionheading/sectionheading';
import imageOne from '../../assets/images/category/1.png'
import imageTwo from '../../assets/images/category/2.png'
import imageThree from '../../assets/images/category/3.png'

const Category = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: ".cate_slider_arrow",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div>
            <div className='category_section section_padding'>
                <div className="container">
                    <SectionTitle></SectionTitle>
                    <div className="category_slider_wrapper">
                        <div className="category_slider">
                            <Slider {...settings} ref={sliderRef}>
                                <div className="category_item">
                                    <div className="category_item_wrapper">
                                        <div className="category_item_content">
                                            <h3 className="category_item_title">Headphone</h3>
                                            <p className="category_item_desc">Earephone, Airbud, Gaming Earephone</p>
                                        </div>
                                        <div className="category_item_thumb">
                                            <img src={imageOne} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="category_item">
                                    <div className="category_item_wrapper">
                                        <div className="category_item_content">
                                            <h3 className="category_item_title">Laptop & PC</h3>
                                            <p className="category_item_desc">Laptop. Desktop, TV</p>
                                        </div>
                                        <div className="category_item_thumb">
                                            <img src={imageTwo} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="category_item">
                                    <div className="category_item_wrapper">
                                        <div className="category_item_content">
                                            <h3 className="category_item_title">Headphone</h3>
                                            <p className="category_item_desc">Earephone, Airbud, Gaming Earephone</p>
                                        </div>
                                        <div className="category_item_thumb">
                                            <img src={imageOne} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="category_item">
                                    <div className="category_item_wrapper">
                                        <div className="category_item_content">
                                            <h3 className="category_item_title">Laptop & PC</h3>
                                            <p className="category_item_desc">Laptop. Desktop, TV</p>
                                        </div>
                                        <div className="category_item_thumb">
                                            <img src={imageTwo} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="category_item">
                                    <div className="category_item_wrapper">
                                        <div className="category_item_content">
                                            <h3 className="category_item_title">Camera</h3>
                                            <p className="category_item_desc">Camera, Action Camera, Shooting Camera</p>
                                        </div>
                                        <div className="category_item_thumb">
                                            <img src={imageThree} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="cate_slider_arrow">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
