import React, { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dummyData from "./dummyData";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';

const Edit = () => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = dummyData.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = dummyData[index];
        a.Name = name;
        a.UserName = userName;
        a.Phone = phone;

        history('/');
    }


    useEffect (() => {
         setName(localStorage.getItem('Name'))
         setUserName(localStorage.getItem('UserName'))
         setPhone(localStorage.getItem('Phone'))
         setId(localStorage.getItem('Id'))
    },[])

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Control type="text" placeholder="Enter User Name" value={userName} required onChange={(e) => setUserName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Control type="number" placeholder="Enter Phone Number" value={phone} required onChange={(e) => setPhone(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )
};


export default Edit;