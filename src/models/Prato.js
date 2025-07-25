import mongoose from "mongoose";

const pratoSchema = new mongoose.Schema({
    nome: {
         type: String, 
         required: [true, "Nome do prato é obrigatório!"],
         minlength: [3, "O nome deve ter pelo menos 3 caracteres."],
         maxlength: [50, "O nome não pode ultrapassar 50 caracteres"],
         trim: true
        },
    descricao: {
         type: String,
         maxlength: [200, "A descrição nao pode ultrapassar 200 caracteres."],
         trim: true
        },
    preco: { 
        type: Number,
         required: true, 
         validate:{
            validator: (valor) => { return valor >= 0 && valor <= 2000 },
            message: "O preço deve estar entre R$0 e R$2.000,00. Valor fornecido R$ {VALUE}."
         },
         default: 0
         },
    categoria: {
         type: String,
         enum: {
            values: ["Entrada", "Prato Principal", "Sobremesa", "Bebida"],
            message: "{VALUE} não é uma categoria válida!"
         },
         required: [true, "Categoria é obrigatória!"]
        }
}, { timestamps: true, versionKey: false });


const Prato = mongoose.model("Prato", pratoSchema, "Prato");
export default Prato;