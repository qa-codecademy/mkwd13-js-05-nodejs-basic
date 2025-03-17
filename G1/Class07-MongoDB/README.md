# MongoDB

## What is MongoDB?

MongoDB is a popular open-source NoSQL database that stores data in flexible, JSON-like documents. Instead of using tables and rows as in traditional relational databases, MongoDB uses collections and documents. This makes it easier to represent complex hierarchical relationships and handle large volumes of unstructured data.

## Why is MongoDB Useful?

- **Flexible Schema**: Unlike SQL databases, MongoDB doesn't require a fixed schema. Documents in the same collection can have different fields.
- **Scalability**: MongoDB is designed to scale horizontally through sharding (distributing data across multiple servers).
- **High Performance**: Supports fast queries through indexing and can handle large amounts of data efficiently.
- **Easy Integration**: Works well with modern development stacks, especially JavaScript/Node.js applications.
- **Rich Query Language**: Supports complex queries while maintaining simplicity.

## Document vs SQL Databases

### SQL (Relational) Databases

- Fixed schema
- Data stored in tables with rows and columns
- Relationships managed through foreign keys
- ACID transactions
- Example: MySQL, PostgreSQL

### Document Databases (like MongoDB)

- Flexible schema
- Data stored in collections of JSON-like documents
- Nested data structures possible within documents
- Horizontal scaling
- Example: MongoDB, CouchDB

## MongoDB Atlas Setup

### 1. Create MongoDB Atlas Account

1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Try Free" and create an account
3. Choose the "Free" shared cluster option (M0 Sandbox)

### 2. Set Up Database

1. Create a new project
2. Build a database by clicking "Build a Database"
3. Select "FREE" shared cluster
4. Choose your preferred cloud provider and region
5. Click "Create Cluster"

### 3. Configure Database Access

1. Go to "Database Access" under Security
2. Click "Add New Database User"
3. Create a username and password (save these securely!)
4. Select "Read and write to any database" for user privileges
5. Click "Add User"

### 4. Configure Network Access

1. Go to "Network Access" under Security
2. Click "Add IP Address"
3. For development, you can click "Allow Access from Anywhere" (0.0.0.0/0)
   - Note: For production, limit to specific IP addresses

### 5. Get Connection String

1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Select your driver and version (Node.js)
4. Copy the connection string
5. Replace `<password>` with your database user password
