import React from 'react';
import { Link } from 'react-router-dom';
//redux
import { useSelector } from 'react-redux';
//selectors
import { getAuth } from '../../auth/auth.selector';
import { getProfile } from '../../users/users.selector';
//components
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const Navbar = () => {
    const auth = useSelector(getAuth);
    const profile = useSelector(getProfile);

    const links = auth.uid
                    ? <SignedInLinks profile={profile} />
                    : <SignedOutLinks />;

    return (
        <div>
            <nav className="nav-wrapper darken-3">
                <div className="container">
                    <Link to='/' className='brand-logo'>react redux todo</Link>
                    { links }
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
