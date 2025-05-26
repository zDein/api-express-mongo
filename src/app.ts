import express, { Request, Response } from "express";
import routes from "./routes/index";

export const app = express();
app.use(express.json())

routes(app);

app.get("/", (req: Request, res: Response) => {
    const message = "Curso de Node.JS";
    res.send(message || "Route not found");
})
