import React from 'react';
import './blogitem.css'
import blogImagge from '../../assets/images/blog/blog.png'

const BlogItem = () => {
    return (
        <div className='col-sm-6 col-lg-4'>
            <a href='./blogitem.js' className="blog_item">
                <div className="blog__item_img">
                    <img src={blogImagge} alt="" />
                </div>
                <div className="blog_item_content">
                    <h2 className='blog_item_title'>Frequently Asked Questions</h2>
                    <h5 className='blog_item_desc'>If you have any kind of questions just let us know</h5>
                </div>
            </a>
        </div>
    );
};

export default BlogItem;