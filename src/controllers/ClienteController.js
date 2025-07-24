import Cliente from "../models/Cliente.js"

class ClienteController {

    //GET - Listar todos Clientes
    static async listarClientes(req, res) {
        try {
            const clientes = await Cliente.find();
            res.status(200).json(clientes);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    //GET - Buscar Cliente por Id
    static async buscarClientePorId (req, res) {
        try {
            const cliente = await Cliente.findById(req.params.id);

            if(!cliente) return res.status(404).json({ message: "Cliente não encontrado!"});
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    //POST - Criar cliente
    static async criarCliente (req,res) {
        try {
            const novoCliente = await Cliente.create(req.body);
            res.status(201).json({
                message: "Cliente criado com sucesso!",
                novoCliente
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    //PUT - Atualizar Cliente por Id
    static async atualizaClientePorId (req, res){
        try {
            const clienteAtualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if(!clienteAtualizado) return res.status(404).json({ message: "Cliente não encontrado!" });

            res.status(200).json({ message: "Cliente atualizado com sucesso!", clienteAtualizado })
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    //DELETE - Deleta cliente por Id
    static async deletarClientePorId (req, res){
        try {
            const cliente = await Cliente.findByIdAndDelete(req.params.id);
            if(!cliente) return res.status(404).json({ message: "Cliente não encontrado!"});
            res.status(200).json({ message: "Cliente removido com sucesso!", cliente })
        } catch (error) {
             res.status(500).json({
                message: error.message
            });
        }
    };
}

export default ClienteController;