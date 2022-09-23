import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dummyData from "./dummyData";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddUser = () => {

    const [name, setName] = useState(''); 
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');


    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/submit',{name:name,userName:userName,phone:phone}).then((res)=>{
            console.log(res)})
        axios.get('http://localhost:5000/submit').then((res)=> console.log(res))
        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = name,
            b = userName;
        let c = phone;

        dummyData.push({ id: uniqueId, Name: a, UserName: b, Phone: c });

        history('/');
    }

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Control type="text" placeholder="Enter User Name" required onChange={(e) => setUserName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Control type="number" placeholder="Enter Phone Number" required onChange={(e) => setPhone(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default AddUser;