import { Address } from "../models/Address";

class AddressRepository {
    async findAll() {
        try {
            const addressList = await Address.find({});
            return addressList;
        } catch (error) {
            console.error("Erro ao buscar os endereços!")
            throw error;
        }
    }

    async findbyId(id: string) {
        try {
            const address = await Address.findById(id);
            return address;
        } catch (error) {
            console.error("Erro ao tentar encontrar o endereço!")
            throw error;
        }
    }

    async create(data: JSON) {
        try {
           await Address.create(data);

        } catch (error) {
            console.error("Não foi possível criar um novo usuário!")
            throw error;
        }
    }

    async update(id: string, data: JSON) {
        try {
            await Address.findByIdAndUpdate(id, data);
        } catch (error) {
            console.error("Erro ao atualizar o endereço!")
            throw error;
        }
    }

    async delete(id: string) {
        try {
            await Address.findByIdAndDelete(id);
        } catch (error) {
            console.error("Erro ao apagar o endereço!")
            throw error;
        }
    }
}

export default new AddressRepository();