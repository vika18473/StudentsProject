import  jwt from "jsonwebtoken";

export default (req:any, res:any, next:any) => {
 const token = (req.headers.authorization || "").replace(/Bearer\s?/, '');
  
 if(token){
    try {
        const decoded = jwt.verify(token, "secret123")
        req.user = decoded
        next()
    } catch (err) {
        return res.status(403).json({
            message : "No access"
        })
    }
 }else{
    return res.status(403).json({
        message : "No access"
    })
 }

}