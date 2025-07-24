import mongoose, { Mongoose } from "mongoose";

const conectaBanco = async() => {
     try {
        await mongoose.connect(process.env.DB_CONNECTION);
        return mongoose.connection;
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.error("Erro na conexão com o MongoDB:", error.message);

    }
}

export default conectaBanco;