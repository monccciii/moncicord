import React from 'react';
import { useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import { Button, Form, Container, Row, Col, Image, Card } from "react-bootstrap";

import ico from '../styles/images/discordicon.png';
import backgroundimg1 from '../styles/images/backgroundimg1.png';
import disonl from '../styles/images/disonl.png'
import dispc from '../styles/images/dispc.png'
import disphone from '../styles/images/disphone.jpg'

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
                <li id='indented' className='li2'>Login</li>
                <li className='li2'>Register</li>
                <li className='li2'>About</li>
                <li className='li2'>Availability</li>
                {/* insert dropdown that appears for mobile users */}

            </ul>
        </nav>
            <Image className='responsiveimg1' src={backgroundimg1}></Image>
            <p style={{marginTop:'15vh'}}className='upperdivtext'>Available on <em><u>all devices.</u></em></p><br />
            <p className='upperdivtext'>Available <em><u>anywhere.</u></em></p> <br />
            <p className='upperdivtext'>Available at <em><u>anytime.</u></em></p>
            <div>
            <p className='upperdivtext'><em><br></br>What are you waiting for?</em></p>
            </div>
            <br></br>
            <br></br>

            <Button size="lg" className='disbutton' href='/register'>Start now!</Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                    </Col>
    
                </Row>
        </Container>
        </div>
        <div className='lowerdiv'>
            <Container>
                <Row>
                    <Col>
                    <h1 style={{textAlign:'center', marginTop:'5vh'}}>Imagine a place where you can be you.<br/><br/> </h1>
                    <h2 style={{textAlign:'center', marginTop:'5vh'}}>Discord is that place.<br/><br/><br/><br/><br/> </h2>
                    </Col>
                </Row>
                <Row style={{margin:'0 10%'}}>
                    <br></br>
                    <Col className='lowerdivcard'sm>
                        
                    <Card style={{ width: '18rem', textAlign:'center' }}>
      <Card.Img variant="top" src={disphone} />
      <Card.Body>
        <Card.Title>Mobile</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-dark" disabled>Currently Unavailable.</Button>
      </Card.Body>
    </Card>


                    </Col>
                    <Col className='lowerdivcard'sm>

                    <Card style={{ width: '18rem', textAlign:'center' }}>
      <Card.Img variant="top" src={dispc} />
      <Card.Body>
        <Card.Title>Desktop</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-dark" disabled>Currently Unavailable.</Button>
      </Card.Body>
    </Card>

                    </Col>
                    <Col className='lowerdivcard'sm>
                        
                    <Card style={{ width: '18rem', textAlign:'center' }}>
      <Card.Img variant="top" src={disonl} height='200px' width='auto'/>
      <Card.Body>
        <Card.Title>Site</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-dark" disabled>Currently Unavailable.</Button>
      </Card.Body>
    </Card>
</Col>
                </Row>
            </Container>
        </div>
        <Container fluid>
            <Row>
                <div className='footer'>
            
                </div>
            </Row>
        </Container>

      </div>
    );
  }
  
  export default Home;
  