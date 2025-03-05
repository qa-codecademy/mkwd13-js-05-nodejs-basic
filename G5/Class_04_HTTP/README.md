# HTTP Module in Node.js

## Introduction

The HTTP module is a built-in Node.js module that enables you to create web servers and handle HTTP requests/responses. It's the foundation for web development in Node.js without external frameworks.

## Key Components

### 1. Request Object (req)

Contains information about incoming requests:

- `req.url` - URL path
- `req.method` - HTTP method (GET, POST, etc.)
- `req.headers` - Request headers

### 2. Response Object (res)

Used to send responses back to the client:

- `res.writeHead()` - Set status and headers
- `res.write()` - Send response data
- `res.end()` - Complete the response

### 3. Common Status Codes

- 200: OK
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

## Using Postman

### Installation

1. Download Postman from [postman.com/downloads](https://www.postman.com/downloads)
2. Install the application following your operating system's standard installation process
3. Create a free Postman account or skip sign-in for basic usage

### Basic Usage

1. **Creating a New Request**

   - Click the "+" button to create a new request tab
   - Enter your API endpoint URL in the address bar
   - Select the HTTP method (GET, POST, etc.) from the dropdown

2. **Setting Request Parameters**

   - Headers: Add custom headers under the "Headers" tab
   - Body: For POST/PUT requests, add request body under the "Body" tab
   - Query Params: Add URL parameters under the "Params" tab

3. **Sending Requests**

   - Click the "Send" button to execute the request
   - View the response status, headers, and body below
   - Response time and size are displayed for performance monitoring

4. **Saving Requests**
   - Click "Save" to store frequently used requests
   - Organize requests in collections for better management
   - Share collections with team members
