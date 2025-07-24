import express from "express";
import clientes from "./clienteRoutes.js";
import pratos from "./pratoRoutes.js";
import pedidos from "./pedidoRoutes.js"

const routes = (app) => {
    app.use(express.json());

    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
    
    app.use(
        clientes, 
        pratos,
        pedidos
    );

}

export default routes;