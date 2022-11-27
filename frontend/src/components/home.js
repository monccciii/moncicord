import React from 'react';
import { useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import { Button, Form, Container, Row, Col, Image, Card, CardGroup, Accordion } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

import ico from '../styles/images/discordicon.png';
import backgroundimg1 from '../styles/images/backgroundimg1.png';
import disonl from '../styles/images/disonl.png'
import dispc from '../styles/images/dispc.png'
import disphone from '../styles/images/disphone.jpg'


function Home() {
    const navigate = useNavigate()
    const handleAvailabilityClick = () => {
        document.getElementById("availability").scrollIntoView({ behavior: "smooth" });
      };


      const handleAboutClick = () => {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
      };
    const redirectToLogin = () => {
        navigate('/login')
    }
    const redirectToRegister = () => {
        navigate('/register')
    }



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
                <li id='indented' className='li2'onClick={redirectToLogin}>Login</li>
                <li className='li2' onClick={redirectToRegister}>Register</li>
                <li className='li2' onClick={handleAboutClick}>About</li>
                <li className='li2' onClick={handleAvailabilityClick}>Availability</li>
                {/* insert dropdown that appears for mobile users */}

            </ul>
        </nav>
            <Fade>
            <Image className='responsiveimg1' src={backgroundimg1}></Image>
            </Fade>
            <p style={{marginTop:'15vh'}}className='upperdivtext'>Available on <em><u>all devices.</u></em></p><br />
            <p className='upperdivtext'>Available <em><u>anywhere.</u></em></p> <br />
            <p className='upperdivtext'>Available at <em><u>anytime.</u></em></p>
            <div>
            <p className='upperdivtext'><em><br></br>What are you waiting for?</em></p>
            </div>
            <br></br>
            <br></br>
            <Pulse>
            <Button size="lg" className='disbutton' href='/register'>Start now!</Button>
            </Pulse>
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
                    <Col id='about'>
                    <h1 style={{textAlign:'center', marginTop:'5vh'}}>Imagine a place where you can be you.<br/><br/> </h1>
                    <Fade>
                    <h2 style={{textAlign:'center', marginTop:'5vh'}}>Discord is that place.<br/> </h2>
                    <p style={{fontFamily:"'Roboto', sans-serif"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis mattis nulla at tempor. Morbi consequat, justo ac tincidunt cursus, est justo consequat ligula, id pharetra justo nulla a est. Nulla sed convallis nisi. Etiam viverra quam blandit, convallis nunc quis, bibendum odio. Etiam molestie efficitur sodales. Mauris eget diam a erat porttitor vehicula ac vitae quam. Quisque sed nunc elit. Aenean a dui vel est viverra vulputate. Fusce nec sapien eu diam ullamcorper varius a sed risus.</p>
                    <p style={{fontFamily:"'Roboto', sans-serif"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis mattis nulla at tempor. Morbi consequat, justo ac tincidunt cursus, est justo consequat ligula, id pharetra justo nulla a est. Nulla sed convallis nisi. Etiam viverra quam blandit, convallis nunc quis, bibendum odio. Etiam molestie efficitur sodales. Mauris eget diam a erat porttitor vehicula ac vitae quam. Quisque sed nunc elit. Aenean a dui vel est viverra vulputate. Fusce nec sapien eu diam ullamcorper varius a sed risus.</p>
                    <p style={{fontFamily:"'Roboto', sans-serif"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis mattis nulla at tempor. Morbi consequat, justo ac tincidunt cursus, est justo consequat ligula, id pharetra justo nulla a est. Nulla sed convallis nisi. Etiam viverra quam blandit, convallis nunc quis, bibendum odio. Etiam molestie efficitur sodales. Mauris eget diam a erat porttitor vehicula ac vitae quam. Quisque sed nunc elit. Aenean a dui vel est viverra vulputate. Fusce nec sapien eu diam ullamcorper varius a sed risus.<br/><br/><br/><br/><br/><br/></p>
                    </Fade>
                    </Col>
                </Row>
              
                <Row style={{margin:'0 10%', display: 'flex'}}>
                    <br></br>
                    <Col id='availability'className='lowerdivcard'sm>
                        
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
        
        <div className='footer'>
            <p>hki</p>
        <img style={{height:'5vh', width: 'auto', marginLeft:'5vw', display:'inline'}}src={ico}></img>
        <p style={{fontFamily:"'Racing Sans One', cursive", marginLeft:'1vw', color:'white', display:'inline'}}>Discord</p>
        <Container>
            <Row>
                <Col style={{color:'white'}}>
                Product
                </Col>
                <Col style={{color:'white'}}>
                Company
                </Col>
                <Col style={{color:'white'}}>
                Resources
                </Col>
                <Col style={{color:'white'}}>
                Policies
                </Col>
            </Row>
        </Container>
            </div>
      </div>
    );
  }
  
  export default Home;
  