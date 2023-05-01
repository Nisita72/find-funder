import React,{useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import BaseURL from "../AxiosFunction";
import { Button } from 'reactstrap';
import { MDBIcon } from "mdb-react-ui-kit"
import { ToastContainer, toast } from "react-toastify";

export default function AdminInvestor() {
 
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = async () => {
    try {
      const response = await BaseURL.get(
        "/api/Admin/Investor",
      );
      console.log("investor", response);
      setdata(response.data.items);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleDelete = async (event, param ) => {

    if ( window.confirm("Do you Want To Delete Investor!") == true) {
      try {

        let result = await  BaseURL.delete(`/api/Admin/Investor/${param}`)
        console.log("result", result);

        fetchData();
        if (result.status == 200) {
          toast.success("Investor Deleted succesfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
         
        } 
        
      } catch (error) {
        console.log("error", error);
        toast.error("Investor Not Deleted", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } 
  };

  return (
    <div>
      <Sidebar/>
      <div className='main'>
      <table class="table  table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Investor Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1)}&nbsp;{item.lastName.charAt(0).toUpperCase() + item.lastName.slice(1)}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td><MDBIcon class="fas fa-trash-can"  style={{fontSize:"19px",color:"tomato"}} onClick={(event) => handleDelete(event, item.id)}   /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer/>
    </div>
  )
}
// import React, { useState } from 'react';

// const FAQ = ({ questions }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleClick = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   const renderQuestions = () => {
//     return questions.map((question, index) => {
//       const active = index === activeIndex;
//       return (
//         <div key={index}>
//           <div className={`question ${active ? 'active' : ''}`} onClick={() => handleClick(index)}>
//             {question.title}
//           </div>
//           <div className={`answer ${active ? 'active' : ''}`}>
//             {question.answer}
//           </div>
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="faq">
//       {renderQuestions()}
//     </div>
//   );
// };

// export default FAQ;
// <FAQ
//   questions={[
//     {
//       title: 'What is React?',
//       answer: 'React is a JavaScript library for building user interfaces.'
//     },
//     {
//       title: 'What are the key features of React?',
//       answer: 'React provides a virtual DOM, reusable components, and a unidirectional data flow.'
//     },
//     {
//       title: 'How do I install React?',
//       answer: 'You can install React using npm or yarn.'
//     }
//   ]}
// />
// This component uses the useState hook to keep track of which question is currently active. When a question is clicked, the handleClick function is called with the index of the clicked question. If the clicked question is already active, the active index is set to null to collapse the answer. Otherwise, the active index is set to the clicked question's index to expand the answer.

// The renderQuestions function maps over the array of questions and creates a div element for each question and answer. The active variable is set to true if the current index matches the active index, and is used to conditionally apply the active class to the question and answer div elements.

// This is just a basic example, and you can customize the styling and behavior of the FAQ component to fit your specific needs.






