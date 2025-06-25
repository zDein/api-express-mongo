import mongoose from "mongoose";
import { RequisitionError } from "./RequisitionError";

export class ValidationError extends RequisitionError {
    constructor(error: mongoose.Error.ValidationError){
        const messageError = Object.values(error.errors)
            .map(error => error.message)
            .join("\n")
        ;
        
        super(`Erro na validação dos dados! ${messageError}`);
    }
}