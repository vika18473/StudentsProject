
export async function login(req:any,res:any){
    try {
        const {email,password} = req.body
        return res.json({message:"create JWT token"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Failed to login "})
    }
}

export async function register(req:any,res:any){
    try {
        const {email, password1, password2 , CharactersClass} = req.body
        if(password1 !== password2){
            return res.status(400).json({message:"Passwords do not match "})
        }
        return res.status(201).json({success:true})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Failed to register "})
    }
}


export async function updateMe(req:any,res:any){
    try {
        const id = req.userId
        const {newpassword1,newpassword2} = req.body
        if(newpassword1 !== newpassword2){
            return res.status(400).json({message:"Passwords do not match "})
        }
        return res.json({message:"create new JWT"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Something went wrong "})
    }
}



