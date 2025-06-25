import { BaseError } from "./BaseError";

export class RequisitionError extends BaseError {   
    constructor(message = "Um ou mais dados fornecidos estão incorretos") {
        super(message, 400);
    }
}