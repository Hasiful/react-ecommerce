import React from 'react';
import BannerSlider from '../../components/banner/banner';
import Category from '../../components/category/category';
import Search from '../../components/search/search';
import AllProducts from '../../components/allproducts/allproducts';
import RecentView from '../../components/recentview/recentview';
import CallAction from '../../components/calltoaction/callaction';
import Blog from '../../components/blog/blog';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider> 
            <Category></Category>
            <Search></Search>
            <AllProducts></AllProducts>
            <RecentView></RecentView>
            <CallAction></CallAction>
            <Blog></Blog>
        </div>
    );
};

export default Home;