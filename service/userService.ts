import jwt from "jsonwebtoken"
import { jwtSecret } from "../config"
import {Users, Classes} from "../db_postgres/model"
import bcrypt from "bcrypt"
import { ApiError } from "../middleware/ApiError"



export class UserService {

    
    // static async generateJwt(user:any){
    // const token = jwt.sign({
    //     id:user.id,email:user.email,password:user.password
    //     },
    //     jwtSecret,
    // {expiresIn: '24h'})
    // return token
    // }
    
    static async register(user:any){
        try {
        const {email,password, name, class_id} = user
        if(!user.email || !user.password){
            return ApiError.BadRequest("Incorrect email or password")
        }
        const candidate = await Users.findOne({where:{email:email}})
        if(candidate){
           ApiError.BadRequest("This user already exists")
         }
        const hashPassword = await bcrypt.hash(password,5)
        let userid = await Users.create({email, password: hashPassword, name, class_id})
        const token = jwt.sign({
            id:userid.id,email:userid.email,password:userid.password
            },
            jwtSecret,
        {expiresIn: '24h'})
        return token
        } catch (error) {
            console.log(error)
            return ApiError.BadRequest("User already exists")
        }
    }
     
    static async  login(user:any){
        try {
         const {email, password} = user
        const candidate = await Users.findOne({where : {email}})
        if(!candidate){
           return ApiError.BadRequest("This user does not exist")
        }
        const comparePassword = await bcrypt.compare(password, candidate.password)
        if(!comparePassword){
            return ApiError.BadRequest("Wrong username or password")
        }

            const token = jwt.sign({
                id:candidate.id,email:candidate.email,password:candidate.password
                },
                jwtSecret,
            {expiresIn: '24h'})
            return token
        } catch (error) {
            return ApiError.BadRequest("Something went wrong")
        }
       
    }

    static async  getMe(user:any){
        try {
            const {id} = user.id
            const user1 = await Users.findOne({where: {id:user.id}})
            const UserClasses = await Classes.findAll({where: {Users:user.id}})
            console.log(user1)
           
            if(!user1){
                return res.status(401).json({message:"Пользователь не найден"})
            }
            const {password,...user} = user1.dataValues
            console.log(user1)
            res.status(200).json(user)
        } catch (error) {
            
        }
    }

    static async  updateUser(user:any){

    }

}
