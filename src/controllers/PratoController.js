import { Prato } from "../models/index.js";

class PratoController {
  static async listarPratos(req, res, next) {
    try {
      const pratos = await Prato.find();
      res.status(200).json(pratos);
    } catch (error) {
      next(error);
    }
  }

  static async listarPratosComFiltros(req, res, next) {
    const { categoria } = req.query;

    try {
      const filtro = {};

      if (categoria) filtro.categoria = new RegExp(`^${categoria}$`, 'i');

      const pratos = await Prato.find(filtro);
      res.status(200).json(pratos);
    } catch (error) {
      next(error);
    }
  };

  static async buscarPratoPorId(req, res, next) {
    try {
      const prato = await Prato.findById(req.params.id);
      if (!prato) return res.status(404).json({ message: "Prato não encontrado" });
      res.status(200).json(prato);
    } catch (error) {
      next(error);
    }
  }

  static async criarPrato(req, res, next) {
    try {
      const novoPrato = await Prato.create(req.body);
      res.status(201).json(novoPrato);
    } catch (error) {
      next(error);
    }
  }

  static async atualizarPrato(req, res, next) {
    try {
      const pratoAtualizado = await Prato.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!pratoAtualizado) return res.status(404).json({ message: "Prato não encontrado" });
      res.status(200).json(pratoAtualizado);
    } catch (error) {
      next(error);
    }
  }

  static async deletarPrato(req, res, next) {
    try {
      const prato = await Prato.findByIdAndDelete(req.params.id);
      if (!prato) return res.status(404).json({ message: "Prato não encontrado" });
      res.status(200).json({ message: "Prato removido" });
    } catch (error) {
      next(error);
    }
  }
}

export default PratoController;
