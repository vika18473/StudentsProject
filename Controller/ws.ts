import {EventService} from "../service/ws-Service"

 export class EventsController {
    static connection(io: any, socket: any) {
       console.log(`A new user with id: ${socket.id} has connected.`);
 
       socket.on("join", (id: string, username: string) => {
 
          io.sockets.emit('someoneJoin', {data : id,username})
 
          // получать и различать события
 
          //примітивний middleware
         // socket.use(Event.forOll);
 
          // атака
          // {
          //     "userId": number;
          // }
        //   socket.on('attack', async (req: any) => {
        //      // // атака
        //      // //  Возвращаем измененную сессию целевого юзера всем подписчикам
        //      await EventService.attack(req.userId)
        //         .then((updatedUser) => io.sockets.emit('attack', updatedUser))
        //         .catch((err) => {
        //            myEmitter.emit('error', err);
        //            // throw new Error(err);
        //         });
        //   });
 
          // применение способности
          // {
          //     "userId": number;
          // }
        //   socket.on('ability', async (req: any) => {
        //      // применение способности
        //      //  Возвращаем измененную сессию целевого юзера всем подписчикам
        //      await EventService.ability(req.userId)
        //         .then((updatedUser) => io.sockets.emit('ability', updatedUser))
        //         .catch((err) => {
        //            myEmitter.emit('error', err);
        //            // throw new Error(err);
        //         });
        //   });
 
          // сообщение
        //   {
        //       "message": string;
        //   }
        
          socket.on('message', async (req: any) => {
             // сообщение
             //  Отправляем сообщение всем подписчикам
             await EventService.message(req.message)
                .then((userMessage) => io.sockets.emit('message', {data : {message: userMessage}}))
                .catch((err) => {
                throw new Error(err);
                });
          });
        // socket.on("message", function(msg:any) {
        //     console.log("tuta")
        //     io.emit("message", msg);
        //   });
 
          // возрождение
          // {
          // }
        //   socket.on('restore', async () => {
        //      // возрождение
        //      //  Возвращаем обновленную сессию целевого юзера всем подписчикам
        //      await EventService.restore()
        //         .then((updatedUser) => socket.emit('restore', updatedUser))
        //         .catch((err) => {
        //            myEmitter.emit('error', err);
        //            // throw new Error(err);
        //         });
        //   });
 
          // отключение
          // удаляем сессию из mongodb
          // убираем юзера из подписчиков ws сервера
          socket.on('disconnect', (reason: any) => {
             console.log(reason);
             io.sockets.emit('someoneDisconnect', {data : id, username})
          });
       })
    }
 
 }
 