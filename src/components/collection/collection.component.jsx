import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collection.styles.scss';

class Collection extends React.Component  {
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state;
        return (
            <div className='collections'>
                <h1 className="main_title">Collections</h1>
                {
                    collections.map(({id, ...otherItemProps}) => <CollectionPreview key={id} {...otherItemProps}/>)
                }
            </div>
        )
    }
}

export default Collection;