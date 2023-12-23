import React from 'react';
import Product from '../product/product';
import SectionTitle from '../sectionheading/sectionheading';

const AllProducts = () => {
    return (
        <div className='allProduct_section section_padding'>
            <div className="container">
                <SectionTitle></SectionTitle>
                <div className="product_wrapper row g-4">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>

                </div>
            </div>
        </div>
    );
};

export default AllProducts;