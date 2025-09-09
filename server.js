import express from "express";
import dotenv from "dotenv";
import conectaBanco from "./src/config/db.js";
import routes from "./src/routes/index.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import notFoundHandler from "./src/middlewares/notFoundHandler.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


routes(app);
app.use(notFoundHandler);
app.use(errorHandler);

conectaBanco()
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀 Servidor rodando na porta ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Não foi possível conectar ao banco:", err.message);
    process.exit(1); // encerra se não conectar
  });
