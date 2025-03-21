import bcrypt from "bcrypt";
import User from "../schemas/user.schema.js";

export default class UserService {
  async register({ email, password, role }) {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User with this email already exists.");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and return user
    return User.create({
      email,
      password: hashedPassword,
      role,
    });
  }

  async login({ email, password }) {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid email or password.");
    }

    // Compare the incoming password and stored hash
    // incoming pass VS hashed pass
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid email or password.");
    }

    // Return user if valid credentials
    return user;
  }
}
