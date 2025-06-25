 
import { NextFunction, Request, Response } from "express";
import { NotFound } from "../Errors/NotFound";

export function page404middleware(req: Request, res: Response, next: NextFunction){
    const error404 = new NotFound();

    next(error404);
}