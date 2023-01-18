import {UserService} from "../service/userService"

export class UserController{
     static async login(req:any,res:any){
        try {
            const token = await UserService.login(req.body)
                return res.json(token)
        } catch (error) {
            return res.status(500).json({message:"Failed to login "})
        }
    }

    static async register(req:any,res:any){
        try {
            //const user = await UserService.register(req.body)
            const token = await UserService.register(req.body)
            return res.json(token)
            //return res.status(201).json(user)
         
        } catch (error) {
            return res.status(500).json({message:"Failed to register "})
        }
    }

     static async update(req:any,res:any){
        try {
            const newUser = await UserService.updateUser(req.body)
            return res.json(newUser)
        } catch (error) {
            return res.status(500).json({message:"Something went wrong "})
        }
    }

   static async getMe(req:any, res: any){
    try {
        const user = await UserService.getMe(req.userId)
        return res.json(user)
    } catch (error) {
        return res.status(500).json({message:"Something went wrong "})
    }
   }

}










