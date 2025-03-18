import { readTodos, createTodo, completeTodo } from "../database.service.js"
import {v4 as uuid} from "uuid";

class TodoModel {
    async listTodos(){
        const todos = await readTodos()
        console.log("#2. The model proccesses the task and returns result/data (view) back to the controller")
        return todos;
    }

    async addTodo(body){
        const newTodo = {
            id: uuid(),
            title: body.title,
            status: 'PENDING'
        };

        await createTodo(newTodo);

        return newTodo.id;
    }

    async getTodo(todoID){
        const todos = await readTodos();

        const todoFound = todos.find((todo) => todo.id === todoID);

        return todoFound
    }

    async completeTodo(todoID){
        await completeTodo(todoID)
    }
};

export default TodoModel;