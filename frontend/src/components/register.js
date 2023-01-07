import React from 'react';
import { useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import background2 from '../styles/images/background2.png'
import Zoom from 'react-reveal/Zoom';

function Register() {
    const navigate = useNavigate();
    const [account, setAccount] = useState({
        username: "",
        password: "",
    });
    const [isSuccessfullyCreated, setSuccessfullycreated] = useState();
    const [doesaccountexist, setDoesaccountexist] = useState();
    const handleChange = (e) => {
        const { name, value } = e.target;

        setAccount((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        })
    }

    useEffect(() => {
        checkIfavailabletoregister();
    }, [doesaccountexist])

    const checkIfaccountexists = () => {
        axios
        .post("http://localhost:3001/isnameregistered", account)
        .then(res => {
            console.log(res);
            setDoesaccountexist(res.data);
        })
        .catch((err) => console.log(err));
            
    }

    const checkIfavailabletoregister = () => {
        if (doesaccountexist === true) {
            axios
            .post("http://localhost:3001/register", account)
            .then(res => console.log(res))
            .catch((err) => console.log(err));
            setSuccessfullycreated(true)
            setTimeout(() => { navigate('/login'); }, 1000)
            }
            else {
                console.log(doesaccountexist)
                console.log('already exists')
            }
    }

    const handleClick = (e) => {
        e.preventDefault();
        checkIfaccountexists();
    }

    return (
        <div style={{width:'100vw', height: '100vh', textAlign:'center', backgroundImage: "url(" + background2 + ")", backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
             <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <Zoom>
            <Container className='registerloginbox'>
            <h1 className='loginn'><br />Create an account</h1>
            <p style={{color:'white',fontFamily:"'Roboto', sans-serif"}}>Enter a username and password.</p>
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
                    type="password"
                    style={{ backgroundColor:'#36393F', marginBottom: "1rem", color:'white'}}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Button
                style={{width: "100%", marginBottom:"1rem", backgroundColor: '#5865F2'}} 
                onClick={handleClick}
                >Register</Button>
                <p style={{color:'white', fontFamily:"'Roboto', sans-serif"}}>Already have an account? <a href="/login">Login.</a></p>
                <br />
                <div>
                {isSuccessfullyCreated === true && 
                <div style={{backgroundColor: 'green', color: 'white', fontFamily:"'Roboto', sans-serif"}}>
                    Account successfully created! Welcome to Monci Chat
                    </div>}
            </div>
            </Form>
            </Container>
            </Zoom>
      </div>
    );
  }
  
  export default Register;
  