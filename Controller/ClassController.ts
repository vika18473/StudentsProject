import {ClassService} from "../service/ClassService"

export async function getAllCharacters(req:any,res:any){
    const classService = new ClassService()
    try {       
        const list = classService.getListCharacters()
        if(list){
            return res.json(list)
        }
    } catch (error) {
        return res.status(500).json({message:"Try again later"})
    }
}


