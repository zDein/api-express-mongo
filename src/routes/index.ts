import express, {Request, Response} from "express";
import { userRoute } from "./users/usersRoutes";
import { addressRoute } from "./address/addressRoutes";


const routes = (app: express.Application) => {
    app.route("/").get((req: Request, res: Response) => {
        const message = "Curso de Node.JS";
        res.send(message || "Route not found");
    })

    app.use(userRoute, addressRoute);
}

export default routes;