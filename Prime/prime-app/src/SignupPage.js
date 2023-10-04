import React, { useState } from 'react'

const SignupPage = () => {
    
const[data,setdata]=useState({
  Name:"",
  UserName:""
})
const HandleChange=(e)=>{
  const {name,value}= e.target;
  setdata((prevdata)=>({
    ...prevdata,
    [name]:value
  }))
}
        
    const HandleSubmit=(e)=>{
        e.preventDefault();
        console.log(data);
    };
    

  return (
    <div>
    <form onSubmit={HandleSubmit}>
      <label>Name:</label><br></br>
      <input type='text' name='Name' value={data.Name} onChange={HandleChange}></input>
      <label>User Name:</label>
      <br></br>
      <input type='text' name='UserName' value={data.UserName} onChange={HandleChange}></input><br></br>
      <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default SignupPage
