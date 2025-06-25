import AddressRepository from "../repositories/AddressRepository";
import { NextFunction, Request, Response } from "express";

class AddressController {
    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const getAllAddress = await AddressRepository.findAll();
            res.status(200).json(getAllAddress);
        } catch (error) {
            next(error);
        }
    }

    async show(req: Request, res: Response, next: NextFunction) {
        try {
            const addressId = req.params.id;
            const getAddress = await AddressRepository.findbyId(addressId);
            res.status(200).json(getAddress);
        } catch (error) {
            next(error);
        }
    }

    async storage(req: Request, res: Response, next: NextFunction) {
        try {
            const newAddress = await AddressRepository.create(req.body);
            res.status(201).json({ message: "Endereço criado com sucesso!", data: newAddress });
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const addressId = req.params.id;
            const data = req.body;

            await AddressRepository.update(addressId, data);

            res.status(200).json({ message: "Endereço atualizado!" });
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            await AddressRepository.delete(req.params.id);
            res.status(200).json({ message: "Endereço deletado com sucesso!" });
        } catch (error) {
            next(error);
        }
    }
}

export default new AddressController();