import axios from "axios"

const BaseURL= axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        "Authorization":`Bearer ${JSON.parse(localStorage.getItem("login"))}`,
        'Access-Control-Allow-Origin': '*',
        "ngrok-skip-browser-warning": "any",    
        "Content-Type":"application/json",
        "Accept":"application/json",
      
      }
   
  });
  export default BaseURL