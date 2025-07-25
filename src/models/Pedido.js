import mongoose, { mongo } from "mongoose";

const pedidoSchema = new mongoose.Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente", required: [true, "Cliente é obrigatório!"] },
    pratos: [
        {
            prato: { type: mongoose.Schema.Types.ObjectId, ref: "Prato", required: [true,"Prato é obrigatório!" ] },
            quantidade: {
                type: Number,
                required: [true, "A quantidade é obrigatória"],
                min: [1, "A quantidade mínima é 1"],
                max: [1000, "A quantidade máxima é 1000"]
            }
        }
    ],
    total: { type: Number, required: [true, "Total é obrigatório"], min: [0, "O total não pode ser negativo"] },
    status: { type: String, enum: ["pendente", "preparando", "entregue"], default: "pendente" }
}, { timestamps: true, versionKey: false });

const Pedido = mongoose.model("Pedido", pedidoSchema, "Pedido");
export default Pedido;