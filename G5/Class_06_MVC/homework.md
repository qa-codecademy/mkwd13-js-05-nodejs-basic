# Homework - Express MVC Pattern 📚

## Task Description

Refactor the book library API from the previous homework to follow the MVC (Model-View-Controller) pattern. Add some new features while maintaining a clean, organized code structure.

## General Requirements 📝

1. Restructure the project to follow MVC pattern:

   ```text
   project/
   ├── controllers/
   │   └── book.controller.js
   ├── models/
   │   └── book.model.js
   ├── routes/
   │   └── book.routes.js
   └── index.js
   ```

2. Move existing functionality into appropriate components:

   - Routes: URL routing definitions
   - Controllers: Request handling logic
   - Models: Data and business logic

3. Keep the same endpoints from previous homework:
   - GET `/books` - Returns all books
   - GET `/books/:id` - Returns a single book
   - POST `/books` - Adds a new book
   - DELETE `/books/:id` - Removes a book

## Advanced Requirements 🚀

1. Add new book features:

   - PUT `/books/:id` - Update a book
   - Add 'genre' field to books

2. Add basic book reviews:

   - POST `/books/:id/reviews` - Add a review
   - GET `/books/:id/reviews` - Get all reviews for a book
   - Each review should have:
     - rating (1-5)
     - comment
     - reviewer name

## Example Book Object

```javascript
{
    "id": 1,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "year": 1937,
    "genre": "Fantasy",
    "reviews": [
        {
            "rating": 5,
            "comment": "Amazing book!",
            "reviewer": "John Doe"
        }
    ]
}
```

## Example Requests

```javascript
// Update a book
PUT http://localhost:3000/books/1
{
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "year": 1937,
}

// Add a review
POST http://localhost:3000/books/1/reviews
{
    "rating": 5,
    "comment": "Great book!",
    "reviewer": "John Doe"
}
```

## Submission

Create a new folder with:

1. Properly structured MVC folders and files
2. `package.json` with dependencies

## Notes

- Keep the in-memory storage (no database required)
- Use appropriate HTTP status codes
- Test all endpoints with different scenarios

## Hints

- Controller methods should be thin and delegate business logic to the model
- Model should handle all data operations and validations
- Routes should only define endpoints and link to controller methods

Good luck! 🍀
