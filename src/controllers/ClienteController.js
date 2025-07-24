import NotFound from "../error/NotFound.js";
import Cliente from "../models/Cliente.js"

class ClienteController {

    //GET - Listar todos Clientes
    static async listarClientes(req, res, next) {
        try {
            const clientes = await Cliente.find();
            res.status(200).json(clientes);
        } catch (error) {
            next(error)
        }
    };

    //GET - Buscar Cliente por Id
    static async buscarClientePorId (req, res, next) {
        try {
            const cliente = await Cliente.findById(req.params.id);

            if(!cliente) return res.status(404).json({ message: "Cliente não encontrado!"});
            res.status(200).json(cliente);
        } catch (error) {
            next(error)
        }
    };

    //POST - Criar cliente
    static async criarCliente (req,res, next) {
        try {
            const novoCliente = await Cliente.create(req.body);
            res.status(201).json({
                message: "Cliente criado com sucesso!",
                novoCliente
            })
        } catch (error) {
            next(error);
        }
    }

    //PUT - Atualizar Cliente por Id
    static async atualizaClientePorId (req, res, next){
        try {
            const clienteAtualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if(!clienteAtualizado) return next(new NotFound("ID do cliente não encontrado!"));

            res.status(200).json({ message: "Cliente atualizado com sucesso!", clienteAtualizado })
        } catch (error) {
            next(error);
        }
    };

    //DELETE - Deleta cliente por Id
    static async deletarClientePorId (req, res, next){
        try {
            const cliente = await Cliente.findByIdAndDelete(req.params.id);
            if(!cliente) return res.status(404).json({ message: "Cliente não encontrado!"});
            res.status(200).json({ message: "Cliente removido com sucesso!", cliente })
        } catch (error) {
             next(error);
        }
    };
}

export default ClienteController;