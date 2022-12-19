export async function getAllClass(req:any,res:any){
    try {       
        return res.json({message:"Сlass list"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Try again later"})
    }
}


