import React from 'react';
import Collection from '../../components/collection/collection.component';
import './shopPage.styles.scss';

export default function Shop(){
    return (
        <div className="shop-page">
            <div className="main_container">
                <Collection/>
            </div>
        </div>
    )
}