import jwt from "jsonwebtoken"
import { jwtSecret } from "../config"

export class UserService {
    static async register(user:any){
    }
     
    static async  login(user:any){
        const token = jwt.sign({
        id:user.id,email:user.email,password:user.password
        },
        jwtSecret,
    {expiresIn: '24h'})
    return token
    }

    static async  getMe(user:any){

    }

    static async  updateUser(user:any){

    }

}
