import express from "express";
import UserController from "../../controllers/UserController";

export const userRoute = express.Router();

userRoute.get("/users", UserController.index);
userRoute.get("/users/search", UserController.showByCountry);
userRoute.get("/users/:id", UserController.show);
userRoute.post("/users", UserController.storage);
userRoute.put("/users/:id", UserController.update);
userRoute.delete("/users/:id", UserController.delete);