import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function testar() {
  try {
    // Conectar ao banco
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Conexão bem-sucedida!");

    // Listar coleções
    const colecoes = await mongoose.connection.db.listCollections().toArray();
    console.log("Coleções encontradas:", colecoes.map(c => c.name));

    // Buscar documentos na coleção clientes
    const clientes = await mongoose.connection.db.collection("Cliente").find().toArray();
    console.log("Clientes encontrados:", clientes);
  } catch (error) {
    console.error("Erro:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("Conexão fechada!");
  }
}

testar();
