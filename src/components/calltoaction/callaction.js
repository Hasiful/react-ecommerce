import React from 'react';
import './callaction.css'

const CallAction = () => {
    return (
        <div className='callToAction'>
            <div className="container">
                <div className="callToAction_content">
                    <h1 className='callToAction_title'>Ready to get started?</h1>
                    <h4 className='callToAction_desc'>Explore millions of products from trusted suppliers by signing up today</h4>
                    <div className='callToAction_btn banner_btn'>
                        <a href="./callaction.js">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallAction;