import { Address } from "../models/Address";
import UserRepository from "../repositories/UserRepository";
import { NextFunction, Request, Response } from "express";

class UserController {
    async index(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getAllUsers = await UserRepository.findAll();

            if (getAllUsers) {
                res.status(200).json(getAllUsers);
            } else {
                res.status(400).json({ message: "Não foi possível localizar os usuários!" })
            }
        } catch (error) {
            next(error);
        }
    }

    async show(req: Request, res: Response, next: NextFunction) {
        const userId = req.params.id;

        try {
            const getUser = await UserRepository.findbyId(userId);

            if (getUser) {
                res.status(200).json({ message: "Usuário encontrado!", data: getUser });
            } else {
                res.status(400).send({ message: "Usuário não encontrado!" })
            }

        } catch (error) {
            next(error);
        }
    }

    async showByCountry(req: Request, res: Response, next: NextFunction): Promise<void> {
        const country = req.query.country as string;

        try {
            const usersByCountry = await UserRepository.findByCountry(country);

            if (usersByCountry) {
                res.status(200).json({ message: "Usuários encontrados", data: usersByCountry });
            } else {
                res.status(400).send({ message: "Usuários com país " + country + " não encontrados!" })
            }

        } catch (error) {
            next(error);
        }
    }

    async storage(req: Request, res: Response, next: NextFunction): Promise<void> {
        const newUser = req.body;

        try {
            const findedAddress = await Address.findById(newUser.Address)
            const completeUser = {
                ...newUser,
                address: findedAddress?.toObject()
            }

            await UserRepository.create(completeUser);
            res.status(201).json({ message: "Usuario criado com sucesso!", data: newUser });
        } catch (error) {
    console.log("**** O errorMiddleware foi acionado! ****");

            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        const userId = req.params.id;
        const data = req.body;
        
        try {
            const updatedUser = await UserRepository.update(userId, data);
            
            if(updatedUser){
                res.status(200).json({message: "Usuario atualizado com sucesso!", data: updatedUser})
            }else{
                res.status(400).send({message: "Não foi possível atualizar o usuário!"})
            }

        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await UserRepository.delete(req.params.id);
            res.status(200).json({ message: "Usuario deletado com sucesso!" });
        } catch (error) {
            next(error);
        }
    }

}

export default new UserController();