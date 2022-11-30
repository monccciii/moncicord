import React, { useReducer } from 'react';
import { useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import '../styles/main.css';
import MessageComp from './messageComp';
import discordicon from '../styles/images/discordicon.png'
import Zoom from 'react-reveal/Zoom';

function Chat() {
    const [user, setUser] = useState('');
    const [messages, setMessages] = useState( [] ); 
    const [messagecontent, setMessagecontent] = useState({
        from: '',
        chat: "",
    });
    const [chatroomname, setChatroomname] = useState({
        chatroomname: ''
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
    console.log(chatrooms)
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
        const evt = e.target.value
        setChatroomname({chatroomname:evt});
       
    }

    const handleClick = (e) => {
        e.preventDefault();

        axios
        .post("http://localhost:3001/sendmessage", messagecontent)
        .then(res => console.log(res))
        .catch((err) => console.log(err))
        messagecontent.chat = ''
       forceUpdate()
        forceUpdate()
    }

    const handleClickChatroomName = (e) => {
        e.preventDefault();

        console.log("bruh:", chatroomname)
        axios
        .post("http://localhost:3001/createchatroom", chatroomname)
        .then(res => console.log(res))
        .catch((err) => console.log(err))
        console.log("bruh:", chatroomname)
        e.target.value = ''
       forceUpdate()
        forceUpdate()
        forceUpdate()
    }

    return (
        <div className='chatbg outline'>
            <div className='chatheader'>
                <img style={{width:'20px', display:'inline'}}src={discordicon}></img>
                <p style={{display:'inline', fontFamily:"'Racing Sans One', cursive"}}>&nbsp;&nbsp;Discord</p>
            </div>
        <Container >
            <Row className='fluidcontainerbox fluidcontainerbox2'>
                <Col sm={2}>
                <h1 style={{fontSize:'2vw', fontFamily:"'Roboto', sans-serif"}}>Chatrooms</h1>
                <p style={{fontFamily:"'Roboto', sans-serif"}}>Current Room: Main</p>
                <hr />
                <a href="/chat">
                <MessageComp
                name="Main" 
                />
                </a>
                {chatrooms.map((chatroom)=>
                <Zoom>
                <a href={'/chat/' + chatroom.chatroomname}>
                <MessageComp
                name={chatroom.chatroomname}
                onClick={() => {console.log(chatroom.chatroomname)}}
                />
                </a>
                </Zoom>
                )


                }
                </Col>
                <Col sm={8}>
                {messages.map((message) =>
                <Zoom>
                <MessageComp
                name={message.from}
                message={message.messagecontent}
                />
                </Zoom>
                )
                }
                </Col>
            </Row>
            <Row className='entertext'>
                <Col sm={4}>
                    <Form>
                        <Form.Group>
                          <Form.Control 
                          name='chatroomname'
                          className='forcedbg'
                          onChange={handleChangeChatroomName}
                          /> 
                        </Form.Group>
                    </Form>
                    <br />
                    <Button
                    variant="outline-light"
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
                        className='forcedbg'
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <br></br>
                    <Button
                    variant="outline-light"
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
  