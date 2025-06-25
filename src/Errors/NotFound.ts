import { BaseError } from "./BaseError";

export class NotFound extends BaseError{
    constructor(){
        super("Página não encontrada", 404);
    }
}