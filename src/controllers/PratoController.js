import Prato from "../models/Prato.js";

class PratoController {
  static async listarPratos(req, res) {
    try {
      const pratos = await Prato.find();
      res.status(200).json(pratos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async listarPratosComFiltros(req, res) {
    const { categoria } = req.query;

    try {
      const filtro = {};

      if (categoria) filtro.categoria = new RegExp(`^${categoria}$`, 'i');

      const pratos = await Prato.find(filtro);
      res.status(200).json(pratos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static async buscarPratoPorId(req, res) {
    try {
      const prato = await Prato.findById(req.params.id);
      if (!prato) return res.status(404).json({ message: "Prato não encontrado" });
      res.status(200).json(prato);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async criarPrato(req, res) {
    try {
      const novoPrato = await Prato.create(req.body);
      res.status(201).json(novoPrato);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async atualizarPrato(req, res) {
    try {
      const pratoAtualizado = await Prato.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!pratoAtualizado) return res.status(404).json({ message: "Prato não encontrado" });
      res.status(200).json(pratoAtualizado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async deletarPrato(req, res) {
    try {
      const prato = await Prato.findByIdAndDelete(req.params.id);
      if (!prato) return res.status(404).json({ message: "Prato não encontrado" });
      res.status(200).json({ message: "Prato removido" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default PratoController;
