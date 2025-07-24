import mongoose, { mongo } from "mongoose";

const clienteSchema = new mongoose.Schema({
    nome: { type: String, require:true },
    email: { type: String, require: true, unique: true },
    telefone: { type: string },
    endereco: { type: string }
}, { timeseries: true, versionKey: false })

const Cliente = mongoose.model("Cliente", clienteSchema);
export default Cliente;