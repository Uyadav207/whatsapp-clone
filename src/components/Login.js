import React from 'react';
import '../CSS/login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase'
import { actionTypes } from '../Reducer/reducer';
import { useStateValue } from '../Reducer/StateProvider';

function Login() {

    const [{}, dispatch] = useStateValue()

const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then(result => {
        dispatch({ 
            type: actionTypes.SET_USER,
            user: result.user,
         })
    })
    .catch((error) => alert(error.message));
}

    return (
        <div className="login">
            <div className="login_container">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/72px-WhatsApp.svg.png"
                />
            <div className="login_text">
                <h1>Sign In to WhatsApp</h1>
            </div>
            <Button type="submit" onClick={signIn} >
                Sign In with Google
            </Button>
            </div>
        </div>
    )
}

export default Login
