import mongoose from "mongoose";

const pratoSchema = new mongoose.Schema({
    nome: { type: String, required: [true, "Nome do prato é obrigatório!"] },
    descricao: { type: String },
    preco: { type: Number, required: [true, "Preço do prato é obrigatório!"]},
    categoria: { type: String }
}, { timestamps: true, versionKey: false });


const Prato = mongoose.model("Prato", pratoSchema, "Prato");
export default Prato;