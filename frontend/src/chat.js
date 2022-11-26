import React, { useReducer } from 'react';
import { useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import '../styles/main.css';
import MessageComp from './messageComp';
import chatroomComp from './chatroomComp';


function Chat() {
    const [user, setUser] = useState('');
    const [messages, setMessages] = useState( [] ); 
    const [messagecontent, setMessagecontent] = useState({
        from: '',
        chat: "",
    });
    const [chatroomname, setChatroomname] = useState({
        name: ''
    });
    const [chatrooms, setChatrooms] = useState( [] );
    const [currentChatroom, setcurrentChatroom] = useState();

    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        setUser(localStorage.getItem('loggedInas'))
        getMessages()

    }, [reducerValue]);


function getMessages() {
    axios.get("http://localhost:3001/messages")
    .then(res => {
        console.log(res);
        setMessages(res.data);
    })
    .catch(err => console.log(err));
}

function getChatrooms() {
    axios.get("http://localhost:3001/chatrooms")
    .then(res => {
        console.log(res);
        setChatrooms(res.data);
    })
    .catch(err => console.log(err));
}

useEffect(() => {
    getMessages();
    getChatrooms();

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

    const handleChangeChatroomName = (e) => {
        const { name, value } = e.target;
        setChatroomname({name: {value}})
       
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

    const handleClickChatroomName = (e) => {
        e.preventDefault();

        console.log("bruh:", chatroomname)
        console.log(chatroomname.name)
        axios
        .post("http://localhost:3001/createchatroom", chatroomname)
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
                <Col sm={4}>
                <h1>Chatrooms</h1>
                <hr />

                {chatrooms.map((chatroom) =>
                <MessageComp
                name={chatroomname}
                />
                )

                }

                </Col>
                <Col sm={8}>
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
                <Col sm={4}>
                    <Form>
                        <Form.Group>
                          <Form.Control 
                          name='name'
                          value={chatroomname}
                          onChange={handleChangeChatroomName}
                          /> 
                        </Form.Group>
                    </Form>
                    <br />
                    <Button
                    variant="outline-dark"
                    onClick={handleClickChatroomName}
                    >
                        MAKE CHATROOM
                    </Button>
                </Col>
                <Col sm={8}>
                <Form>
                    <Form.Group>
                        <Form.Control 
                        name="chat"
                        value={messagecontent.chat}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <br></br>
                    <Button
                    variant="outline-dark"
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
  