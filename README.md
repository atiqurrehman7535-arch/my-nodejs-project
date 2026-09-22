# My Node.js Project

## 📖 Description

This is a Node.js application that fetches user data from the JSONPlaceholder API and filters users based on their company catchPhrase. The application demonstrates modern JavaScript concepts including async/await, array methods, and object destructuring.

## 🎯 Features

 Fetches user data from JSONPlaceholder API  
Filters users whose company catchPhrase contains "group" or "service" (case-insensitive)  
 Uses Object Destructuring for clean code  
Formats output in a readable string format  
 Uses ES6+ modern JavaScript features  

## 🛠️ Technologies Used

- Node.js - JavaScript runtime environment
- node-fetch - For making HTTP requests
- ES6+ JavaScript - Modern JavaScript features

## 📋 What It Does

1. Fetches Data: Retrieves a list of users from the JSONPlaceholder API.
2. Filters Users: Finds users whose company catchPhrase contains:
   - "group" OR
   - "service" (case-insensitive)
3. Transforms Data: Uses Object Destructuring to extract:
   - Name
   - Email
   - City
4. Displays Results: Shows formatted output as:

   `User: [Name] | Email: [Email] | City: [City]`

## ⚙️ Installation

1. Clone the repository.
2. Open the project folder in your terminal.
3. Run:

   ```bash
   npm install
   ```

## ▶️ Run the Application

```bash
node app.js
```

##  Example Output

```bash
 Fetching users...
 Filtering users...
 Formatting data...

 Results:

User: Patricia Lebsack | Email: Julianne.OConner@kory.org | City: South Elvis
```

##  Notes

This project is a simple example of working with APIs and modern JavaScript in Node.js. It helps demonstrate how to:
- make HTTP requests
- filter arrays using conditions
- use destructuring for cleaner code
- format output for the console
