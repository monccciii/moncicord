import React from 'react';
import { useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import { Button, Form } from "react-bootstrap";


function Register() {
    const navigate = useNavigate();
    const [account, setAccount] = useState({
        username: "",
        password: "",
    });
    const [isSuccessfullyCreated, setSuccessfullycreated] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setAccount((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        })
    }

    const handleClick = (e) => {
        e.preventDefault();

        axios
        .post("http://localhost:3001/register", account)
        .then(res => console.log(res))
        .catch((err) => console.log(err));
        setSuccessfullycreated(true)
        setTimeout(() => { navigate('/login'); }, 1000)
    }

    return (
      <div style={{width:'90%', margin:'auto auto', textAlign:'center'}}>
            <h1>Register</h1>
            <Form>
                <Form.Group>
                    <Form.Control
                    name="username"
                    value={account.username}
                    placeholder="username"
                    style={{ marginBottom: "1rem"}}
                    onChange={handleChange}
                    />
                <Form.Control
                    name="password"
                    value={account.password}
                    placeholder="password"
                    style={{ marginBottom: "1rem"}}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Button
                style={{width: "100%", marginBottom:"1rem"}} 
                variant="outline-success"
                onClick={handleClick}>Register</Button>
            </Form>
            <div>
                {isSuccessfullyCreated === true && 
                <div style={{backgroundColor: 'green', color: 'white'}}>
                    Account successfully created! Welcome to Monci Chat
                    </div>}
            </div>
      </div>
    );
  }
  
  export default Register;
  