import express from "express";
import PedidoController from "../controllers/PedidoController.js";

const routers = express.Router();

routers.get("/pedidos", PedidoController.listarPedidos);
routers.get("/pedidos/busca", PedidoController.listaPedidosComFiltros);
routers.post("/pedidos", PedidoController.criarPedido);
routers.put("/pedidos/:id", PedidoController.atualizaPedido);
routers.delete("/pedidos/:id", PedidoController.deletarPedido);

export default routers;
