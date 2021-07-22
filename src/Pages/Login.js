import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../firebase';
import '../Styles/Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history=useHistory();

    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((user)=>{
          
            history.push('/');
        })
        alert("successfully logged in");
       
    }

    const signInWithGoogle=()=>{
        auth.signInWithPopup(provider).then((user)=>{
            console.log(user);
            history.push('/')
        })
      
        alert("Successfully logged in")
    }
    return (
        <div className='login'>
            <form>
                <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={signIn} > Sign In</Button>
                <p>or</p>
                <Button onClick={signInWithGoogle} className='login__black'>Sign In with Google</Button>

                <p>You don't have an Account??</p>
                <span>Create One</span>
                <Button onClick={()=>history.push('/signup')} className='login__tomato'>Create Account</Button>
            </form>

        </div>
    )
}

export default Login
