import React, { useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
//redux
import { useFirebase } from 'react-redux-firebase';
import { useDispatch } from 'react-redux';
//actions
import { signOut } from '../../auth/auth.action';


const SignedInLinks = ({ profile }) => {
    const firebase = useFirebase();
    const dispatch = useDispatch();
    const logOut = useCallback(() =>
        dispatch(signOut(
            { firebase })
        ), [dispatch, firebase]
    );

    return (
        <ul className='right'>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><Link onClick={logOut} to='/'>Log Out</Link></li>
            <li><NavLink to='/' className='btn btn-floating teal lighten-3 black-text'>{profile.initials}</NavLink></li>
        </ul>
    );
}

export default SignedInLinks;
