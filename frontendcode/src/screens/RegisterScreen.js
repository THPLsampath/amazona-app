import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../Action/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen(props) {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
    console.log(props.location.search);


    const userRegister = useSelector((state) => state.userRegister)
    const { userInfo, loading, error } = userRegister;
    console.log(userInfo);

    const dispatch = useDispatch();

    const submitHandaler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and confirm Password in no match')
        } else {
            dispatch(register(name, email, password));
        }
    }

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
        return () => {

        }
    }, [props.history, redirect, userInfo])

    return (
        <div>
            <form className="form" onSubmit={submitHandaler}>
                <div>
                    <h1>Create an account</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFrom="name">Name</label>
                    <input
                        type="name"
                        id="name"
                        placeholder="Enter name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    ></input>
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
                    <label htmlFrom="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFrom="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Enter Confirm Password"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Register</button>
                </div>
                <div>
                    <label />
                    <div>
                        Allready have an account? <Link to={`/signin?redirect=${redirect}`}>Sign-in</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
