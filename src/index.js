import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css" 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/login'
import Register from './components/register'
import Chat from './components/chat';
import MessageComp from './components/messageComp';
import Home from './components/home';
import ChatroomsChat from './components/chatroomschat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:crn" element={<ChatroomsChat />} />
        <Route path="/messagetest" element={<MessageComp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();