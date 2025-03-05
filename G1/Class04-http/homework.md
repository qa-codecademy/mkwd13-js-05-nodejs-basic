## Create Basic HTTP Server

Create a server using the HTTP module.
The server should handle the following routes:

- / (default route):
  Returns an HTML response with any content of your choice.
- /student:
  Returns an HTML response with the following student information:
  Student Name: "Your Name"
  Student Lastname: "Your Lastname"
  Academy: "The Academy you are at"
  Subject: "The current subject being learned"
- The server should listen on port 3000.

## Extend the HTTP server to handle an additional route

- /add_student (GET request):
  Returns an HTML form with:
  - A single text input for the student’s name.
    -A submit button.
  - When submitted, the form sends a POST request to /all_students.
- /all_students (POST request):
  Retrieves the student name from the form submission.

## Add EventEmitter

- Implement EventEmitter for handling student registrations.
- When a student submits their name:
  - Emit an event called studentAdded.
  - The event should:
    - Log the student’s name in a console.
    - Write the student’s name into students.txt using the FS module.
