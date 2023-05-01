import React, { useState } from 'react'

export default function MovieDemo() {

    const data=[{
        title:"the lion",
        rating:"4.5",
        category:"fun",
    },
{
    title:"tigar",
    rating:"5.6",
    category:"angary",

},
{
    title:"zibra",
    rating:"6.1",
    category:"animal"
}]
  
    const[record,setrecord]=useState(data)
    // const[filterdata,setfilterData]=useState([])
    const[query,setquery]=useState("")
    const[rating,setRating]=useState([])
    // const[category,setCategory]=useState("")

console.log(rating);

  // const handleSearch = (value) => {

  //    const newData= record.filter((item)=>{
  //         if(searchdata===item.title||searchdata===item.rating||searchdata===item.category){
  //        return item
  //         }
  //     })

  //     setrecord(newData)
  // };


// console.log(searchdata);
// const handleChangeRating = (e) => {
//     console.log(e.target.value);
//     setRating(e.target.value)
// };
// const handleChangeCategory= (e) => {
//     console.log(e.target.value);
//     setCategory(e.target.value)
// };

//   const finaldata=data.filter((item)=>{
//      if(item.title===searchdata||item.rating===rating||item.category===category){
//         return item
//      }
//   })

  return (
    <div >
    
     <div>
     <input type="text"  value={query} onChange={(e)=>setquery(e.target.value)} placeholder='search' />
     <select  value={rating} onChange={(e)=>setRating( !rating.includes(e.target.value)?[...rating,e.target.value]:rating.filter((i,key)=>i!== e.target.value))} multiple={true}>
      <option value="rating">Rating</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
     </select>

     </div>
     <table class="table  table-hover table-striped">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Rating</th>
      <th scope="col">category</th>
   
    </tr>
  </thead>
  <tbody>
  {record.filter((item,index)=>
   item.title.toLowerCase().includes(query) && rating.length ? rating.includes(item.rating) : true).map((user)=>{
    return(
    <tr>
      <td>{user.title}</td>
      <td>{user.rating}</td>
      <td>{user.category}</td>
    </tr>)
})}
   
  </tbody>
</table>

   </div>
   
  )
}
