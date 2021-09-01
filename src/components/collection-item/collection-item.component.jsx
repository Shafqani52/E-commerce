import React from 'react';
import './collection-item.styles.scss';

export default function CollectionItem({name,imageUrl,price}){
    return (
        <div className="collection-item">
            <div className="image">
                <img src={imageUrl} alt="" />
            </div>
            <div className="details-wrap">
                <span className='product-name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <div className="add-cart-btn">
                Add To Cart
            </div>
        </div>
    )
}