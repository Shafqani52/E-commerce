import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

export default function CollectionPreview({title,items}){
    return (
        <div className="collection-wrap">
            <h2 className="collection-title">{title}</h2>
            <div className="collection">
                {
                    items
                        .filter((item,idx) => idx < 4)
                        .map(({id, ...otherItemProps }) => <CollectionItem key={id} {...otherItemProps}/>)
                }
            </div>
        </div>
    )
}