// import React, { useState } from 'react'
// import io  from "socket.io-client"
// import Chat from './Chat'

// const socket= io.connect("http://localhost:5071/chatHub")
// export default function Form() {

//  const[userName,setUserName]=useState("")
//  const[ChatId,setChatId]=useState("")


//  const joinChat=()=>{

//   if(userName!=="" && ChatId!== ""){
//     socket.emit("join chat",ChatId)
//   }
//  }

//   return (
//     <div>
//       <h3>Join  A Chat</h3>
//       <input type="text" placeholder='nisita...' onChange={(e)=>setUserName(e.target.value)}/>
//       <br/>
//       <input type="text" placeholder='chat Id..' onChange={(e)=>setChatId(e.target.value)}/>
//       <br/>
//       <button onClick={joinChat}>Join A Chat</button>
//       <Chat  socket={socket} userName={userName} ChatId={ChatId}/>
//     </div>
//   )
// }



import React, { useState, useEffect } from 'react';
import * as signalR from '@microsoft/signalr';

const Form = () => {
  const [connection, setConnection] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://192.168.1.14:7250/hubs/Chat')
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start().then(() => {
        console.log('SignalR Connected!');
      });

      connection.on('ReceiveMessage', (message) => {
        setMessages([...messages, message]);
      });
    }
  }, [connection, messages]);

  const sendMessage = () => {
    if (messageInput) {
      connection.invoke('SendMessage', messageInput);
      setMessageInput('');
    }
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Form;

