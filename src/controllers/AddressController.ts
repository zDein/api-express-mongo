
import AddressRepository from "../repositories/AddressRepository";
import { Request, Response } from "express";

class AddressController {
    async index(req: Request, res: Response) {
        try {
            const getAllAddress = await AddressRepository.findAll();
            res.status(200).json(getAllAddress);
        } catch (error) {
            res.status(400).json({ message: error })
            throw error;
        }
    }

    async show(req: Request, res: Response) {
        try {
            const addressId = req.params.id;
            const getAddress = await AddressRepository.findbyId(addressId);
            res.status(200).json(getAddress);
        } catch (error) {
            res.status(400).json({ message: error })
            throw error;
        }
    }

    async storage(req: Request, res: Response) {
        try {
            const newAddress = await AddressRepository.create(req.body);
            res.status(201).json({ message: "Usuario criado com sucesso!", data: newAddress });
        } catch (error) {
            res.status(400).json({ message: `Algo deu errado! - ${error}` });
            throw error;
        }
    }

    async update(req: Request, res: Response) {
        try {
            const addressId = req.params.id;
            const data = req.body;

            await AddressRepository.update(addressId, data);

            res.status(200).json({ message: "Usuario atualizado!" });
        } catch (error) {
            res.status(400).json({ message: `Algo deu errado! - ${error}` })
            throw error;
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await AddressRepository.delete(req.params.id);
            res.status(200).json({ message: "Usuario deletado com sucesso!" });
        } catch (error) {
            res.status(400).json({ message: "Falha ao deletar o usuario!", error: error });
            throw error;
        }
    }
}

export default new AddressController();