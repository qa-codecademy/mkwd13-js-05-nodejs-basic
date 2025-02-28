import { error } from "console";
import fs from "fs";

// Function to read existing users from users.json file
try {
  const existingUsers = fs.readFileSync("users.json", "utf8");
  const parsedUsers = JSON.parse(existingUsers);
  console.log(parsedUsers);
} catch {
  console.log("Error reading file", error);
}

const getUserById = (userId) => {
  const existingUsers = fs.readFileSync("users.json", "utf8");
  const parsedUsers = JSON.parse(existingUsers);
  const foundUser = parsedUsers.find((user) => user.id === userId);
  //   if (!foundUser) {
  //     return {};
  //   }
  //   return foundUser;

  //   return foundUser ? foundUser : {}; // ternary operator
  return foundUser ?? {}; // nullish coalescing operator
};

const foundUser = getUserById(100);
console.log(foundUser);

const addUser = (user) => {
  const existingUsers = fs.readFileSync("users.json", "utf8");
  const parsedUsers = JSON.parse(existingUsers);
  const newUserId = parsedUsers.length + 1;
  const newUser = {
    id: newUserId,
    name: user.name,
    username: user.username,
    email: user.email,
  };
  parsedUsers.push(newUser);
  fs.writeFileSync("users.json", JSON.stringify(parsedUsers), null, 2);
};

const newUser = {
  name: "Bob",
  username: "bobbobsky",
  email: "bob@email.com",
};

addUser(newUser);
