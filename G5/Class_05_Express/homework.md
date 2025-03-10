# Homework - Express.js Basics 📚

## Task Description

Create a simple book library API using Express.js that allows users to manage a collection of books.

## General Requirements 📝

1. Create a basic Express server that runs on port 3000
2. Create an array to store books (no database needed)
3. Each book should have:

   - id (number)
   - title (string)
   - author (string)
   - year (number)

4. Implement the following routes:

   - GET `/books` - Returns all books
   - GET `/books/:id` - Returns a single book by id
   - POST `/books` - Adds a new book
   - DELETE `/books/:id` - Removes a book by id

5. Use Postman or similar tool to test your API

## Advanced Requirements 🚀

1. Add query parameters to GET `/books`:

   - `/books?author=Author Name` - Filter books by author
   - `/books?year=2020` - Filter books by year

2. Add a simple statistics endpoint:
   - GET `/stats` - Returns:
     - Total number of books
     - Number of books per author
     - Oldest and newest book

## Example Book Object

```javascript
{
    "id": 1,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "year": 1937
}
```

## Example Requests

```javascript
// Get all books
GET http://localhost:3000/books

// Get book by id
GET http://localhost:3000/books/1

// Add new book
POST http://localhost:3000/books
{
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "year": 1937
}

// Delete book
DELETE http://localhost:3000/books/1

// Get books by author
GET http://localhost:3000/books?author=Tolkien

// Get statistics
GET http://localhost:3000/stats
```

## Submission

Create a new folder with:

1. `package.json` with required dependencies
2. `index.js` containing your Express application

## Notes

- Use appropriate HTTP status codes
- Test all endpoints with different scenarios

Good luck! 🍀
