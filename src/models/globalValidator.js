import mongoose from "mongoose";

// todos os campos do tipo String
mongoose.Schema.Types.String.set("validate", { 
    validator: (valor) => valor !== "",
    message:({ path }) =>  `Atenção: Campo "${ path }" está em branco!`
});