import mongoose, { mongo } from "mongoose";

const clienteSchema = new mongoose.Schema({
    nome: { type: String, required:[true, "O nome é obrigatório"] },
    email: { type: String, required: [true, "O email é obrigatório"], unique: true },
    telefone: { type: String },
    endereco: { type: String }
}, { timestamps: true, versionKey: false })

const Cliente = mongoose.model("Cliente", clienteSchema, "Cliente");
export default Cliente;