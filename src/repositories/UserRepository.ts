import mongoose from "mongoose";
import { User } from "../models/User";
import { Address } from "../models/Address";

class UserRepository {
    async findAll() {
        try {
            const usersList = await User.find({});
            return usersList;
        } catch (error) {
            console.error("Erro ao buscar os usuários!")
            throw error;
        }
    }

    async findbyId(id: any) {
        try {
            const user = await User.findById(id);
            return user;
        } catch (error) {
            console.error("Erro ao tentar encontrar o usuário!")
            throw error;
        }
    }

    async findByCountry(country: string): Promise<any> {

        if(!country){ 
            return; 
        }
        return await User.find({ "address.country": country });
    }

    async create(data: any): Promise<any> {
        try {
            const createdUser = await User.create(data);
            return createdUser;
        } catch (error) {
            console.error("Não foi possível criar um novo usuário!")
            throw error;
        }
    }

    async update(id: string, data: JSON) {
        try {
            await User.findByIdAndUpdate(id, data);
        } catch (error) {
            console.error("Erro ao atualizad o usuário!")
            throw error;
        }
    }

    async delete(id: string) {
        try {
            await User.findByIdAndDelete(id);
        } catch (error) {
            console.error("Erro ao apagar o usuário!")
            throw error;
        }
    }
}

export default new UserRepository();