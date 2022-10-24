// import socketIO from "socket.io-client"
import './App.css';
import {Route,Routes} from "react-router-dom"
import Join  from "./component/join/Join"
import { Chat } from './component/Chat/Chat';

// const ENDPOINT="http://localhost:8081/"
// const socket=socketIO(ENDPOINT,{transports:['websocket']})

function App() {
  // socket.on('connect',()=>{

  //   console.log("new connection")

  // })


  return (
    <div className="App">

<Routes>
<Route path="/" element={<Join/>} />
<Route path="/chat" element={<Chat/>} />


</Routes>

    </div>
  );
}

export default App;
