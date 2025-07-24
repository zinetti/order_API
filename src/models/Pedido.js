import mongoose, { mongo } from "mongoose";

const pedidoSchema = new mongoose.Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente", require: true },
    pratos: [
        {
            prato: { type: mongoose.Schema.Types.ObjectId, ref: "Prato", require: true },
            quantidade: { type: Number, require: true }
        }
    ],
    total: { type: Number, require: true },
    status: { type: String, enum: ["pendente", "preparando", "entregue"], default: "pendente" }
}, { timestamps: true, versionKey: false });

const Pedido = mongoose.model("Pedido", pedidoSchema, "Pedido");
export default Pedido;