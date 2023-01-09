import {EventsController} from "../Controller/WsController"

export async function verify(io:any) {
    EventsController.connection(io)
    io.on("close",EventsController.disconnection)
    io.on("message",(message:string)=>{
        let data:any= message 
        switch(data.event){
            case "attack":
                EventsController.attack(io,data)
                break
            case "ability":
                EventsController.ability(io,data)
                break
            case "restore":
                EventsController.restore(io,data)
                break
            case "message":
                EventsController.message(io,data)
                break
            }
        })
}