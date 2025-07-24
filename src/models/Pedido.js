import mongoose, { mongo } from "mongoose";

const pedidoSchema = new mongoose.Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente", required: [true, "Cliente é obrigatório!"] },
    pratos: [
        {
            prato: { type: mongoose.Schema.Types.ObjectId, ref: "Prato", required: [true,"Prato é obrigatório!" ] },
            quantidade: { type: Number, require: true }
        }
    ],
    total: { type: Number, required: [true, "Total é obrigatório"] },
    status: { type: String, enum: ["pendente", "preparando", "entregue"], default: "pendente" }
}, { timestamps: true, versionKey: false });

const Pedido = mongoose.model("Pedido", pedidoSchema, "Pedido");
export default Pedido;