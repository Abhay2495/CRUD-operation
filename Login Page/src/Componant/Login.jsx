import { Alert } from "react-bootstrap";
import React, { useState } from "react";
import LoginReg from "./LoginReg";
import './Login.css'



const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function submitHandler(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone) {
            setFlag(true);
        }
        else {
            setFlag(false);
            localStorage.setItem('Email', JSON.stringify(email));
            localStorage.setItem('Password', JSON.stringify(password));

            console.log("saved In local Storag")
            setLogin(!login)
        }
    }

    const clickHandler = () => {
        setLogin(!login);
    }

    return (
        <div className="form_Page">
            {login ? (
                <form onSubmit={submitHandler}>
                    <h1>Registration</h1>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" placeholder="Enter Full Name" className="form-control" onChange={(event) => setName(event.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control" onChange={(event) => setEmail(event.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control" onChange={(event) => setPassword(event.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="number" placeholder="Enter Mobile Number" className="form-control" onChange={(event) => setPhone(event.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign up </button>

                    <p onClick={clickHandler}>Already Registered  {" "}  login ?</p>

                {flag && (
                    <Alert color='primary' variant='danger'>
                        Please Fill Every Field
                    </Alert>
                )}
                </form>
            ) : (

                <LoginReg/>

            )}
        </div>
    )
}

export default Login;