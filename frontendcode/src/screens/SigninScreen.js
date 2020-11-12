import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function SigninScreen() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandaler = (e) => {
        e.preventDefault();
        //Todo for sigiaction
    }

    return (
        <div>
            <form className="form" onSubmit={submitHandaler}>
                <div>
                    <h1>Sigi in</h1>
                </div>
                <div>
                    <label htmlFrom="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFrom="email">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Sign In</button>
                </div>
                <div>
                    <label />
                    <div>
                        New Customer? {' '}
                        <Link to='register'>Create Your Account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}