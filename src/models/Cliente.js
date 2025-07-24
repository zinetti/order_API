import mongoose, { mongo } from "mongoose";

const clienteSchema = new mongoose.Schema({
    nome: { type: String, require:true },
    email: { type: String, require: true, unique: true },
    telefone: { type: String },
    endereco: { type: String }
}, { timestamps: true, versionKey: false })

const Cliente = mongoose.model("Cliente", clienteSchema, "Cliente");
export default Cliente;