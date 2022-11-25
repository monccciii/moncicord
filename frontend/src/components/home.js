import React from 'react';
import { useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import { Button, Form } from "react-bootstrap";


function Home() {
    return (
      <div style={{width:'90%', margin:'auto auto', textAlign:'center'}}>
            <h1>Home</h1>
            <Button
            style={{marginRight:'3vw'}}
            href='/login'
            variant='outline-dark'>
            Login
            </Button>
            <Button
            href='/register'
            variant='outline-dark'>
            Register
            </Button>
      </div>
    );
  }
  
  export default Home;
  