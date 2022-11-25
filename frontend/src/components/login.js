import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import { Button, Form, Overlay, OverlayTrigger, Popover } from "react-bootstrap";



function Login() {
    const navigate = useNavigate();
    const [account, setAccount] = useState({
        username: "",
        password: "",
    });
    const [isLoggedin, setIsloggedin] = useState()
    const [responseData, setresponseData] = useState()
    const handleChange = (e) => {
        const { name, value } = e.target;

        setAccount((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        })
    }

    function ifLoggedin(rpdata) {
        if (rpdata === true) {
            localStorage.setItem('loggedInas', account.username)
            navigate('/chat')
            setIsloggedin(true)
        } else if (rpdata === false) {
            console.log('woops')
            setIsloggedin(false)
        }
    }

    useEffect(() => ifLoggedin(responseData))



    const handleClick = async (e) => {
        try {
            const data = 
            e.preventDefault()
            const response = await axios
            .post("http://localhost:3001/login", account)
            .then(res => setresponseData(res['data']))
        } catch(err) {
            console.log(err);
        }
    }


    return (
      <div style={{width:'90%', margin:'auto auto', textAlign:'center'}}>
            <h1>Login</h1>
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
                onClick={handleClick}
                >Login</Button>
            </Form>
            <div>
                {isLoggedin === false && <div style={{backgroundColor:'red', color: 'white'}}>
                    Incorrect username or password. Please try again or <a href="/register">make a new account. </a>
                    </div>}
            </div>
      </div>
    );
  }
  
  export default Login;
  