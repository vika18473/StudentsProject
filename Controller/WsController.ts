import {EventService} from "../service/ws-Service"


let users:any = []

export class EventsController {
    static async connection(io: any) {
        users.push(io)
       console.log(`new connetction ${io.id} user.`);
    }

    static async disconnection(io: any){
        users.forEach(function (value:any,i:number) {
            if(value.readyState !== 1) {
                users.splice(i, 1)
            }
        })
    }

    static async attack(io:any , data:any){
        console.log("attack")
        io.send(`attack ${data.id}`)
    }
    static async ability(io:any , data:any){
        console.log("ability")
        io.send(`protected ${data.id}`)
    }
    static async restore(io:any , data:any){
        console.log("restore")
        io.send(`restore ${data.id}`)
    }

    static async message(io:any, data:any){
        users.forEach(function (value:any) {
                return value.emit("message", data.message)
        })
    }
    }
