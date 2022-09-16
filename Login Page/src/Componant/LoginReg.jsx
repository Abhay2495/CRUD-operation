import { Alert } from "react-bootstrap";
import React, { useState } from "react";
import Home from './Home';

const LoginReg = () => {

    const[emaillog, setEmailLog] = useState('');
    const[passwordlog, setPasswordLog] = useState('');
    const[flag, setFlag] = useState(false);
    const[home, setHome] = useState(true); 

    const loginHandler = (e) =>{
        e.preventDefault();
    let mail  = localStorage.getItem('Email').replace(/"/g,"");
    let pass  = localStorage.getItem('Password').replace(/"/g,"");

    if(!emaillog || !passwordlog){
        setFlag(true);
        console.log('Empty');
    }
    else if(passwordlog !== pass || emaillog !== mail){
        setFlag(true);
    }
    else{
        setHome(!home);
        setFlag(false);
    }
    }

    return (
        <div>
            {home ? (
            <form onSubmit={loginHandler}>
                <h1>Login</h1>
            <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter Email" className="form-control" onChange={(event) => setEmailLog(event.target.value)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter Password" className="form-control" onChange={(event) => setPasswordLog(event.target.value)} />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Login </button>

            {flag && (
                    <Alert color='primary' variant='danger'>
                        Please Fill Correct Info
                    </Alert>
                )}
            </form>
            ):(
                <Home/>
            )}
        </div>
    )
}

export default LoginReg;