import React from 'react';
import { withRouter } from 'react-router-dom';
import './directory-item.component.jsx';
import './directory-item.styles.scss'
 
function DirectoryItem({title,imageUrl,size,linkUrl,history,match}){
    return (
        <div className={`gallery-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="gallery-image">
                <img src={imageUrl} alt="" />
            </div>
            <div className="gallery-content">
                <span className="title">{title}</span>
                <span className="shop">Shop Now</span>
            </div>
      </div>
    )
}

export default withRouter(DirectoryItem)