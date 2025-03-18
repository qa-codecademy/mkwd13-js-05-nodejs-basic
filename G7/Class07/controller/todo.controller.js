import TodoModel from "../models/todo.model.js";

class TodoController {
    constructor() {
        this.todoModel = new TodoModel();
    };

    async getTodos(request, response) {
        console.log("#1. The controller consumes the request and calls coresponding method from the model")
        const todos = await this.todoModel.listTodos();

        console.log("#3. Once the model returns data to the controller, the controller using the response object returns the data to the user/client.")
        response.send(todos);
    }

    async createTodo(request, response) {
        const body = request.body;

        const id = await this.todoModel.addTodo(body);

        response.send({ message: `Todo created.`, id: id })
    }

    async getTodoDetails(request, response){
        const id = request.params.id;

        const todoFound = await this.todoModel.getTodo(id);

        if(!todoFound){
            response.status(404).send({message: `Todo with id: ${id} not found`});
            return;
        }

        response.send(todoFound)
    }

    async completeTodo(request, response){
        const id = request.params.id;

        await this.todoModel.completeTodo(id);

        response.send({message: `Todo with id: ${id} is completed.`})
    }
}

export default TodoController