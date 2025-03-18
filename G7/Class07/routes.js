import express from "express";
import { readTodos, createTodo } from "./database.service.js";
import { v4 as uuid } from "uuid";
import TodoController from "./controller/todo.controller.js";

// This router is going to handle the routes for todos
const todoRouter = express.Router()

const todoController = new TodoController()
/**
 * HTTP URL => localhost:3001/todos
 * HTTP METHOD => GET
 */
todoRouter.get('/todos', async (request, response) => {
    // const todos = await readTodos()
    // response.send(todos);

    // SAME AS ABOVE BUT INSTEAD WE USE MVC
    todoController.getTodos(request, response)
});

/**
 * HTTP URL => localhost:3001/todos
 * HTTP METHOD => POST
 */
todoRouter.post('/todos', async (request, response) => {
    // const body = request.body; // the data send from the client within the request (postman)
    // console.log(body);

    // const newTodo = {
    //     id: uuid(),
    //     title: body.title,
    //     status: 'PENDING'
    // };

    // await createTodo(newTodo)
    // response.send({ message: `Todo created.`, id: newTodo.id })

    todoController.createTodo(request, response)
});


/**
 * HTTP URL => localhost:3001/todos/{some_todo_id}
 * HTTP METHOD => GET
 */

todoRouter.get('/todos/:id', (request, response) => {
    todoController.getTodoDetails(request, response)
});

/**
 * HTTP URL => localhost:3001/todos/{some_todo_id}
 * HTTP METHOD => PUT
 */
todoRouter.put('/todos/:id', (request, response) => {
    todoController.completeTodo(request, response)
})

export default todoRouter;