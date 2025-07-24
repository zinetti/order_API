import express from "express";
import ClienteController from "../controllers/ClienteController.js";

const routers = express.Router();

routers.get("/clientes", ClienteController.listarClientes);
routers.get("/clientes/:id", ClienteController.buscarClientePorId);

routers.post("/clientes", ClienteController.criarCliente);

routers.put("/clientes/:id", ClienteController.atualizaClientePorId);

routers.delete("/clientes/:id", ClienteController.deletarClientePorId);

export default routers;