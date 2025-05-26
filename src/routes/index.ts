import express from "express";
import { userRoute } from "./users/usersRoutes";
import { addressRoute } from "./address/addressRoutes";


const routes = (app: express.Application) => {
    app.use(express.json(), userRoute);
    app.use(express.json(), addressRoute);
}

export default routes;