const { Router } = require("express");
const routes = Router();

const AuthController = require("./controllers/AuthController");

// Autenticação de Usuários
routes.post("/auth/register", AuthController.register);

module.exports = routes;
