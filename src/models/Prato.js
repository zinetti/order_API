import mongoose from "mongoose";

const pratoSchema = new mongoose.Schema({
    nome: { type: String, require: true },
    descricao: { type: String },
    preco: { type: Number, require: true},
    categoria: { type: String }
}, { timestamps: true, versionKey: false });


const Prato = mongoose.model("Prato", pratoSchema);
export default Prato;