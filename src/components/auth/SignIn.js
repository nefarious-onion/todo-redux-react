import React, { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onSubmit = event => {
        event.preventDefault();
        console.log(email, password);
        
    }

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
                </div>
            </form>
            
        </div>
    );
}

export default SignIn;
