import React, { useEffect } from 'react'
import {user} from "../join/Join"
import socketIo from "socket.io-client"
import "./Chat.css"
const ENDPOINT = "http://localhost:8081"

export const Chat = () => {
const socket=socketIo(ENDPOINT,{transports:['websocket']})

useEffect(()=>{

    socket.on("connect",()=>{
    alert(`joined user ${user}`)
    })

    socket.emit("joined",{user})

socket.on('welcome',(data)=>{
  console.log(data.user,data.message)
})

socket.on("userJoined",(data)=>{

  console.log(data.user,data.message)

})

return ()=>{

}

},[socket])


    console.log(user)
  return (
    <div className='chatPage' >
    <div
    className='chatContainer'
    >

<div className='header'></div>
<div className='chatBox'></div>
<div className='inputBox'>


<input type="text" id='chatInput' />
<button className='sendBtn' ><img src="https://static.thenounproject.com/png/1015122-200.png"/></button>
</div>

</div>
    
    {user}
    </div>
  )
}
