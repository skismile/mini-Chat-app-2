const http=require("http")
const express=require("express")
const cors=require("cors")
const socketIO =require("socket.io")
// const {Server} =require("socket.io")
const app=express()



const users=[{}]

app.use(cors())
const server=http.createServer(app)
const io= socketIO(server)
// const io= new Server(server)


io.on("connection",(socket)=>{
console.log("new connect")

socket.on("joined",({user})=>{

    users[socket.id]=user
console.log(`user joined ${user}`)
})
socket.brodcast.emit('userJoined',{user:"Admin",message:`${user[socket.id]} has joined`})


socket.emit("welcome",{user:"Admin",message:`Welcome to the chat`})

})


app.get('/',(req,res)=>{
    res.send("working")
})


server.listen(8081,()=>{

    console.log("connected 8081")
})