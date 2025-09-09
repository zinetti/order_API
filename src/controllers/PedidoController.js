import { populate } from "dotenv";
import { Prato, Pedido, Cliente} from "../models/index.js"

class PedidoController { 
    //GET- listar todos os pedidos
    static async listarPedidos (req, res, next){
        try {
            const buscaPedidos = Pedido.find();

            req.resultado = buscaPedidos;
            next();
            
        } catch (error) {
            next(error)
        }
    };

    //GET - lista com Filtros
    static async listaPedidosComFiltros(req, res, next){
        const { status, totalMin, totalMax, nomeCliente } = req.query;

        try {
            const filtro = {};

            if (status) filtro.status = status.toLowwerCase();
            if (totalMin || totalMax ){
                filtro.total = {};
                if (totalMin) filtro.total.$gte = Number(totalMin);
                if(totalMax) filtro.total.$lte = Number(totalMax);
            };

            if(nomeCliente){
                const cliente = await Cliente.findOne({ nome: nomeCliente });
                if(cliente){
                    filtro.cliente = cliente._id
                }else{
                    return res.status(200).json([])
                }
            }

            const pedidos = await Pedido.find(filtro).populate("cliente").populate("pratos.prato");
            
            res.status(200).json(pedidos);
        } catch (error) {
            next(error);
        }
    };

    //POST - criar Pedido
    static async criarPedido (req, res, next){
        try {
            const { cliente, pratos } = req.body;

            let total = 0;
            for(const item of pratos){
                const prato = await Prato.findById(item.prato);
                if(!prato) return res.status(404).json({ message: `Prato não encontrado: ${ item.prato}`});
                total += prato.preco * item.quantidade;
            }

            const novoPedido = await Pedido.create({ cliente, pratos, total});
            res.status(201).json(novoPedido);
        } catch (error) {
            next(error);
        }
    };

    //PUT - Atualiza Pedido
    static async atualizaPedido(req, res, next) {
        const statusValidos = ["pendente", "preparando", "entregue"];
        
        try {
            const { cliente, pratos, status } = req.body;

            // Se status existir no corpo da requisição, valida
            if (status && !statusValidos.includes(status)) {
            return res.status(400).json({ message: "Status inválido." });
            }

            // Se prato estiver presente, recalcula total
            if (pratos) {
            let total = 0;
            for (const item of pratos) {
                const prato = await Prato.findById(item.prato);
                if (!prato) {
                return res.status(404).json({ message: `Prato não encontrado: ${item.prato}` });
                }
                total += prato.preco * item.quantidade;
            }
            req.body.total = total;  // Corrigido aqui: atualiza total com o calculado
            }

            const pedidoAtualizado = await Pedido.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
            );

            if (!pedidoAtualizado) {
            return res.status(404).json({ message: "Pedido não encontrado" });
            }

            res.status(200).json(pedidoAtualizado);

        } catch (error) {
            next(error);
        }
    }


    //DELETE - Deleta pedido por id
    static async deletarPedido (req, res, next){
        try {
            const pedidoDeletado = await Pedido.findByIdAndDelete(req.params.id);
            if (!pedidoDeletado) {
                return res.status(404).json({ message: "Pedido não encontrado" });
            }
            res.status(200).json({ message: "Pedido deletado com sucesso" });
        }catch (error) {
            next(error);
        }
    };
}

export default PedidoController

