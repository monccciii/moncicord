import React, { useReducer } from 'react';
import { useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import '../styles/main.css';
import MessageComp from './messageComp';


function Chat() {
    const [user, setUser] = useState('');
    const [messages, setMessages] = useState( [] ); 
    const [messagecontent, setMessagecontent] = useState({
        from: '',
        chat: "",
    })

    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

    const [tmpmsgcontent, setTmpmsgcontent] = useState('')
    useEffect(() => {
        setUser(localStorage.getItem('loggedInas'))

    })


function getMessages() {
    axios.get("http://localhost:3001/messages")
    .then(res => {
        console.log(res);
        setMessages(res.data);
    })
    .catch(err => console.log(err));
}

useEffect(() => {
    getMessages()

}, [reducerValue]);

    console.log(user)

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(user)
        setMessagecontent((prev) => {
            return {
                ...prev,
                [name]: value,
                from: user
            }
        })
        console.log(messagecontent)
    }

    const handleClick = (e) => {
        e.preventDefault();

        axios
        .post("http://localhost:3001/sendmessage", messagecontent)
        .then(res => console.log(res))
        .catch((err) => console.log(err))
        forceUpdate()
        forceUpdate()
    }


    return (
        <div>
      <div style={{width:'90%', margin:'auto auto', textAlign:'center'}}>
      <h1>Chat</h1>
      </div>
        <Container>
            <Row className='fluidcontainerbox'>
                <Col>
                {messages.map((message) =>
                <MessageComp
                name={message.from}
                message={message.messagecontent}
                />
                )

                }
                </Col>
            </Row>
            <Row className='entertext'>
                <Col>
                <Form>
                    <Form.Group>
                        <Form.Control 
                        name="chat"
                        value={messagecontent.chat}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Button
                    variant="outline-success"
                    onClick={handleClick}
                    >
                        SEND MESSAGE
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  
  export default Chat;
  