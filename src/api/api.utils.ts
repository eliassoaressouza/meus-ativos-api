import { HttpStatus } from "@nestjs/common"
import { Response } from 'express';
export class ApiUtils{
    

    static responseConflito(mensagem:string,res:Response){
        res.status(HttpStatus.CONFLICT).json(<ErrorResponse>{
            message:mensagem,
            statusCode:HttpStatus.CONFLICT
        });
    }
    
}

export interface ErrorResponse{
    statusCode:number;
    message:string;
}