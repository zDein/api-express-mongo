/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from "express";
import routes from "./routes/index";
import { errorMiddleware } from "./middleware/error";
import { page404middleware } from "./middleware/404pagemiddleware";


export const app = express();
app.use(express.json())

// Rotas do aplicativo
routes(app);

// Middleware para a pagina 404
app.use(page404middleware);

// Middleware de erros
app.use(errorMiddleware);