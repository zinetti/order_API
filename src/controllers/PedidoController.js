import { populate } from "dotenv";
import Pedido from "../models/Pedido.js";
import Prato from "../models/Prato.js";

class PedidoController { 
    //GET- listar todos os pedidos
    static async listarPedidos (req, res){
        try {
            const pedidos = await Pedido.find().populate("cliente").populate("pratos.prato");
            res.status(200).json(pedidos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    //GET - lista com Filtros
    static async listaPedidosComFiltros(req, res){
        const { status, totalMin, totalMax } = req.query;

        try {
            const filtro = {};

            if (status) filtro.status = status.toLowwerCase();
            if (totalMin || totalMax ){
                filtro.total = {};
                if (totalMin) filtro.total.$gte = Number(totalMin);
                if(totalMax) filtro.total.$lte = Number(totalMax);
            }

            const pedidos = await Pedido.find(filtro).populate("ciente").populate("pratos.prato");
            
            res.status(200).json(pedidos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    //POST - criar Pedido
    static async criarPedido (req, res){
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
            res.status(500).json({ message: error.message });
        }
    };

    //PUT - Atualiza Pedido
    static async atualizaPedido(req, res) {
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
            res.status(500).json({ message: error.message });
        }
    }


    //DELETE - Deleta pedido por id
    static async deletarPedido (req, res){
        try {
            const pedidoDeletado = await Pedido.findByIdAndDelete(req.params.id);
            if (!pedidoDeletado) {
                return res.status(404).json({ message: "Pedido não encontrado" });
            }
            res.status(200).json({ message: "Pedido deletado com sucesso" });
        }catch (error) {
        res.status(500).json({ message: error.message });
        }
    };
}

export default PedidoController

