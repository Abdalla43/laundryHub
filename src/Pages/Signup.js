import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import '../Styles/Signup.css'
function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const signUp = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password).then((user, error) => {
            history.push('/')
        })
        setEmail('');
        setPassword('')
        alert("User created successfully")



    }
    return (
        <div className='sign-up'>
            <h3>Create a new Account</h3>
            <form>
                <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={signUp} > Sign Up</Button>
            </form>
        </div>
    )
}

export default Signup
