import  jwt from "jsonwebtoken";
import { jwtSecret } from "../config";
import {ApiError} from "./ApiError"

export class Check{ 
    static async CheckAuth(req:any, res:any, next:any){
 const token = (req.headers.authorization || "").replace(/Bearer\s?/, '');
  
 if(token){
    try {
        const decoded = jwt.verify(token, jwtSecret)
        req.user = decoded
        next()
    } catch (err) {
        return next(ApiError.UnAuth("User not authorization"))
    }
 }else{
    return next(ApiError.UnAuth("User not authorization"))
 }

}

static async CheckWsToken(io: any, next: any){
    try {
        const tokenIo = io.handshake.headers.authorization
        if (!tokenIo) {
            return next(ApiError.UnAuth("User not authorization"))
        }
        const decodedIo = jwt.verify(tokenIo, jwtSecret)
        io.token = tokenIo
        next()
    } catch (error) {
        console.log(error)
        return next(ApiError.UnAuth("User not authorization"))
    }
}

}
