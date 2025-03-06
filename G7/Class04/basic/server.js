import http from "http";



// REQUEST =>IS AN OBJECT CONTAINS ALL INFORMATION ABOUT THE API REQUEST ITSELF

// RESPONSE =>IS AN OBJECT THAT CAN CONTAIN THE INFORMATIONS NEEDED TO RETURN API RESPONSE BACK TO THE CLIENT/USER
const server = http.createServer((request, response) => {
    // console.log(request)

    // HTTP METHOD USED FOR THE REQUEST
    // (GET, PUT, PATCH, DELETE, POST);
    const method = request.method;
    const url = request.url; // ENDPOINT

    console.log(`Incoming request ${method} to the server to ${url}.`);


    // EXPOSED FUNCTIONALLITY
    // http://localhost:3001
    // when url is / means this is DEFAULT ROUTE
    if(url === '/' && method === "GET"){
        response.end('<h1>Welcome to our application</h1>');
        return;
    }

    // EXPOSED FUNCTIONALLITY (EXPOSING AN API)
    // /about IS THE ENDPOINT REQUESTED
    // http://localhost:3001/about and http method is GET
    if(url === "/about" && method === "GET"){
        response.end('<h1>About page</h1>');
        return;
    }

    // http://localhost:3001/time and http method is GET
    // /time IS THE ENDPOINT REQUESTED
    if(url === "/time" && method === "GET"){
        const info = {
            currentTime: new Date().toISOString(),
            message: 'The current time'
        };

        response.end(JSON.stringify(info));
        return;
    }


    // FALLBACK SITUATIONS
    response.end(`<h1>ENDPOINT ${url} NOT FOUND</h1>`)


});


const PORT = 3001;
const HOST = "localhost"
server.listen(PORT, HOST, () => {
    console.log('Server is up and running.');
})
