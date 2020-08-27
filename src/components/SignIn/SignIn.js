import React, { useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
//actions
import { signIn } from '../../auth/auth.action';
//selectors
import { getAuthError, getAuth } from '../../auth/auth.selector';

const SignIn = () => {
    const firebase = useFirebase();
    const dispatch = useDispatch();
    const newSignIn = useCallback( credentials => 
        dispatch(signIn(
            { firebase }, credentials)
        ), [ dispatch, firebase ]
    );
    const authError = useSelector(getAuthError);
    const auth = useSelector(getAuth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onSubmit = event => {
        event.preventDefault();
        console.log(email, password);
        console.log(typeof email);
        
        const credentials = {
            email,
            password
        }
        newSignIn(credentials)
    }
    
    if (auth.uid) return <Redirect to='/' />
    return (
        <div className='container'>
            <form className='white' onSubmit={onSubmit}>
                <h5 className="gray-text grey-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id='email' 
                        onChange={event => setEmail(event.target.value)} 
                        value={email}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id='password' 
                        onChange={event => setPassword(event.target.value)} 
                        value={password}
                    />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                    <div className="red-text center">
                        {authError
                            ? <p>{authError}</p>
                            : null
                        }
                    </div>
                </div>
            </form>
            
        </div>
    );
}

export default SignIn;
