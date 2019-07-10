import Users from '../models/authModel';

class authController {
  static getUsers(req, res) {
    return res.json({
      message: 'List of all users',
      users: Users,
    });
  }

  static createUser(req, res) {
    const newId = parseInt(Users.length, 10) + 1;
    const { title, body } = req.body;
    const newUser = {
      id: newId,
      title,
      body,
    };
    Users.push(newUser);
    return res.status(200).json({
      message: 'created a new user',
    });
  }
}
export default authController;
