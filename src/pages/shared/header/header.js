import React, { useState } from 'react';
import './header.css'
import logo from '../../../assets/images/logo.png'
import noteImg from '../../../assets/images/icon.svg'
import profile from '../../../assets/images/profile.jpg'
import { HiMenu, HiOutlineSearch, HiShoppingCart } from "react-icons/hi";
import Sidebar from '../../../components/sidebar/sidebar';



const Header = () => {
    return (
        <header className='header_section'>
            <Sidebar></Sidebar>
            <div className="container">
                <div className="header_wrapper flex-between flex-nowrap">
                    <div className="header_left gap-3 flex-nowrap flex-center">
                        <div className="toggler_icon">
                            <HiMenu />
                        </div>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="header_search">
                            <input className='input-control' type='search' placeholder='Search for Any kind of electronics' />
                            <button className='search_btn'>
                                <HiOutlineSearch />
                            </button>
                        </div>
                    </div>
                    <div className="header_right flex-center justify-flex-end">
                        <p className="header_note flex-wrap"> <span> <img src={noteImg} alt="" /> </span> Order now and get in within <span>15 mint!</span></p>

                        <div className="header_cart">
                            <div className="header_cart_icon">
                                <HiShoppingCart />
                                <span className="header_cart_count">2</span>
                            </div>
                        </div>

                        <div className="profile_info">
                            <div className="profile_image">
                                <img src={profile} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;