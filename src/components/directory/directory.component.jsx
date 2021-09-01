import React from 'react';
import directory from './directory.data';
import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            gallery: directory
        }
    }
    render() {
        const {gallery} = this.state;
        return (
            <div className="gallery">
                {
                    gallery.map(({id, ...otherItemProps}) => <DirectoryItem key={id} {...otherItemProps }/>)
                }
            </div>
        )
    }
}


export default Directory;

