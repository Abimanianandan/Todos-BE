const todoController = require("../controller/todoController");
const express = require("express")

const todoRouter = express.Router();

todoRouter.post("/create",todoController.createTodo)
todoRouter.get("/allTodos",todoController.getAllTodos)
todoRouter.get("/:id",todoController.getTodoById)
todoRouter.put("/:id",todoController.updateTodos)
todoRouter.delete("/:id",todoController.deleteTodos)

module.exports = todoRouter;