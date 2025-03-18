import fsPromises from "fs/promises";

export const readTodos = async () => {
    const todosDocument = await fsPromises.readFile("./database/todos.json", "utf8");
    const todos = JSON.parse(todosDocument);

    return todos
}

export const createTodo = async (newTodo) => {
    const todos = await readTodos();
    todos.push(newTodo);

    await fsPromises.writeFile('./database/todos.json', JSON.stringify(todos));
} 

export const completeTodo = async (todoID) => {
    const todos = await readTodos();

    const updatedTodos = todos.map((todo) => {
        if(todo.id === todoID){
            return {
                ...todo, // return all of the properties of the found todo
                status: "COMPLETED"
            }
        }
        return todo;
    })

    await fsPromises.writeFile('./database/todos.json', JSON.stringify(updatedTodos))
}