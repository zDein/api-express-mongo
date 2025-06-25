/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { BaseError } from "../Errors/BaseError";
import { RequisitionError } from "../Errors/RequisitionError";
import { ValidationError } from "../Errors/ValidationError";
import { NotFound } from "../Errors/NotFound";

export function errorMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
    console.log("**** O errorMiddleware foi acionado! ****");

    if (error instanceof mongoose.Error.CastError) {
        new RequisitionError().showError(res);
    } else if (error instanceof mongoose.Error.ValidationError) {
        new ValidationError(error).showError(res);
    } else if (error instanceof NotFound){
        error.showError(res);
    } 
    else {
        new BaseError().showError(res);
    }
}