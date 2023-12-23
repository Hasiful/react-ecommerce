import React from 'react';
import './sectionheading.css'

const SectionTitle= () => {
    return (
        <div className='section_title'>
            <div className='flex-between'>
                <h2 className='section_title_heading'>Popular Categories</h2>
                <div className="section_btn">
                    <h3><a href="##">View all</a></h3>
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;