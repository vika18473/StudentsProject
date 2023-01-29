import {UserService} from "../service/userService"
import { NextFunction } from 'express';

export class UserController{
     static async login(req:any,res:any){
       
         await UserService.login(req.body)
         .then((user) => {
            res.status(200).json(user);
         })
         .catch((err)=> res.status(500).json({message:"Failed to login "}))
    
    }

    static async register(req:any,res:any){
       
            await UserService.register(req.body)
            .then((user) => {
                return res.status(200).json(user)
            })
            .catch((err)=> res.status(500).json({message:"Failed to register "}))
    }

     static async update(req:any,res:any, next: NextFunction){

            await UserService.updateUser(req.body)
            .then((newUser)=>{
                res.status(200).json(newUser)
            })
            .catch((err) =>{
                console.log(err)
                res.status(500).json({message:"Failed to update "})})
    }

//    static async getMe(req:any, res: any){
//     try {
//         const user = await UserService.getMe(req.userId)
//         return res.json(user)
//     } catch (error) {
//         return res.status(500).json({message:"Something went wrong "})
//     }
//    }

}










