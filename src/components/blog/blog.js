import React from 'react';
import './blog.css'
import SectionTitle from '../sectionheading/sectionheading';
import BlogItem from '../blogitem/blogitem';

const Blog = () => {
    return (
        <div className='blog_section section_padding'>
            <div className="container">
                <SectionTitle></SectionTitle>
                <div className="row g-4">
                    <BlogItem></BlogItem>
                    <BlogItem></BlogItem>
                    <BlogItem></BlogItem>
                </div>
            </div>
        </div>
    );
};

export default Blog;