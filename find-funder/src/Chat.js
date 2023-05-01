// import React, { useEffect, useState } from 'react'

// export default function Chat({socket,userName,ChatId}) {
//     const[CurrentMessage,setCurrentMessage]=useState("")

//     const sendMessage= async (event)=>{
//             event.preventDefault();
//         if(CurrentMessage!==""){
//             const messageData={
//                 room:ChatId,
//                 author:userName,
//                 message:CurrentMessage
//             }
//             await socket.emit("sendMessage",messageData)

//         }
        
//     }
//     useEffect(()=>{
//         socket.on("message",(data)=>{
//             console.log(data);
//         })

//     },[socket])
//   return (
//     <div>
//         <div className='chat-header'>
//             <p>Live Chat</p>
//         </div>
//         <div className='chat-body'></div>
//         <div className='chat-footer'>
//             <input type="text" placeholder='Hey...' onChange={(e)=>setCurrentMessage(e.target.value)}/>
//             <button onClick={sendMessage}>&#9658;</button>
//         </div>
      
//     </div>
//   )
// }


// // import React, { useState, useEffect } from 'react';
// // import io from 'socket.io-client';

// // const ENDPOINT = 'http://localhost:3000'; // replace with your server endpoint

// // const Chat = () => {
// //   const [socket, setSocket] = useState(null);
// //   const [messages, setMessages] = useState([]);
// //   const [message, setMessage] = useState('');

// //   useEffect(() => {
// //     const newSocket = io(ENDPOINT);
// //     setSocket(newSocket);

// //     return () => newSocket.close();
// //   }, []);

// //   useEffect(() => {
// //     if (socket) {
// //       socket.on('message', (data) => {
// //         setMessages((prevMessages) => [...prevMessages, data]);
// //       });
// //     }
// //   }, [socket]);

// //   const sendMessage = (event) => {
// //     event.preventDefault();
// //     if (message) {
// //       socket.emit('message', message);
// //       setMessage('');
// //     }
// //   };

// //   return (
// //     <div>
// //       <ul>
// //         {messages.map((msg, index) => (
// //           <li key={index}>{msg}</li>
// //         ))}
// //       </ul>
// //       <form onSubmit={sendMessage}>
// //         <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
// //         <button type="submit">Send</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Chat;
