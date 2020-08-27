import React, { useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { useFirebase, useFirestore } from 'react-redux-firebase';

//selectors
import { getAuth, getAuthError } from '../../auth/auth.selector';
//actions
import { signUp } from '../../auth/auth.action';

const SignIn = () => {
    const firebase = useFirebase();
    const firestore = useFirestore();
    const dispatch = useDispatch();
    const newSignUp = useCallback( newUser => 
        dispatch(signUp(
            { firestore, firebase}, newUser)
            ), [ dispatch, firebase, firestore ]
    );
    const auth = useSelector(getAuth);
    const authError = useSelector(getAuthError)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    
    const onSubmit = event => {
        event.preventDefault();
        const newUser = {
            email,
            password,
            firstname,
            lastname
        }

        newSignUp(newUser);
    }

    if (auth.uid) return <Redirect to='/' />
    return (
        <div className='container'>
            <form className='white' onSubmit={onSubmit}>
                <h5 className="gray-text grey-darken-3">Sign Up</h5>
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
                    <label htmlFor="lastname">Lastname</label>
                    <input 
                        type="text" 
                        id='lastname' 
                        onChange={event => setLastname(event.target.value)} 
                        value={lastname}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="firstname">Firstname</label>
                    <input 
                        type="text" 
                        id='firstname' 
                        onChange={event => setFirstname(event.target.value)} 
                        value={firstname}
                    />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
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
