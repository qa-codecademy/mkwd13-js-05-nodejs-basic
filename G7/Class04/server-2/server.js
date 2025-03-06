import http from "http";

const todos = [
    {id: 1, title: 'Learn nodejs.', isDone: false},
    {id: 2, title: 'Walk the dog.', isDone: false},
    {id: 3, title: 'Go to the store.', isDone: false}
];

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    console.log(url, method)
    // localhost:3001 && method is GET
    if(url === "/" && method === "GET"){
        
        return response.end('Server is live.')
    }

 
    // localhost:3001/todos
    if(url === '/todos' && method === "GET"){
        return response.end(JSON.stringify(todos));
    }

    if(url === '/todos' && method === "POST"){
        // POST method to create an entity into the database

        // ...logic to create something

        response.statusCode = 201; // by convention statusCode when creating new entity is 201 => CREATED
        return response.end(JSON.stringify({message: "Todo created"}))
    };


    const isTodoById = url.includes('todos/');
    // localhost:3001/todos/1 (/1 or any other number)
    if(isTodoById && method === "GET"){
        const urlSplitted = url.split('/')
        const id = urlSplitted[2];
        const todoFound = todos.find((todo) => todo.id === parseInt(id));

        if(todoFound){
            return response.end(JSON.stringify(todoFound))
        }

        const notFoundResponse = {
            message: `Todo with id: ${id} was not found`
        }

        // IF ENTITY(TODO) IS NOT FOUND => 404
        response.statusCode = 404;
        return response.end(JSON.stringify(notFoundResponse));
    }

    // Challenge #1
    /**
     *  FIND OUT HOW TO MAKE DELETE REQUEST
     *  - DELETE TODO BY GIVEN ID, MEANING IF THE URL IS /todos/1 I WOULD LIKE TO DELETE THE TODO WITH ID 1 FROM THE LIST OF TODOS
     *  - RETURN TO THE USER A MESSAGE THAT SAYS  `TODO WITH ID {id} WAS DELETED SUCCESFULLT`
     */
  

});

server.listen(3001, "localhost", () => {
    console.log('Server is up and running! 🚀')
})