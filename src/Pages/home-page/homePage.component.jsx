import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homePage.styles.scss';

export default function HomePage(){
    return (
        <div className='home-page'>
            <div className="main_container">
                <Directory/>
            </div>
        </div>
    )
}