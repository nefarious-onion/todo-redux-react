import React, { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    
    const onSubmit = event => {
        event.preventDefault();
        console.log(email, password);
        console.log(firstname, lastname);
        
        
    }

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
                </div>
            </form>
            
        </div>
    );
}

export default SignIn;
