import { User } from "../models/User";

class UserRepository {
    async findAll(): Promise<object | void> {
        try {
            return await User.find({});
        } catch (error) {
            console.error("Erro ao buscar os usuários!")
            throw error;
        }
    }

    async findbyId(id: string): Promise<object | void | null> {
        try {
            if (!id) {
                return;
            }

            return await User.findById(id);
        } catch (error) {
            console.error("Erro ao tentar encontrar o usuário!")
            throw error;
        }
    }

    async findByCountry(country: string): Promise<object | void> {
        try {
            if (!country) {
                return;
            }

            return await User.find({ "address.country": country });
        } catch (error) {
            console.error("Não foi possível encontrar os usuários!")
            throw error;
        }
    }

    async create(data: JSON): Promise<object | void> {
        try {
            if (!data) {
                return;
            }

            return await User.create(data);
        } catch (error) {
            console.error("Não foi possível criar um novo usuário!")
            throw error;
        }
    }

    async update(id: string, data: JSON): Promise<object | void | null> {
        try {
            if (!id || !data) {
                return;
            }

            return await User.findByIdAndUpdate(id, data);
        } catch (error) {
            console.error("Erro ao atualizad o usuário!")
            throw error;
        }
    }

    async delete(id: string): Promise<object | void> {
        try {
            if (!id) {
                return;
            }

            await User.findByIdAndDelete(id);
        } catch (error) {
            console.error("Erro ao apagar o usuário!")
            throw error;
        }
    }
}

export default new UserRepository();