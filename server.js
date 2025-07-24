import express from "express";
import dotenv from "dotenv";
import conectaBanco from "./src/config/db.js";
import routes from "./src/routes/index.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

conectaBanco();

routes(app);

app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
});