// import {Create} from "./characters/Chair"
import express from "express"
import WebSocket  from "ws"
import {login,register,updateMe}  from "./Controller/UserController"
import {getAllClass} from"./Controller/CharacterController"

const app = express()
app.use(express.json())


app.post("/auth/register", register)
app.post("/auth/login", login)
app.patch("/me/:id", updateMe)
app.get("/class", getAllClass)



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

// let pers1 = Create.createPers("Magician")
// let pers2 = Create.createPers("Warrior")
// let pers3 = Create.createPers("Thief")
// let pers4 = Create.createPers("NO")


// console.log(pers1)
// console.log(pers2)
// console.log(pers3)
// console.log(pers4)



