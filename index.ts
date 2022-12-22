import express from "express"
import WebSocket  from "ws"
import {router} from "./router/router"

const app = express();
app.use(express.json());
app.use('/', router);

app.listen(3000,() => {
console.log("Server started")
})

//ws
const ws = new WebSocket.Server({
  port:3001
}) 

ws.on("connection",(ws)=>{
  console.log("new connection")
  ws.on("message",(message:string)=>{
    let data = (JSON.parse(message))
    
    if(data.message == "hit"){
      console.log("hittt")
      ws.send(`hit ${data.id}`)
    }
    if(data.message == "ability"){
      ws.send(`ability ${data.id}`)
    }
  })
})





