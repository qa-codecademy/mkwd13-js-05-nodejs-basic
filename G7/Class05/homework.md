```markdown
# Online Book Store

## Requirements:

- Create an online bookstore where users can browse all available books and add a new book to the store.

### Expectations:

- Set up an Express server with three routes.
- Create a JSON file named `books_store.db.json` and populate it with a few books.
- Each book should be represented as an object with the following properties:
  - `id`: string
  - `bookTitle`: string
  - `isAvailable`: boolean
  - `genre`: string
  - `author`: string
  - `pages`: number
- Create one middleware that logs the timestamp of the request made. Also log the method and the url of the request. 
  - BONUS: Instead of logging in the console, store that information in a logs.json file
#### Route Specifications:

1. **GET** `/books`: Returns all books available in the `books_store.db.json`.
2. **POST** `/books`: Adds a newly created book into the `books_store.db.json`.
```

#### Example `books_store.db.json`:

```json
[
  {
    "id": "1",
    "bookTitle": "To Kill a Mockingbird",
    "isAvailable": true,
    "genre": "Fiction",
    "author": "Harper Lee",
    "pages": 281
  },
  {
    "id": "2",
    "bookTitle": "1984",
    "isAvailable": true,
    "genre": "Dystopian",
    "author": "George Orwell",
    "pages": 328
  },
  {
    "id": "3",
    "bookTitle": "Pride and Prejudice",
    "isAvailable": false,
    "genre": "Romance",
    "author": "Jane Austen",
    "pages": 279
  }
]
```

## NOTE: Do not forget to send the postman collection. You can add it in the same repo as the homework. Thank you in advance!
