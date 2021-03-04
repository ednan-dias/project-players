const { Router } = require("express");
const routes = Router();

const AuthController = require("./controllers/AuthController");
const CategoryController = require("./controllers/CategoryController");
const UserController = require("./controllers/UserController");

// Usuários
routes.get("/users", UserController.index);
routes.get("/user/:id", UserController.show);

// Autenticação de Usuários
routes.post("/auth/register", AuthController.register);
routes.get("/auth/verifyUser/:code", AuthController.verifyUser);

// Categorias
routes.get("/categories", CategoryController.index);

module.exports = routes;
