# Homework - Recipe API with MongoDB & Mongoose 📚

## Task Description

Create a simple Recipe API using MongoDB and Mongoose to store and manage recipes.

## Initial Setup Requirements 📝

1. Create a proper project structure:

   ```text
   project/
   ├── config/
   │   └── db.config.js     # MongoDB connection
   ├── models/
   │   └── Recipe.js        # Recipe model
   ├── controllers/
   │   └── recipeController.js
   ├── routes/
   │   └── recipeRoutes.js
   ├── .env                 # Environment variables
   └── server.js
   ```

2. Set up environment variables in `.env`:

   ```env
   MONGO_USERNAME=your_username
   MONGO_PASSWORD=your_password
   MONGO_CLUSTER=your_cluster_url
   MONGO_DATABASE=recipes
   PORT=3000
   HOSTNAME=localhost
   ```

## Recipe Model Requirements 📋

Create a Recipe schema with these fields:

- `title` (String, required)
- `description` (String, required)
- `ingredients` (Array of Strings, required)
- `instructions` (Array of Strings, required)
- `cookingTime` (Number, in minutes)
- `difficulty` (String: 'easy', 'medium', 'hard')
- `isVegetarian` (Boolean)
- `category` (String: 'breakfast', 'lunch', 'dinner', 'dessert')

## API Endpoints Requirements 🛠

1. Basic CRUD:

   - GET `/recipes` - Get all recipes
   - GET `/recipes/:id` - Get a single recipe
   - POST `/recipes` - Create a recipe
   - PUT `/recipes/:id` - Update a recipe
   - DELETE `/recipes/:id` - Delete a recipe

## Advanced Requirements 🚀 (Optional)

1. Simple Filtering:

   - GET `/recipes/category/:category` - Get recipes by category

2. Add simple search:

   - GET `/recipes/search?title=pizza` - Search recipes by title

3. Add basic filtering in main endpoint:
   - GET `/recipes?difficulty=easy`
   - GET `/recipes?category=dinner`

## Example Recipe Object

```javascript
{
    "title": "Chocolate Chip Cookies",
    "description": "Classic homemade cookies",
    "ingredients": [
        "flour",
        "butter",
        "sugar",
        "chocolate chips"
    ],
    "instructions": [
        "Mix ingredients",
        "Make balls",
        "Bake for 10 minutes"
    ],
    "cookingTime": 30,
    "difficulty": "easy",
    "isVegetarian": true,
    "category": "dessert"
}
```

## Submission Requirements 📬

1. GitHub repository with:

   - Complete source code
   - `.env.example` file to make sure you have all the variables with same names:

   ```env
   MONGO_USERNAME=your_username
   MONGO_PASSWORD=your_password
   MONGO_CLUSTER=your_cluster_url
   MONGO_DATABASE=recipes
   PORT=3000
   HOSTNAME=localhost
   ```

2. Postman Collection:
   - Include all endpoints to test your API

## Notes 📝

- Focus on getting the basic CRUD operations working first
- Use environment variables for MongoDB connection
- Test all endpoints in Postman

Good luck! 🍀
