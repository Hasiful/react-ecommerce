import React from 'react';
import Product from '../product/product';
import SectionTitle from '../sectionheading/sectionheading';

const RecentView = () => {
    return (
        <div className='recentView_section section_padding'>
            <div className="container">
                <SectionTitle></SectionTitle>
                <div className="row g-4">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
            </div>
        </div>
    );
};

export default RecentView;