import Users from "../models/authModel";
import jwt from "jsonwebtoken";
import { APP_SECRET } from "../config";
import middleware from "../middleware";

class authController {
  static getUsers(req, res) {
    return res.json({
      message: "List of all users",
      users: Users
    });
  }

  static createUser(req, res) {
    const newId = parseInt(Users.length, 10) + 1;
    const { title, body } = req.body;
    const newUser = {
      id: newId,
      title,
      body
    };
    Users.push(newUser);
    const token = jwt.sign({ title: title }, APP_SECRET, {
      expiresIn: "24h" // expires in 24 hours
    });
    return res.status(200).json({
      title,
      body,
      token
    });
  }
}
export default authController;
