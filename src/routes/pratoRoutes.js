import express from "express";
import PratoController from "../controllers/PratoController.js";

const router = express.Router();

router.get("/pratos", PratoController.listarPratos);
router.get("/pratos/busca", PratoController.listarPratosComFiltros);
router.get("/pratos/:id", PratoController.buscarPratoPorId);
router.post("/pratos", PratoController.criarPrato);
router.put("/pratos/:id", PratoController.atualizarPrato);
router.delete("/pratos/:id", PratoController.deletarPrato);

export default router;
