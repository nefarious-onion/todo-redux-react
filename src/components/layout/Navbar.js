import React from 'react';
import { Link } from 'react-router-dom';
//components
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <div>
            <nav className="nav-wrapper darken-3">
                <div className="container">
                    <Link to='/' className='brand-logo'>react redux todo</Link>
                    <SignedOutLinks/>
                    <SignedInLinks/>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
