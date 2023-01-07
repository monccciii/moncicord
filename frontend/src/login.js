import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import { Button, Form, Overlay, OverlayTrigger, Popover, Container} from "react-bootstrap";
import background1 from '../styles/images/background1.png';
import background2 from '../styles/images/background2.png';
import Zoom from 'react-reveal/Zoom';

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
      <div style={{width:'100vw', height: '100vh', textAlign:'center', backgroundImage: "url(" + background1 + ")", backgroundSize:'auto', backgroundRepeat:'no-repeat'}}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Zoom>
            <Container className='registerloginbox'>
            <h1 className='loginn'><br />Welcome back!</h1>
            <p style={{color:'white',fontFamily:"'Roboto', sans-serif"}}>We're so excited to see you again!</p>
            <Form>
                <p style={{color: 'white', fontFamily:"'Roboto', sans-serif", textAlign:'left'}}>Username</p>
                <Form.Group>
                    <Form.Control
                    name="username"
                    value={account.username}
                    style={{ backgroundColor:'#36393F', marginBottom: "1rem", color:'white'}}
                    onChange={handleChange}
                    />
                    <p style={{color: 'white', fontFamily:"'Roboto', sans-serif", textAlign:'left'}}>Password</p>
                <Form.Control
                    name="password"
                    value={account.password}
                    style={{ backgroundColor:'#36393F', marginBottom: "1rem", color:'white'}}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Button
                style={{width: "100%", marginBottom:"1rem", backgroundColor: '#5865F2'}} 
                onClick={handleClick}
                >Log In</Button>
                <p style={{color:'white', fontFamily:"'Roboto', sans-serif"}}>Don't have an account? <a href="/register">Register.</a></p>
                <br />
            </Form>
            <div>
                {isLoggedin === false && <div style={{backgroundColor:'red', color: 'white', fontFamily:"'Roboto', sans-serif"}}>
                    Incorrect username or password. Please try again or <a href="/register">make a new account. </a>
                    </div>}
            </div>
            </Container>
            </Zoom>
      </div>
    );
  }
  
  export default Login;
  