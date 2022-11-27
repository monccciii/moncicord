import React from 'react';
import { useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import { Button, Form } from "react-bootstrap";
import '../styles/main.css'


function MessageComp(props) {
    return (
        <div className='message'>
            <h1 className='fromname'>{props.name}</h1>
            <p className='textcontent'>{props.message}</p>
        </div>
    );
  }
  
  export default MessageComp;
  