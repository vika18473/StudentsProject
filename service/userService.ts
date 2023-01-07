import jwt from "jsonwebtoken"


    export async function register(user:any){
    }
     
    export async function login(user:any){
        const token = jwt.sign({
        id:user.id,email:user.email,password:user.password
        },
    "secret123",
    {expiresIn: '24h'})
    return token
    }

    export async function getMe(user:any){

    }

    export async function updateUser(user:any){

    }


