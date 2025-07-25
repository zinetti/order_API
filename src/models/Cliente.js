import mongoose, { mongo } from "mongoose";

const clienteSchema = new mongoose.Schema({
    nome: {
         type: String, 
         required:[true, "O nome é obrigatório"],
         minlength: [3, "O nome deve ter pelo menos 3 caracteres"],
         maxlength: [100, "O nome não pode ultrapassar 100 caracteres"],
         trim: true
        },
    email: { 
        type: String, 
        required: [true, "O email é obrigatório"], 
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Informe um email válido"]
    },
    telefone: { 
        type: String,
        validate: {
            validator:  (v) =>  /^(\+?\d{1,3}[- ]?)?\d{8,15}$/.test(v), // aceita +DDI e 8 a 15 dígitos
            message: props => `${props.value} não é um número de telefone válido`
        },
        trim:true
    },
    endereco: { 
        type: String,
        maxlength: [200, "O endereço não pode ultrapassar 200 caracteres"],
    }
}, { timestamps: true, versionKey: false })

const Cliente = mongoose.model("Cliente", clienteSchema, "Cliente");
export default Cliente;