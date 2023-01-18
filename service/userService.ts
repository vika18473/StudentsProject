import jwt from "jsonwebtoken"
import { jwtSecret } from "../config"
import {Users} from "../db_postgres/UsersModel"
import {Classes} from "../db_postgres/ClassesModel"
import bcrypt from "bcrypt"
import { ApiError } from "../middleware/ApiError"
import {generateJwt} from "./TokenService"



export class UserService {
    
    static async register(user:any){
        
        const {email,password, name, class_id} = user
        if(!user.email || !user.password){
            throw ApiError.BadRequest("Incorrect email or password")
        }
        const candidate = await Users.findOne({where:{email:email}})
        if(candidate){
            throw ApiError.BadRequest("This user already exists")
         }
        const hashPassword = await bcrypt.hash(password,5)
        let userid = await Users.create({email, password: hashPassword, name, class_id})
        const token = generateJwt(userid, userid.id, userid.email)
        return {token, userid}
    
    }
    
     
    static async login(user:any){
        
        const {email, password} = user
        const candidate = await Users.findOne({where : {email}})
        if(!candidate){
            throw ApiError.BadRequest("This user does not exist")
        }
        const comparePassword = await bcrypt.compare(password, candidate.password)
        if(!comparePassword){
            throw ApiError.BadRequest("Wrong username or password")
        }

        const token = generateJwt(candidate, candidate.id, candidate.email)
        return {token, candidate}

    }

    // static async  getMe(user:any){
    //     try {
    //         const {id} = user.id
    //         const user1 = await Users.findOne({where: {id:user.id}})
    //         const UserClasses = await Classes.findAll({where: {Users:user.id}})
    //         console.log(user1)
           
    //         if(!user1){
    //             return res.status(401).json({message:"Пользователь не найден"})
    //         }
    //         const {password,...user} = user1.dataValues
    //         console.log(user1)
    //         res.status(200).json(user)
    //     } catch (error) {
            
    //     }
    // }

    static async  updateUser(user:any){
        const {email,password,name} = user
        const candidate = await Users.findOne({where:{email:email,name:name}})
        if(candidate){
            return ApiError.BadRequest("This user already exists")
        }
        const hashPassword = await bcrypt.hash(password,5)
        user.password = hashPassword
        await Users.update({email:user.email,password:user.password,name:user.name,class_id:user.class_id},{where:{id:user.id}})
        const token = generateJwt(user, user.id, user.email)
        return {token, user}
    }

}
