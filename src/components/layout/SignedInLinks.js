import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
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
            <li><a onClick={logOut} to='/'>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{profile.initials}</NavLink></li>
        </ul>
    );
}

export default SignedInLinks;
