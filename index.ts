import { verify } from "./middleware/EventHandler";
import express from "express"
import {Server}  from "socket.io"
import {router} from "./router/router"
import {Check} from "./middleware/checkAuth"
import { handlerValidError } from "./middleware/handlerValidationError";
import {EventsController} from "./Controller/WsController"

const app = express();
app.use(express.json());
app.use('/', router);

app.use(handlerValidError);

app.listen(3000,() => {
console.log("Server started")
})

//ws
const io = new Server(3001) 
// io.on('connection', (socket: any) => {
//     EventsController.connection(io);
//  });

io.use(Check.CheckWsToken).on("connection", verify)





