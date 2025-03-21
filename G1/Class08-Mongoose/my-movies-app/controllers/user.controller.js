import UserService from "../services/user.service.js";

export default class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async register(req, res) {
    try {
      const credentials = req.body;
      const user = await this.userService.register(credentials);
      res.status(201).json({
        message: "User registered successfully",
        email: user.email,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const credentials = req.body;
      const user = await this.userService.login(credentials);
      res.status(200).json({
        message: "User logged in successfully",
        email: user.email,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
