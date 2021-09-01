import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import './header.styles.scss';

export default function Header(){
    return (
        <div className="header">
            <div className="main_container">
                <div className="header-wrap">
                    <Link to='/'>
                        <Logo/>    
                    </Link>
                    <div className="menu">
                        <Link to='/shop'>
                            <span className="menu-item">Shop</span>
                        </Link>
                        <Link to=''>
                            <span className="menu-item">Contact</span>
                        </Link>
                        <Link to='/signin'>
                            <span className="menu-item">SignIn</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}