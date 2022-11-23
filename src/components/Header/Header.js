import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <img src={logo} alt="Logo" />
                <div>
                    <ul>
                        <li><a href="/order">Order</a></li>
                        <li><a href="/review">Order Review</a></li>
                        <li><a href="/inventory">Manage Inventory</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;