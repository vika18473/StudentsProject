import { verify } from "./middleware/EventHandler";
import express from "express"
import {Server}  from "socket.io"
import {router} from "./router/router"
import {Check} from "./middleware/checkAuth"
import handlerValidError  from "./middleware/handlerValidationError";
import {EventsController} from "./Controller/WsController"
import {db} from "./db_postgres/db"
import {Users} from "./db_postgres/UsersModel"
import {Classes} from "./db_postgres/ClassesModel"

const app = express();
app.use(express.json());
app.use('/', router);

app.use(handlerValidError);

// app.listen(3000,() => {
// console.log("Server started")
// })

async function start() {
    try {
      app.listen(3000, async()=>{
        console.log("Server started : 3000")
      });
  
await db.authenticate()
    await Classes.sync()
    await Users.sync()
    console.log("database connection")
} catch (error) {
  console.log(error)
}
}
start()

//ws
const io = new Server(3001) 
// io.on('connection', (socket: any) => {
//     EventsController.connection(io);
//  });

io.use(Check.CheckWsToken).on("connection", verify)





