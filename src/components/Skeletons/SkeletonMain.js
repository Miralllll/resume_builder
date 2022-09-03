import React from 'react';
import SkeletonElement from './SkeletonElement';

const SkeletonMain = () => {
    
  
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-button">
                <SkeletonElement type="title"/>
                <SkeletonElement type="title"/>
            </div>
        </div>
    )
};

export default SkeletonMain;