import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential)
                    navigate("/")
            })
            .catch((error) => alert(error.message));
    };
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential)
                    navigate("/")

            })
           .catch((error)=>{
        const errormessage =error.message;
            alert(error.message);
           })
    }
    // const register = (e) => {
    //     e.preventDefault();
    //     auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             // console.log(auth)
    //             if (auth) {
    //                 navigate("/");
    //             }
    //         })
    //         .catch((error) => console.log(error.message));
    // };
    return (
        <div className='login'>
            <Link to="/">
                <img className='login_logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className='login_container'>
                <h1>sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <h5>password</h5>
                    <input type="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)} />
                    <button
                        type="submit"
                        onClick={signIn}
                        className="login_signInButton" >
                        sign In
                    </button>
                </form>
                <p>By sining-in you  agree to the AMAZON FAKE CLONE condition of use sale. please see our privacy Notice,our cookies Notice and our Interest-Based Ads Notice.</p>
                <button onClick={register} className='login_registerButton'>
                    create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
