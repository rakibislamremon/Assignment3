import express from "express";
// import { login } from "../app/controllers/todoController.js";
import * as TodoController from "../app/controllers/todoController.js"
const router = express.Router();

router.get("/login", TodoController.login);

export default router;
