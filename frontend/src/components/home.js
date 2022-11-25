import React from 'react';
import { useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import { Button, Form, Container, Row, Col, Image} from "react-bootstrap";

import ico from '../styles/images/discordicon.png';
import backgroundimg1 from '../styles/images/backgroundimg1.png';

function Home() {
    return (
      <div>
        <div className='upperdiv'>
            <Container>
                <Row>
                    <Col>
        <nav>
            <ul className='navbar_'>
            <img className='ico' src={ico}></img>
                <li className='companyname'>Discord</li>
                <Button className='buttonb' variant='outline-light' href='/login'>Login</Button>
                <Button className='buttonb' variant='outline-light' href='/register'>Register</Button>
            </ul>
        </nav>
            <Image className='responsiveimg1' src={backgroundimg1}></Image>
            <p className='upperdivtext'>Available on all devices.</p>
            <p className='upperdivtext'>Anytime.</p>
            <p className='upperdivtext'>&nbsp;Anywhere.</p>
                    </Col>
                </Row>
        </Container>
        </div>
        <div className='lowerdiv'>
            <Container>
                <Row>
                    <Col>
                    <h1 style={{textAlign:'center', marginTop:'5vh'}}>Imagine a place where you can be you.</h1>

                    </Col>
                </Row>
            </Container>
        </div>
      </div>
    );
  }
  
  export default Home;
  