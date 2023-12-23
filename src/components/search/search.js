import React from 'react';
import { HiFilter } from "react-icons/hi";
import './search.css'

const Search = () => {
    return (
        <div className='search'>
            <div className="container">
                <form action='#' className="flex-between gap-3">
                    <div className="search_left">
                        <select name="" id="" className='search_select form-select'>
                            <option value="">Electronic Type</option>
                            <option value="">Laptop</option>
                            <option value="">Mobile</option>
                            <option value="">Tab</option>
                        </select>
                        <select name="" id="" className='search_select form-select'>
                            <option value="">Brand</option>
                            <option value="">Hp</option>
                            <option value="">Walton</option>
                            <option value="">Dell</option>
                        </select>
                        <select name="" id="" className='search_select form-select'>
                            <option value="">Model</option>
                            <option value="">Hp145</option>
                            <option value="">Walton142</option>
                            <option value="">Dell45RF</option>
                        </select>
                        <select name="" id="" className='search_select form-select'>
                            <option value="">Price</option>
                            <option value="">$1000</option>
                            <option value="">$2000</option>
                            <option value="">$3000</option>
                            <option value="">$4000</option>
                        </select>
                        <select name="" id="" className='search_select form-select'>
                            <option value="">Review</option>
                            <option value="">1 star</option>
                            <option value="">2 star</option>
                            <option value="">3 star</option>
                            <option value="">4 star</option>
                            <option value="">5 star</option>
                        </select>
                        
                        <div className="search_button">
                            <button type='submit'>All Filters <span><HiFilter /></span></button>
                        </div>
                    </div>

                    <div className="search_right">
                        <select name="" id="" className='search_select form-select'>
                            <option value="">sort by</option>
                            <option value="">high to low</option>
                            <option value="">low to hight</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;