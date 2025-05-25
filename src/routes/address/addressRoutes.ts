import express from "express";
import AddressController from "../../controllers/AddressController";

export const addressRoute = express.Router();

addressRoute.get("/address", AddressController.index);
addressRoute.get("/address/:id", AddressController.show);
addressRoute.post("/address", AddressController.storage);
addressRoute.put("/address/:id", AddressController.update);
addressRoute.delete("/address/:id", AddressController.delete);