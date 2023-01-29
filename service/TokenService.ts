import jwt from "jsonwebtoken"
import { jwtSecret } from "../config"

export const generateJwt = (user : any, id: number,  email: string) => {
    const token = jwt.sign({
        id:user.id,email:user.email,password:user.password
        },
        jwtSecret,
    {expiresIn: '24h'})
    return token
    }
