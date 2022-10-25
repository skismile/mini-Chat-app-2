import React from 'react'
import "./Join.css"
import {Link} from "react-router-dom"
import { useState } from 'react';


let user; 
// ff
const sendUser=()=>{
user=document.getElementById("joininput").value
  document.getElementById("joininput").value=""

}
const Join = () => {

  const [name, setname] = useState("")


  return (
    <div className='JoinPage'>
    
    <div className='JoinContainer' >
    <img src="https://static.vecteezy.com/system/resources/previews/000/561/457/original/chat-app-logo-icon-vector.jpg" />
    <h1>Chat app</h1>
    <input onChange={((e)=>setname(e.target.value))} placeholder='enter your name' type='text' id='joininput' />
   <Link onClick={(e)=>!name?e.preventDefault():null} to='/chat'> <button onClick={sendUser} className='joinbtn' >abc</button></Link>
    </div>
    



    </div>
  )
}

export default Join
export {user}