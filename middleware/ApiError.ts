export class ApiError extends Error {
     public status:number
     public message: any
 
    constructor(status: number, message: string) {
       super(message);
       this.status = status;
       this.message = message
    }
 
    static BadRequest(message: string) {
       return new ApiError(400, message);
    }

    static UnAuth(message:string) {
        return new ApiError(401, message);
     }
 }