import { Response } from "express";

export class BaseError extends Error {
    statusCode: number;
    message: string;

    constructor(message = "Erro interno do servidor", statusCode = 500) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }


    showError(res: Response) {
        res.status(this.statusCode).send({ 
            message: this.message, 
            status: this.statusCode 
        })
    }
}